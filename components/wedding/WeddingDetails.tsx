import { wedding, weddingDateLabel } from "@/data/wedding";
import { WeddingRings } from "./WeddingRings";

export function WeddingDetails() {
  const parsedDate = new Date(wedding.date);
  const weekday = Number.isNaN(parsedDate.getTime()) ? "" : new Intl.DateTimeFormat("en-PH", {
    weekday: "long",
    timeZone: wedding.timeZone,
  }).format(parsedDate);
  const ceremonyLocationUrl = /^https:\/\//i.test(wedding.googleMapsUrl) ? wedding.googleMapsUrl : "";
  const receptionLocationUrl = /^https:\/\//i.test(wedding.reception.googleMapsUrl) ? wedding.reception.googleMapsUrl : "";
  return <section id="details" className="details-section" aria-labelledby="details-heading">
    <header className="details-title" data-reveal="rise">
      <WeddingRings /><p className="eyebrow">The celebration</p><h2 id="details-heading">Wedding details</h2>
    </header>
    <div className="detail-lines">
      <article className="detail-line" data-reveal="rise">
        <p className="eyebrow detail-label">Date</p><div><h3>{weddingDateLabel}</h3>{weekday && <p>{weekday}</p>}</div>
      </article>
      <article className="detail-line" data-reveal="rise" data-delay="100">
        <p className="eyebrow detail-label">Ceremony</p><div><h3>{wedding.ceremonyTime}</h3><p>{wedding.venue}</p><p>{wedding.venueAddress}</p>
          {ceremonyLocationUrl && <a className="location-outline" href={ceremonyLocationUrl} target="_blank" rel="noopener noreferrer">View ceremony location</a>}
        </div>
      </article>
      <article className="detail-line" data-reveal="rise" data-delay="180">
        <p className="eyebrow detail-label">Reception</p><div><h3>{wedding.reception.time}</h3><p>{wedding.reception.venue}</p>{wedding.reception.address && <p>{wedding.reception.address}</p>}
          {receptionLocationUrl && <a className="location-outline" href={receptionLocationUrl} target="_blank" rel="noopener noreferrer">View reception location</a>}
        </div>
      </article>
    </div>
  </section>;
}
