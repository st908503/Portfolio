"use client";

import { useState, useRef } from "react";
import { useTheme } from "@/features/theme/useTheme";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const { theme } = useTheme();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(e.currentTarget),
      });

      const data = await res.json();
      
      if (!res.ok || data.ok !== true) {
        console.error("API Error:", data);
        throw new Error(data.error || "Request failed");
      }
      
      console.log("Success:", data);
      setStatus("success");
      formRef.current?.reset();
    } catch (error) {
      console.error("Form error:", error);
      setStatus("error");
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className={`
        space-y-4 rounded-xl border p-6 transition-all duration-300
        ${theme === "dark" 
          ? "border-zinc-800/50 bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-sm shadow-2xl shadow-zinc-900/20" 
          : "border-zinc-200/50 bg-gradient-to-br from-zinc-50/80 to-white/80 backdrop-blur-sm shadow-xl shadow-zinc-200/30"
        }
      `}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1.5">
          <label 
            className={`
              text-xs font-medium tracking-wide uppercase
              ${theme === "dark" ? "text-zinc-300" : "text-zinc-600"}
            `}
            htmlFor="name"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            className={`
              w-full rounded-lg border px-4 py-3 text-sm transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-emerald-500/50
              ${theme === "dark" 
                ? "border-zinc-700/50 bg-zinc-900/50 text-zinc-100 placeholder-zinc-500 shadow-inner shadow-zinc-900/30 hover:border-zinc-600/70" 
                : "border-zinc-200/50 bg-white/70 text-zinc-900 placeholder-zinc-500 shadow-sm hover:border-zinc-300/70 hover:shadow-md"
              }
            `}
            placeholder="What's your name?"
            required
          />
        </div>
        
        <div className="space-y-1.5">
          <label 
            className={`
              text-xs font-medium tracking-wide uppercase
              ${theme === "dark" ? "text-zinc-300" : "text-zinc-600"}
            `}
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={`
              w-full rounded-lg border px-4 py-3 text-sm transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-emerald-500/50
              ${theme === "dark" 
                ? "border-zinc-700/50 bg-zinc-900/50 text-zinc-100 placeholder-zinc-500 shadow-inner shadow-zinc-900/30 hover:border-zinc-600/70" 
                : "border-zinc-200/50 bg-white/70 text-zinc-900 placeholder-zinc-500 shadow-sm hover:border-zinc-300/70 hover:shadow-md"
              }
            `}
            placeholder="your@email.com"
            required
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label 
          className={`
            text-xs font-medium tracking-wide uppercase
            ${theme === "dark" ? "text-zinc-300" : "text-zinc-600"}
          `}
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`
            w-full rounded-lg border px-4 py-3 text-sm transition-all duration-200 resize-vertical
            focus:outline-none focus:ring-2 focus:ring-emerald-500/50
            ${theme === "dark" 
              ? "border-zinc-700/50 bg-zinc-900/50 text-zinc-100 placeholder-zinc-500 shadow-inner shadow-zinc-900/30 hover:border-zinc-600/70" 
              : "border-zinc-200/50 bg-white/70 text-zinc-900 placeholder-zinc-500 shadow-sm hover:border-zinc-300/70 hover:shadow-md"
            }
          `}
          placeholder="Tell me about your project..."
          required
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className={`
          group inline-flex w-full items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold
          transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]
          disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100
          shadow-lg hover:shadow-xl active:shadow-lg
          ${theme === "dark" 
            ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-zinc-900 shadow-emerald-500/25 hover:from-emerald-400 hover:to-emerald-500" 
            : "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-emerald-400/40 hover:from-emerald-400 hover:to-emerald-500"
          }
        `}
      >
        <span className="flex items-center gap-2">
          {status === "loading" ? (
            <>
              <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </span>
      </button>

      {status === "success" && (
        <div className={`
          rounded-lg border p-4 text-sm shadow-md transition-all duration-200
          ${theme === "dark" 
            ? "border-emerald-800/50 bg-emerald-900/30 text-emerald-200 shadow-emerald-900/20" 
            : "border-emerald-200/50 bg-emerald-50/80 text-emerald-800 shadow-emerald-200/30"
          }
        `}>
          Thanks! I'll get back to you within 24 hours.
        </div>
      )}
      
      {status === "error" && (
        <div className={`
          rounded-lg border p-4 text-sm shadow-md transition-all duration-200
          ${theme === "dark" 
            ? "border-red-800/50 bg-red-900/30 text-red-200 shadow-red-900/20" 
            : "border-red-200/50 bg-red-50/80 text-red-800 shadow-red-200/30"
          }
        `}>
          Something went wrong. Please try again or email me directly.
        </div>
      )}
    </form>
  );
}
