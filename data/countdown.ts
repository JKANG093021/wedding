export type WeddingCountdown =
  | { status: "unconfirmed" | "today" | "married" }
  | { status: "counting"; days: number; hours: number; minutes: number; seconds: number };

function dayKey(date: Date, timeZone: string) {
  const parts = new Intl.DateTimeFormat("en", { timeZone, year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(date);
  const value = (type: string) => Number(parts.find(part => part.type === type)?.value);
  return value("year") * 10000 + value("month") * 100 + value("day");
}

/** Calendar-day states always follow the wedding timezone, wherever the guest is. */
export function getWeddingCountdown(now: number, date: string, timeZone: string): WeddingCountdown {
  const target = new Date(date);
  if (!date || !Number.isFinite(target.getTime()) || !Number.isFinite(now)) return { status: "unconfirmed" };
  const weddingDay = dayKey(target, timeZone);
  const currentDay = dayKey(new Date(now), timeZone);
  if (currentDay === weddingDay) return { status: "today" };
  if (currentDay > weddingDay) return { status: "married" };
  const remaining = Math.max(0, Math.ceil((target.getTime() - now) / 1000));
  return {
    status: "counting",
    days: Math.floor(remaining / 86400),
    hours: Math.floor(remaining / 3600) % 24,
    minutes: Math.floor(remaining / 60) % 60,
    seconds: remaining % 60,
  };
}
