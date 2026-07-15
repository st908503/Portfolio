export function getTotalExperience(): string {
  const now = new Date();

  const experiences = [
    {
      start: new Date("2021-04-01"), // Internship
      end: new Date("2021-07-31"),
    },
    {
      start: new Date("2021-08-01"),
      end: new Date("2022-11-30"),
    },
    {
      start: new Date("2023-10-01"),
      end: new Date("2026-06-30"),
    },
    {
      start: new Date("2026-06-15"),
      end: now,
    },
  ];

  let totalMonths = 0;

  experiences.forEach(({ start, end }) => {
    const months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth()) +
      1;

    totalMonths += months;
  });

  return (totalMonths / 12).toFixed(1);
}