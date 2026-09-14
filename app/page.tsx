import { InvitationExperience } from "@/components/wedding/InvitationExperience";
import { Hero } from "@/components/wedding/Hero";
import { CouplePortrait } from "@/components/wedding/CouplePortrait";
import { WeddingDetails } from "@/components/wedding/WeddingDetails";
import { WeddingParty } from "@/components/wedding/WeddingParty";
import { Countdown } from "@/components/wedding/Countdown";
import { Gallery } from "@/components/wedding/Gallery";
import { FinalMessage } from "@/components/wedding/FinalMessage";

export default function Home() {
  return <InvitationExperience><main><Hero /><CouplePortrait /><WeddingDetails /><WeddingParty /><Countdown /><Gallery /></main><FinalMessage /></InvitationExperience>;
}
