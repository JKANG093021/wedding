import { wedding } from "@/data/wedding";
export function Monogram({ large = false }: { large?: boolean }) {
  const [first, second] = wedding.initials.split("&").map(part => part.trim());
  return <span className={`monogram${large ? " monogram-large" : ""}`} aria-label={wedding.initials}>
    <span aria-hidden="true">{first}<span className="monogram-amp">&</span>{second}</span>
  </span>;
}
