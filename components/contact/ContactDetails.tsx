"use client";

import { useTheme } from "@/features/theme/useTheme";
import { profile } from "@/lib/data/profile";

export function ContactDetails() {
  const { theme } = useTheme();

  return (
    <div className={`
      p-6 rounded-2xl border transition-all duration-300
      ${theme === "dark" 
        ? "border-zinc-800/50 bg-zinc-900/40 backdrop-blur-sm shadow-2xl shadow-zinc-900/20" 
        : "border-zinc-200/30 bg-white/70 backdrop-blur-sm shadow-xl shadow-zinc-100/40"
      }
    `}>
      <div className={`
        grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-zinc-800/30 lg:divide-x-0
        rounded-xl border
        ${theme === "dark" 
          ? "border-zinc-800/30 bg-zinc-900/30 backdrop-blur-sm" 
          : "border-zinc-200/20 bg-white/50"
        }
      `}>
        {/* Email */}
        <a
          href={`mailto:${profile.email}`}
          className={`
            group flex flex-col items-center gap-2 p-4 h-28 hover:bg-zinc-800/20 transition-all duration-300 rounded-xl
            hover:shadow-lg hover:shadow-zinc-900/20 dark:hover:shadow-zinc-800/30
            ${theme === "dark" ? "hover:bg-zinc-800/30" : "hover:bg-zinc-50/70 hover:shadow-zinc-200/30"}
          `}
          aria-label={`Send email to ${profile.email}`}
        >
          <div className={`
            h-12 w-12 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300
            ${theme === "dark" 
              ? "bg-zinc-800/80 text-zinc-300 shadow-zinc-900/30 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 group-hover:shadow-emerald-500/30 group-hover:scale-105" 
              : "bg-zinc-100/80 text-zinc-700 shadow-zinc-200/40 group-hover:bg-emerald-500/10 group-hover:text-emerald-600 group-hover:shadow-emerald-400/30 group-hover:scale-105"
            }
          `}>
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
            </svg>
          </div>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400 group-hover:text-emerald-300 dark:group-hover:text-emerald-300 transition-colors duration-200">
              Email
            </p>
            <p className="text-xs font-semibold mt-0.5 truncate max-w-[100px]">{profile.email}</p>
          </div>
        </a>

        {/* Location */}
        <div className="flex flex-col items-center justify-center p-4 h-28 cursor-default rounded-xl" role="img" aria-label="Location">
          <div className={`
            h-12 w-12 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300
            ${theme === "dark" 
              ? "bg-zinc-800/80 text-zinc-300 shadow-zinc-900/30 hover:bg-zinc-700/50 hover:scale-105" 
              : "bg-zinc-100/80 text-zinc-700 shadow-zinc-200/40 hover:bg-zinc-200/60 hover:scale-105"
            }
          `}>
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
            </svg>
          </div>
          <div className="text-center mt-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Location
            </p>
            <p className="text-xs font-semibold mt-0.5">{profile.location}</p>
          </div>
        </div>

        {/* LinkedIn */}
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className={`
            group flex flex-col items-center gap-2 p-4 h-28 hover:bg-zinc-800/20 transition-all duration-300 rounded-xl
            hover:shadow-lg hover:shadow-zinc-900/20 dark:hover:shadow-zinc-800/30
            ${theme === "dark" ? "hover:bg-zinc-800/30" : "hover:bg-zinc-50/70 hover:shadow-zinc-200/30"}
          `}
          aria-label="View LinkedIn profile"
        >
          <div className={`
            h-12 w-12 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300
            ${theme === "dark" 
              ? "bg-zinc-800/80 text-zinc-300 shadow-zinc-900/30 group-hover:bg-blue-500/20 group-hover:text-blue-400 group-hover:shadow-blue-500/30 group-hover:scale-105" 
              : "bg-zinc-100/80 text-zinc-700 shadow-zinc-200/40 group-hover:bg-blue-500/10 group-hover:text-blue-600 group-hover:shadow-blue-400/30 group-hover:scale-105"
            }
          `}>
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
            </svg>
          </div>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 group-hover:text-blue-300 dark:group-hover:text-blue-300 transition-colors duration-200">
              LinkedIn
            </p>
            <p className="text-xs font-semibold mt-0.5 truncate max-w-[100px]">
              linkedin.com/in/{profile.linkedin.split('/').pop()}
            </p>
          </div>
        </a>

        {/* GitHub */}
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className={`
            group flex flex-col items-center gap-2 p-4 h-28 hover:bg-zinc-800/20 transition-all duration-300 rounded-xl
            hover:shadow-lg hover:shadow-zinc-900/20 dark:hover:shadow-zinc-800/30
            ${theme === "dark" ? "hover:bg-zinc-800/30" : "hover:bg-zinc-50/70 hover:shadow-zinc-200/30"}
          `}
          aria-label="View GitHub profile"
        >
          <div className={`
            h-12 w-12 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300
            ${theme === "dark" 
              ? "bg-zinc-800/80 text-zinc-300 shadow-zinc-900/30 group-hover:bg-zinc-600/30 group-hover:text-zinc-100 group-hover:shadow-zinc-600/30 group-hover:scale-105" 
              : "bg-zinc-100/80 text-zinc-700 shadow-zinc-200/40 group-hover:bg-zinc-600/10 group-hover:text-zinc-900 group-hover:shadow-zinc-500/30 group-hover:scale-105"
            }
          `}>
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.058-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.176 2.873.171 3.177.768.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="currentColor"/>
            </svg>
          </div>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 group-hover:text-zinc-200 dark:group-hover:text-zinc-200 transition-colors duration-200">
              GitHub
            </p>
            <p className="text-xs font-semibold mt-0.5 truncate max-w-[100px]">
              github.com/{profile.github.split('/').pop()}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
