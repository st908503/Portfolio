"use client";

import { useThemeContext } from "@/features/theme/theme-provider";
import { blogs } from "@/lib/constants/blogs";
import { useParams } from "next/navigation";

export default function BlogPostPage() {
  const { theme } = useThemeContext();
  const params = useParams();
  const post = blogs.find((b) => b.slug === params.slug);

  const isDark = theme === "dark";

  if (!post) {
    return (
      <main
        className={`
          min-h-screen flex items-center justify-center px-6
          ${isDark ? "bg-zinc-950 text-zinc-200" : "bg-zinc-50 text-zinc-800"}
        `}
      >
        <div className="text-center">
          <h1 className="text-xl font-semibold mb-2">Post Not Found</h1>
          <p className={isDark ? "text-zinc-400" : "text-zinc-500"}>
            The blog post you’re looking for doesn’t exist.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main
      className={`
        w-full min-h-screen px-6 py-16
        ${isDark ? "bg-zinc-950 text-zinc-100" : "bg-zinc-50 text-zinc-900"}
      `}
    >
      <article className="mx-auto max-w-3xl">
        
        {/* Title */}
        <h1
          className={`
            text-3xl md:text-4xl font-bold tracking-tight
            ${isDark ? "text-white" : "text-zinc-900"}
          `}
        >
          {post.title}
        </h1>

        {/* Divider */}
        <div
          className={`
            mt-6 h-px w-full
            ${isDark ? "bg-zinc-800" : "bg-zinc-200"}
          `}
        />

        {/* Content */}
        <div
          className={`
            mt-8 whitespace-pre-line leading-8 text-[15px]
            ${isDark ? "text-zinc-300" : "text-zinc-700"}
          `}
        >
          {post.content}
        </div>
      </article>
    </main>
  );
}