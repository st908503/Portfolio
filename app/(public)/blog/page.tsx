"use client";

import { useThemeContext } from "@/features/theme/theme-provider";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import Link from "next/link";
import { blogs } from "@/lib/constants/blogs";
import { Card } from "@/components/common/Card";

export default function BlogPage() {
  const { theme } = useThemeContext();

  return (
    <PageContainer>
      <Section id="blog" title="Blog" eyebrow="Writing">
        <p
          className={`
            max-w-2xl text-sm 
            ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'}
          `}
        >
          I plan to share notes on building fintech systems, frontend architecture, performance, and modern frontend best practices.
        </p>

        <div className="mt-6 space-y-4">
          {blogs.map((blog) => (
            <Link key={blog.slug} href={`/blog/${blog.slug}`} className="block">
              <Card className="hover:shadow-lg hover:border-blue-400 transition-all">
                <h3
                  className={`
                    font-semibold text-base 
                    ${theme === 'dark' ? 'text-zinc-200' : 'text-zinc-800'}
                  `}
                >
                  {blog.title}
                </h3>
                <p
                  className={`
                    text-sm mt-1 
                    ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}
                  `}
                >
                  {blog.excerpt}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </PageContainer>
  );
}