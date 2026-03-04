"use client";

import { useTheme } from "@/features/theme/useTheme";
import { profile } from "@/lib/data/profile";

export function ContactDetails() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const cardBase = `
    group flex flex-col items-center justify-center
    gap-2 p-2 h-28 rounded-xl
    transition-all duration-300
    hover:scale-[1.03]
  `;

  const cardSurface = isDark
    ? "bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-800/40 shadow-lg hover:shadow-zinc-900/30"
    : "bg-white/70 border border-zinc-200/40 hover:bg-white shadow-md hover:shadow-zinc-300/40";

  const iconBase = `
    h-12 w-12 rounded-xl flex items-center justify-center
    transition-all duration-300 shadow-md
  `;

  const textLabel = isDark
    ? "text-xs font-semibold uppercase tracking-wider text-zinc-400"
    : "text-xs font-semibold uppercase tracking-wider text-zinc-500";

  const textValue = isDark
    ? "text-xs font-semibold text-zinc-200"
    : "text-xs font-semibold text-zinc-800";

  return (
    <div
      className={`p-6 rounded-2xl transition-all duration-300 ${
        isDark
          ? "bg-zinc-900/50 border border-zinc-800/50 shadow-2xl shadow-zinc-950/40 backdrop-blur-xl"
          : "bg-white/80 border border-zinc-200/50 shadow-xl shadow-zinc-200/40 backdrop-blur-xl"
      }`}
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {/* Phone */}
        <a
          href={`tel:${profile.phone}`}
          className={`${cardBase} ${cardSurface}`}
        >
          <div
            className={`${iconBase} ${
              isDark
                ? "bg-emerald-500/15 text-emerald-400 group-hover:bg-emerald-500/25"
                : "bg-emerald-500/10 text-emerald-600 group-hover:bg-emerald-500/20"
            }`}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79a15.054 15.054 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.72 11.72 0 003.67.59 1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.47a1 1 0 011 1 11.72 11.72 0 00.59 3.67 1 1 0 01-.24 1.01l-2.2 2.11z" />
            </svg>
          </div>
          <p className={textLabel}>Phone</p>
          <p className={`${textValue} truncate max-w-[120px]`}>
            {profile.phone}
          </p>
        </a>

        {/* Email */}
        <a
          href={`mailto:${profile.email}`}
          className={`${cardBase} ${cardSurface}`}
        >
          <div
            className={`${iconBase} ${
              isDark
                ? "bg-emerald-500/15 text-emerald-400 group-hover:bg-emerald-500/25"
                : "bg-emerald-500/10 text-emerald-600 group-hover:bg-emerald-500/20"
            }`}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </div>
          <p className={textLabel}>Email</p>
          <p className={`${textValue} truncate max-w-[140px]`}>
            {profile.email}
          </p>
        </a>

        {/* Location */}
        <div className={`${cardBase} ${cardSurface} cursor-default`}>
          <div
            className={`${iconBase} ${
              isDark
                ? "bg-zinc-700/40 text-zinc-300"
                : "bg-zinc-200/60 text-zinc-700"
            }`}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
            </svg>
          </div>
          <p className={textLabel}>Location</p>
          <p className={textValue}>{profile.location}</p>
        </div>

        {/* LinkedIn */}
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className={`${cardBase} ${cardSurface}`}
        >
          <div
            className={`${iconBase} ${
              isDark
                ? "bg-blue-500/15 text-blue-400 group-hover:bg-blue-500/25"
                : "bg-blue-500/10 text-blue-600 group-hover:bg-blue-500/20"
            }`}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43A2.07 2.07 0 113.27 5.36a2.07 2.07 0 012.07 2.07zM20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28z" />
            </svg>
          </div>
          <p className={textLabel}>LinkedIn</p>
          <p className={`${textValue} truncate max-w-[130px]`}>
            linkedin.com/in/{profile.linkedin.split("/").pop()}
          </p>
        </a>

        {/* GitHub */}
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className={`${cardBase} ${cardSurface}`}
        >
          <div
            className={`${iconBase} ${
              isDark
                ? "bg-zinc-700/40 text-zinc-200 group-hover:bg-zinc-600/50"
                : "bg-zinc-200/70 text-zinc-800 group-hover:bg-zinc-300/70"
            }`}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.92.57.1.78-.24.78-.54v-2.1c-3.2.7-3.88-1.39-3.88-1.39-.53-1.33-1.3-1.69-1.3-1.69-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.48.11-3.08 0 0 .97-.31 3.18 1.18a11.1 11.1 0 015.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.6.24 2.79.12 3.08.74.81 1.19 1.85 1.19 3.11 0 4.43-2.71 5.41-5.29 5.69.41.35.78 1.03.78 2.08v3.09c0 .3.2.65.79.54A10.99 10.99 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
          </div>
          <p className={textLabel}>GitHub</p>
          <p className={`${textValue} truncate max-w-[130px]`}>
            github.com/{profile.github.split("/").pop()}
          </p>
        </a>
      </div>
    </div>
  );
}
