import assert from "node:assert/strict";
import { submitContactForm } from "../src/lib/contact/submit";

const previousKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
const previousFetch = globalThis.fetch;
const initial = { status: "idle" } as const;
const form = new FormData();
form.set("name", "Test Visitor");
form.set("contact", "visitor@example.com");
form.set("message", "Test enquiry");

async function main() {
  try {
    delete process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    globalThis.fetch = async () => { throw new Error("Must not call provider without a key"); };
    assert.equal((await submitContactForm(initial, form)).status, "error");

    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY = "test-key-not-sent-to-a-provider";
    globalThis.fetch = async (url, options) => {
      assert.equal(url, "https://api.web3forms.com/submit");
      const payload = JSON.parse(String(options?.body));
      assert.equal(payload.email, "visitor@example.com");
      assert.equal(payload.message, "Test enquiry");
      assert.equal(payload.phone, undefined);
      return Response.json({ success: true });
    };
    assert.equal((await submitContactForm(initial, form)).status, "success");

    for (const response of [
      Response.json({ success: false }),
      Response.json({ success: true }, { status: 500 }),
      new Response("invalid provider response"),
    ]) {
      globalThis.fetch = async () => response;
      assert.equal((await submitContactForm(initial, form)).status, "error");
    }
    globalThis.fetch = async () => { throw new Error("Network unavailable"); };
    assert.equal((await submitContactForm(initial, form)).status, "error");

    form.set("contact", "+91 90000 00000");
    globalThis.fetch = async (_url, options) => {
      const payload = JSON.parse(String(options?.body));
      assert.equal(payload.phone, "+91 90000 00000");
      assert.equal(payload.email, undefined);
      return Response.json({ success: true });
    };
    assert.equal((await submitContactForm(initial, form)).status, "success");
    console.log("Contact checks passed: missing key, email/phone payloads, provider rejection, HTTP failure, invalid JSON, network failure");
  } finally {
    globalThis.fetch = previousFetch;
    if (previousKey === undefined) delete process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    else process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY = previousKey;
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
