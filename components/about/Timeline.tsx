export function Timeline() {
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
    <ol className="mt-8 space-y-4 text-sm text-zinc-300">
      {items.map((item) => (
        <li key={item.title} className="border-l border-zinc-800 pl-4">
          <p className="text-xs text-zinc-500">{item.period}</p>
          <p className="text-sm font-medium text-zinc-50">{item.title}</p>
          <p className="text-xs text-zinc-300">{item.body}</p>
        </li>
      ))}
    </ol>
  );
}
