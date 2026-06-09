import Image from "next/image";
import type { leadershipTeam } from "@/lib/about-content";

type Leader = (typeof leadershipTeam)[number];

export function AboutTeamGrid({ members }: { members: readonly Leader[] }) {
  return (
    <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {members.map((member) => (
        <li
          key={member.name}
          className="overflow-hidden rounded-2xl border border-ink/8 bg-white shadow-sm transition-shadow hover:shadow-md"
        >
          <div className="relative aspect-[3/4] bg-gradient-to-b from-ink/5 to-ink/10">
            <Image
              src={member.image}
              alt={`${member.name}, ${member.role} at Pelago Consultants`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
              className="object-cover object-top"
            />
          </div>
          <div className="p-5">
            <h3 className="font-display text-lg font-bold text-ink">{member.name}</h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-accent">
              {member.role}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{member.bio}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
