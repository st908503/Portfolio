"use client";

import { useTheme } from "@/features/theme/useTheme";
import { profile } from "@/lib/data/profile";

export function ContactDetails() {
  const { theme } = useTheme();

  return (
    <div className={`
      space-y-4 p-6 rounded-2xl border transition-all duration-300
      ${theme === "dark" 
        ? "border-zinc-800/50 bg-zinc-900/40 backdrop-blur-sm shadow-2xl shadow-zinc-900/20" 
        : "border-zinc-200/30 bg-white/70 backdrop-blur-sm shadow-xl shadow-zinc-100/40"
      }
    `}>
      <div className={`
        space-y-3 prose prose-sm max-w-none
        ${theme === "dark" ? "text-zinc-200" : "text-zinc-700"}
      `}>
        <p className="text-base leading-relaxed">
          I’m open to frontend / React Native roles, fintech collaborations, and interesting
          product work. Currently based in {profile.location}.
        </p>
      </div>

      <div className={`
        grid grid-cols-1 divide-y divide-zinc-800/30 rounded-xl border
        ${theme === "dark" 
          ? "border-zinc-800/30 bg-zinc-900/30 backdrop-blur-sm" 
          : "border-zinc-200/20 bg-white/50"
        }
      `}>
        <a
          href={`mailto:${profile.email}`}
          className={`
            group flex items-center gap-3 p-4 hover:bg-zinc-800/20 dark:hover:bg-zinc-800/20
            transition-all duration-200 hover:rounded-t-xl
            ${theme === "dark" ? "hover:bg-zinc-800/30" : "hover:bg-zinc-50/50"}
          `}
        >
          <div className={`
            h-10 w-10 rounded-lg flex items-center justify-center text-sm font-medium shadow-md
            ${theme === "dark" 
              ? "bg-zinc-800 text-zinc-300 shadow-zinc-900/20 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 group-hover:shadow-emerald-500/25" 
              : "bg-zinc-100 text-zinc-700 shadow-zinc-200/30 group-hover:bg-emerald-500/10 group-hover:text-emerald-600 group-hover:shadow-emerald-400/30"
            }
          `}>
            ✉️
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-emerald-400">
              Email
            </p>
            <p className="text-sm font-medium">{profile.email}</p>
          </div>
        </a>

        <div className="p-4">
          <div className="flex items-center gap-3">
            <div className={`
              h-10 w-10 rounded-lg flex items-center justify-center text-sm font-medium shadow-md
              ${theme === "dark" 
                ? "bg-zinc-800 text-zinc-300 shadow-zinc-900/20" 
                : "bg-zinc-100 text-zinc-700 shadow-zinc-200/30"
              }
            `}>
              📍
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                Location
              </p>
              <p className="text-sm font-medium">{profile.location}</p>
            </div>
          </div>
        </div>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className={`
            group flex items-center gap-3 p-4 hover:bg-zinc-800/20 dark:hover:bg-zinc-800/20
            transition-all duration-200 hover:rounded-b-xl
            ${theme === "dark" ? "hover:bg-zinc-800/30" : "hover:bg-zinc-50/50"}
          `}
        >
          <div className={`
            h-10 w-10 rounded-lg flex items-center justify-center text-sm font-medium shadow-md
            ${theme === "dark" 
              ? "bg-zinc-800 text-zinc-300 shadow-zinc-900/20 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 group-hover:shadow-emerald-500/25" 
              : "bg-zinc-100 text-zinc-700 shadow-zinc-200/30 group-hover:bg-emerald-500/10 group-hover:text-emerald-600 group-hover:shadow-emerald-400/30"
            }
          `}>
            💼
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-emerald-400">
              LinkedIn
            </p>
            <p className="text-sm font-medium truncate max-w-[200px]">
              linkedin.com/in/{profile.linkedin.split('/').pop()}
            </p>
          </div>
        </a>

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className={`
            group flex items-center gap-3 p-4 hover:bg-zinc-800/20 dark:hover:bg-zinc-800/20
            transition-all duration-200
            ${theme === "dark" ? "hover:bg-zinc-800/30" : "hover:bg-zinc-50/50"}
          `}
        >
          <div className={`
            h-10 w-10 rounded-lg flex items-center justify-center text-sm font-medium shadow-md
            ${theme === "dark" 
              ? "bg-zinc-800 text-zinc-300 shadow-zinc-900/20 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 group-hover:shadow-emerald-500/25" 
              : "bg-zinc-100 text-zinc-700 shadow-zinc-200/30 group-hover:bg-emerald-500/10 group-hover:text-emerald-600 group-hover:shadow-emerald-400/30"
            }
          `}>
            💻
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-emerald-400">
              GitHub
            </p>
            <p className="text-sm font-medium truncate max-w-[200px]">
              github.com/{profile.github.split('/').pop()}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
