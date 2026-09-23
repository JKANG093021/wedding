export type WeddingPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  orientation: "portrait" | "landscape";
};

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
  siteUrl: "https://wedding-invitations-theta-five.vercel.app",
  socialImage: "/images/social-invitation-card.png",
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
    ninongs: ["James Manacsis", "Dan Bautista", "Patrick Arthur Gauget", "Benjamin Dungan Jr."],
    ninangs: ["Narda Capegsan", "Lara Bautista", "Cherry Lyn Gauget", "Edna Ancheta", "Alma Sucdang", "Marline Gapuz"],
  },
  gallery: [
    { src: "/images/couple.webp", alt: "John Rey and Christine Ericka together", width: 1122, height: 1402, caption: "John Rey & Christine Ericka", orientation: "portrait" },
    { src: "/images/gallery/3292eb18-c579-421a-8265-2a4c67563b50.jpg", alt: "John Rey and Christine Ericka together beneath the trees", width: 2730, height: 4095, caption: "Together, beneath the trees", orientation: "portrait" },
    { src: "/images/gallery/c0c7fc6c-bbc1-42d1-951c-dcb627b2bb24.jpg", alt: "John Rey and Christine Ericka walking hand in hand on the bridge", width: 2730, height: 4095, caption: "A walk toward forever", orientation: "portrait" },
    { src: "/images/gallery/e13d79b9-5edb-4d62-89eb-22be992047e6.jpg", alt: "Christine Ericka leaning gently beside John Rey", width: 2730, height: 4095, caption: "A quiet promise", orientation: "portrait" },
    { src: "/images/gallery/af7b8cc3-928b-4686-acf8-829533137658.jpg", alt: "John Rey and Christine Ericka holding hands on the bridge", width: 2730, height: 4095, caption: "Hand in hand", orientation: "portrait" },
    { src: "/images/gallery/1ecadf04-a91d-472d-8a85-9c76b368d8b9.jpg", alt: "John Rey and Christine Ericka facing each other on the bridge", width: 4096, height: 2730, caption: "The beginning of forever", orientation: "landscape" },
    { src: "/images/gallery/6618ad70-30df-4af0-b297-0112dc5f3792.jpg", alt: "John Rey and Christine Ericka walking together", width: 2730, height: 4095, caption: "Every step with you", orientation: "portrait" },
    { src: "/images/gallery/de4ddf1f-459e-49cf-a017-28a33a967097.jpg", alt: "John Rey and Christine Ericka seated together on the bridge", width: 2730, height: 4095, caption: "Close to home", orientation: "portrait" },
    { src: "/images/gallery/b111ba36-b628-4a28-a36b-c57dfb0202fc.jpg", alt: "John Rey and Christine Ericka seated close together", width: 4096, height: 2730, caption: "A little closer", orientation: "landscape" },
    { src: "/images/gallery/86b29bd3-ca3e-4755-9a02-f3c2e4933095.jpg", alt: "John Rey and Christine Ericka back to back on the bridge", width: 4096, height: 2730, caption: "Side by side", orientation: "landscape" },
    { src: "/images/gallery/3c8605ed-0170-4abc-8f5f-01915f25e7af.jpg", alt: "John Rey and Christine Ericka smiling together on the bridge", width: 4096, height: 2730, caption: "A moment to remember", orientation: "landscape" },
    { src: "/images/gallery/51c4212f-2f56-4e5d-8bb6-9523d6fac858.jpg", alt: "John Rey and Christine Ericka seated back to back", width: 4096, height: 2730, caption: "Two hearts, one path", orientation: "landscape" },
    { src: "/images/gallery/c0ec04c7-0477-41f2-96bb-cbada4c5b647.jpg", alt: "John Rey and Christine Ericka resting together on the bridge", width: 4096, height: 2730, caption: "Here, with you", orientation: "landscape" },
    { src: "/images/gallery/84fe2a4d-39da-4cf5-a17f-7e07fdcebcc6.jpg", alt: "John Rey and Christine Ericka standing together in the garden", width: 2730, height: 4095, caption: "Our favorite place", orientation: "portrait" },
    { src: "/images/gallery/f5d0ca1e-c7b7-4f06-838a-9ae9705d3d34.jpg", alt: "Christine Ericka looking at John Rey beside the bridge", width: 2730, height: 4095, caption: "In every season", orientation: "portrait" },
    { src: "/images/gallery/6a9aaef7-1b38-4d1b-8dfa-eacd8f60c674.jpg", alt: "John Rey and Christine Ericka standing close together", width: 2730, height: 4095, caption: "Always us", orientation: "portrait" },
    { src: "/images/gallery/2e255fe3-334c-433d-a984-7b3789263a42.jpg", alt: "Christine Ericka smiling beside John Rey", width: 2730, height: 4095, caption: "You feel like home", orientation: "portrait" },
    { src: "/images/gallery/9fad4b29-14db-4295-9f0a-8a9667052879.jpg", alt: "John Rey and Christine Ericka close together in the garden", width: 2730, height: 4095, caption: "Love, in focus", orientation: "portrait" },
    { src: "/images/gallery/5049861f-da45-4933-9961-a519878c8541.jpg", alt: "John Rey and Christine Ericka standing together beneath the trees", width: 2730, height: 4095, caption: "The world fades away", orientation: "portrait" },
    { src: "/images/gallery/eb339e76-2fa5-4c37-93fb-92b77b33fea7.jpg", alt: "An intimate portrait of John Rey and Christine Ericka", width: 2730, height: 4095, caption: "A gentle kind of forever", orientation: "portrait" },
    { src: "/images/gallery/c0723ef0-e20f-4261-b8af-2f79dabbaa96.jpg", alt: "John Rey and Christine Ericka sharing a close moment", width: 2730, height: 4095, caption: "A little bit of magic", orientation: "portrait" },
  ] as WeddingPhoto[],
  entourage: [] as { role: string; names: string[] }[],
  reminders: [] as string[],
};
const parsedDate = wedding.date ? new Date(wedding.date) : null;
export const weddingDateLabel = wedding.dateLabel || (parsedDate && !Number.isNaN(parsedDate.getTime())
  ? new Intl.DateTimeFormat("en-PH", { dateStyle: "long", timeZone: wedding.timeZone }).format(parsedDate)
  : "[WEDDING DATE]");
