export type WeddingPhoto = { src: string; alt: string; width: number; height: number; caption: string };

/** Optional information stays empty until the couple confirms it. */
export const wedding = {
  groom: "John Rey",
  bride: "Christine Ericka",
  initials: "J & C",
  date: "2026-09-28T10:00:00+08:00",
  dateLabel: "", // Your preferred printed date once confirmed
  ceremonyTime: "10:00 AM – 10:30 AM",
  timeZone: "Asia/Manila",
  venue: "Akasia Restaurant",
  venueAddress: "Paringao, Bauang, La Union",
  googleMapsUrl: "https://maps.app.goo.gl/e7QsqQ2v4fBtZpD1A",
  rsvpDeadline: "",
  rsvpUrl: "",
  siteUrl: "https://john-rey-christine-ericka.baliguatjohnrey91.chatgpt.site", // Replace with your final Vercel domain when moving hosts
  socialImage: "/images/social-preview.jpg",
  heroPhoto: {
    src: "/images/couple.webp",
    alt: "John Rey and Christine Ericka together",
    width: 1122,
    height: 1402,
    objectPosition: "50% 50%",
  },
  music: {
    enabled: false, // Enable after placing a licensed audio file below
    src: "/audio/wedding-song.mp3",
    title: "Our wedding song",
    playOnOpen: false, // Explicit opt-in by default
  },
  attire: "",
  attireColors: [] as string[],
  parents: {
    bride: {
      fullName: "Christine Ericka Fontanilla",
      father: "Edgar Fontanilla",
      mother: "Clarinda Fontanilla",
    },
    groom: {
      fullName: "John Rey Baliguat",
      father: "William Ancheta",
      mother: "Ma. Bellie Baliguat",
    },
  },
  principalSponsors: {
    ninongs: ["James Manacsis", "Dan Bautista"],
    ninangs: ["Edna Ancheta", "Alma Sucdang", "Narda Capegsan", "Lara Bautista"],
  },
  gallery: [
    { src: "/images/couple.webp", alt: "John Rey and Christine Ericka in wedding attire", width: 1122, height: 1402, caption: "John Rey & Christine Ericka" },
  ] as WeddingPhoto[],
  entourage: [] as { role: string; names: string[] }[],
  reminders: [] as string[],
};
const parsedDate = wedding.date ? new Date(wedding.date) : null;
export const weddingDateLabel = wedding.dateLabel || (parsedDate && !Number.isNaN(parsedDate.getTime())
  ? new Intl.DateTimeFormat("en-PH", { dateStyle: "long", timeZone: wedding.timeZone }).format(parsedDate)
  : "[WEDDING DATE]");
