import Image from "next/image";

export function BotanicalOrnament({ position = "left" }: { position?: "left" | "right" }) {
  return <Image
    src="/images/botanical-corner.webp"
    alt=""
    width={900}
    height={900}
    sizes="(max-width: 760px) 180px, 360px"
    className={`botanical-ornament botanical-${position}`}
    aria-hidden="true"
    data-reveal="botanical"
  />;
}
