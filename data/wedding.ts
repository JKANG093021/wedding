export type WeddingPhoto = { src: string; alt: string; width: number; height: number; caption: string };

/** Optional information stays empty until the couple confirms it. */
export const wedding = {
  groom: "John Rey",
  bride: "Christine Ericka",
  initials: "J & C",
  date: "2026-09-28T09:00:00+08:00",
  dateLabel: "", // Your preferred printed date once confirmed
  ceremonyTime: "9:00 AM",
  timeZone: "Asia/Manila",
  venue: "Caba Municipality Mayor’s Office",
  venueAddress: "Caba, La Union",
  googleMapsUrl: "",
  reception: {
    time: "10:00–10:30 AM",
    venue: "Akasia Restaurant",
    address: "",
    googleMapsUrl: "https://maps.app.goo.gl/e7QsqQ2v4fBtZpD1A",
  },
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
    enabled: true,
    youtubeId: "PfERKnhJ0u0",
    title: "Angels Brought Me Here — soft piano",
    playOnOpen: true,
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
    ninangs: ["Narda Capegsan", "Lara Bautista", "Edna Ancheta", "Alma Sucdang"],
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
