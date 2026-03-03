"use client";

import { useThemeContext } from "@/features/theme/theme-provider";

type Params = {
  params: { slug: string };
};

export default function BlogPostPage({ params }: Params) {
  const { theme } = useThemeContext();

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <p className={`
        text-sm 
        ${theme === 'dark' 
          ? 'text-zinc-400' 
          : 'text-zinc-500'
        }
      `}>
        Blog post: <span className={`
          font-mono 
          ${theme === 'dark' 
            ? 'text-zinc-200' 
            : 'text-zinc-700'
          }
        `}>{params.slug}</span>
      </p>
      <p className={`
        mt-4 text-sm 
        ${theme === 'dark' 
          ? 'text-zinc-300' 
          : 'text-zinc-600'
        }
      `}>
        Dynamic blog posts will be implemented here later.
      </p>
    </main>
  );
}
