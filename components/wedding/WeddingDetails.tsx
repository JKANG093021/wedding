import { wedding, weddingDateLabel } from "@/data/wedding";
import { WeddingRings } from "./WeddingRings";

export function WeddingDetails() {
  const parsedDate = new Date(wedding.date);
  const weekday = Number.isNaN(parsedDate.getTime()) ? "" : new Intl.DateTimeFormat("en-PH", {
    weekday: "long",
    timeZone: wedding.timeZone,
  }).format(parsedDate);
  const locationUrl = /^https:\/\//i.test(wedding.googleMapsUrl) ? wedding.googleMapsUrl : "";
  return <section id="details" className="details-section" aria-labelledby="details-heading">
    <header className="details-title" data-reveal="rise">
      <WeddingRings /><p className="eyebrow">The celebration</p><h2 id="details-heading">Wedding details</h2>
    </header>
    <div className="detail-lines">
      <article className="detail-line" data-reveal="rise">
        <p className="eyebrow detail-label">Date</p><div><h3>{weddingDateLabel}</h3>{weekday && <p>{weekday}</p>}</div>
      </article>
      <article className="detail-line" data-reveal="rise" data-delay="100">
        <p className="eyebrow detail-label">Venue</p><div><h3>{wedding.venue}</h3><p>{wedding.venueAddress}</p></div>
      </article>
      <article className="detail-line" data-reveal="rise" data-delay="180">
        <p className="eyebrow detail-label">Schedule</p><div><h3>{wedding.ceremonyTime}</h3><p>{wedding.venue}</p></div>
      </article>
      <article className="detail-line" data-reveal="rise" data-delay="240">
        <p className="eyebrow detail-label">Location</p><div><p className="detail-note">Directions to our celebration</p>
          {locationUrl && <a className="location-outline" href={locationUrl} target="_blank" rel="noopener noreferrer">View location</a>}
        </div>
      </article>
    </div>
  </section>;
}
