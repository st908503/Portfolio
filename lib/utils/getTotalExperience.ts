export function getTotalExperience(startDate: string = "2021-04-01"): string {
  const start = new Date(startDate);
  const now = new Date();

  const diffMs = now.getTime() - start.getTime();
  const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365.25);

  if (diffYears < 1) return `${diffYears.toFixed(1)} yrs`;
  if (diffYears < 5) return `${diffYears.toFixed(1)} yrs`;
  return `${Math.round(diffYears)}+ yrs`;
}
