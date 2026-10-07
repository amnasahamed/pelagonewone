"""Exercise promotion and rollback in temporary directories, never on the server."""
import os
from pathlib import Path
import shutil
import subprocess
import tarfile
import tempfile

SCRIPT = Path(__file__).with_name("deploy-infinity.sh").resolve()
COMMIT = "a" * 40
RSYNC = shutil.which("rsync")
assert RSYNC, "rsync is required"


def fixture(base, name):
    root = base / name
    live = root / "pelagoconsultants.com"
    stage = root / "deploy-releases" / "pelago-123-1"
    live.mkdir(parents=True)
    stage.mkdir(parents=True)
    (live / "index.html").write_text("original site")
    (live / "old.html").write_text("old file")
    (live / ".htaccess").write_text("hosting rules")
    for folder in [".well-known", "error_pages"]:
        (live / folder).mkdir()
        (live / folder / "keep.txt").write_text("host managed")
    for page in ["index.html", "about/index.html", "contact/index.html", "services/index.html"]:
        path = stage / page
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text("new site")
    (stage / "_next").mkdir()
    (stage / "deployment.txt").write_text(COMMIT + "\n")
    return root, live, stage


def deploy(live, stage, env=None):
    return subprocess.run(
        ["bash", str(SCRIPT), str(stage), str(live), "123-1", COMMIT],
        env=env, capture_output=True, text=True,
    )


with tempfile.TemporaryDirectory(prefix="pelago-deploy-test-") as directory:
    base = Path(directory).resolve()
    root, live, stage = fixture(base, "success")
    result = deploy(live, stage)
    assert result.returncode == 0, result.stderr
    assert (live / "index.html").read_text() == "new site"
    assert not (live / "old.html").exists()
    assert not stage.exists()
    assert (live / ".htaccess").read_text() == "hosting rules"
    assert (live / "error_pages/keep.txt").exists()
    assert (live / ".well-known/keep.txt").exists()
    with tarfile.open(root / "deploy-backups/pelagoconsultants-123-1.tar.gz") as archive:
        assert archive.extractfile("./index.html").read() == b"original site"

    root, live, stage = fixture(base, "rollback")
    wrapper_dir = root / "bin"
    wrapper_dir.mkdir()
    wrapper = wrapper_dir / "rsync"
    wrapper.write_text(
        '#!/bin/bash\n'
        'if [ ! -e "$RSYNC_TEST_FLAG" ]; then\n'
        '  touch "$RSYNC_TEST_FLAG"\n'
        '  printf partial > "$RSYNC_TEST_LIVE/index.html"\n'
        '  exit 42\n'
        'fi\n'
        'exec "$RSYNC_TEST_BINARY" "$@"\n'
    )
    wrapper.chmod(0o755)
    env = dict(
        os.environ, PATH=str(wrapper_dir) + ":" + os.environ["PATH"],
        RSYNC_TEST_FLAG=str(root / "failed-once"), RSYNC_TEST_LIVE=str(live),
        RSYNC_TEST_BINARY=RSYNC,
    )
    result = deploy(live, stage, env)
    assert result.returncode == 42, (result.returncode, result.stderr)
    assert (live / "index.html").read_text() == "original site"
    assert (live / "old.html").exists()
    assert (live / ".htaccess").read_text() == "hosting rules"

    root, live, stage = fixture(base, "invalid-stage")
    (stage / "contact/index.html").unlink()
    assert deploy(live, stage).returncode != 0
    assert (live / "index.html").read_text() == "original site"
    assert not (root / "deploy-backups").exists()

print("Deployment checks passed: promotion, backup, host files, rollback, invalid export rejection")
