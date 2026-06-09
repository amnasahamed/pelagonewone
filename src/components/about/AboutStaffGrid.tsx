import Image from "next/image";
import type { extendedTeam } from "@/lib/about-content";

type StaffMember = (typeof extendedTeam)[number];

export function AboutStaffGrid({ members }: { members: readonly StaffMember[] }) {
  return (
    <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {members.map((member) => (
        <li
          key={member.name}
          className="overflow-hidden rounded-xl border border-ink/8 bg-white text-center shadow-sm"
        >
          <div className="relative aspect-square bg-paper-warm">
            <Image
              src={member.image}
              alt={`${member.name}, ${member.role}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              className="object-cover object-top"
            />
          </div>
          <div className="px-3 py-3">
            <p className="text-sm font-semibold text-ink">{member.name}</p>
            <p className="mt-0.5 text-[11px] leading-snug text-muted">{member.role}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
