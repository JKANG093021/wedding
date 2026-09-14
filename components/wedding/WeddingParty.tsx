import { wedding } from "@/data/wedding";
import { BotanicalOrnament } from "./BotanicalOrnament";
import { WeddingRings } from "./WeddingRings";

const families = [
  { label: "Parents of the bride", person: wedding.parents.bride },
  { label: "Parents of the groom", person: wedding.parents.groom },
];

export function WeddingParty() {
  return <section id="sponsors" className="sponsors-section" aria-labelledby="sponsors-heading">
    <BotanicalOrnament position="left" />
    <BotanicalOrnament position="right" />
    <div className="sponsors-inner">
      <header className="sponsors-heading" data-reveal="rise">
        <p className="eyebrow">With the blessing of</p>
        <h2 id="sponsors-heading">Our families</h2>
      </header>

      <div className="family-grid">
        {families.map((family, index) => <article className="family-group" data-reveal="rise" data-delay={index * 120} key={family.label}>
          <p className="eyebrow family-label">{family.label}</p>
          <h3>{family.person.fullName}</h3>
          <dl className="parent-list">
            <div><dt>Father</dt><dd>{family.person.father}</dd></div>
            <div><dt>Mother</dt><dd>{family.person.mother}</dd></div>
          </dl>
        </article>)}
      </div>

      <div className="sponsors-ornament" data-reveal="rings" aria-hidden="true">
        <i /><WeddingRings /><i />
      </div>

      <header className="principal-heading" data-reveal="rise">
        <p className="eyebrow">Our principal sponsors</p>
        <h2>Ninongs <em>&</em> Ninangs</h2>
      </header>

      <div className="principal-grid">
        <section className="principal-group" aria-labelledby="ninongs-heading" data-reveal="rise">
          <h3 id="ninongs-heading">Ninongs</h3>
          <ul>{wedding.principalSponsors.ninongs.map(name => <li key={name}>{name}</li>)}</ul>
        </section>
        <section className="principal-group" aria-labelledby="ninangs-heading" data-reveal="rise" data-delay="140">
          <h3 id="ninangs-heading">Ninangs</h3>
          <ul>{wedding.principalSponsors.ninangs.map(name => <li key={name}>{name}</li>)}</ul>
        </section>
      </div>
    </div>
  </section>;
}
