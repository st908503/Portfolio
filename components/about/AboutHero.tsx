import { profile } from "@/lib/data/profile";

export function AboutHero() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
        About {profile.name}
      </h1>
      <p className="max-w-2xl text-sm text-zinc-300">
        I’m a frontend engineer focused on React, React Native, and fintech ecosystems.
        I enjoy building secure payment flows, RBAC-driven dashboards, and high-performance
        apps that handle real money and real users at scale.
      </p>
    </div>
  );
}
