"use client";

import { useThemeContext } from "@/features/theme/theme-provider";

export function Timeline() {
  const { theme } = useThemeContext();

  const items = [
    {
      period: "2023 – Present",
      title: "Frontend Developer · Cash Friend Fintech",
      body:
        "Leading merchant payments, UPI/BBPS flows, React Native app architecture, and security for fintech products.",
    },
    {
      period: "2021 – 2023",
      title: "Software Engineer · TCS",
      body:
        "Built reusable frontend modules, optimized performance, and improved UX for enterprise web applications.",
    },
    {
      period: "2017 – 2021",
      title: "B.Tech (CSE) · GL Bajaj",
      body: "Graduated with 78.24% and solid CS fundamentals in data structures and algorithms.",
    },
  ];

  return (
    <ol className={`
      mt-8 space-y-4 text-sm 
      ${theme === 'dark' 
        ? 'text-zinc-300' 
        : 'text-zinc-600'
      }
    `}>
      {items.map((item) => (
        <li 
          key={item.title} 
          className={`
            border-l pl-4
            ${theme === 'dark' 
              ? 'border-zinc-800' 
              : 'border-zinc-200'
            }
          `}
        >
          <p className={`
            text-xs 
            ${theme === 'dark' 
              ? 'text-zinc-500' 
              : 'text-zinc-500'
            }
          `}>
            {item.period}
          </p>
          <p className={`
            text-sm font-medium 
            ${theme === 'dark' 
              ? 'text-zinc-50' 
              : 'text-zinc-900'
            }
          `}>
            {item.title}
          </p>
          <p className={`
            text-xs 
            ${theme === 'dark' 
              ? 'text-zinc-300' 
              : 'text-zinc-600'
            }
          `}>
            {item.body}
          </p>
        </li>
      ))}
    </ol>
  );
}
