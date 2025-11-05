import Hero from '../components/Hero.jsx';
import { organizations, publications, recommended } from '../data/links.js';

export default function Links() {
  return (
    <div>
      <Hero
        title="References"
        lead="Papers, partner organizations, and inspiration sources informing our quantum futures research."
      />
      <section>
        <h2 className="section-title">Publications</h2>
        <div className="card-grid">
          {publications.map((pub) => (
            <article key={pub.title} className="card">
              <h3>{pub.title}</h3>
              <p>
                {pub.authors}
                <br />
                <em>{pub.venue}</em> ({pub.year})
              </p>
              <a className="button" href={pub.url} target="_blank" rel="noreferrer noopener">
                View publication
              </a>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">Organizations</h2>
        <div className="card-grid">
          {organizations.map((org) => (
            <article key={org.url} className="card">
              <h3>{org.name}</h3>
              <a className="button" href={org.url} target="_blank" rel="noreferrer noopener">
                Visit site
              </a>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">Recommended</h2>
        <div className="card-grid">
          {recommended.map((item) => (
            <article key={item.url} className="card">
              <p>{item.label}</p>
              <a className="button" href={item.url} target="_blank" rel="noreferrer noopener">
                Open link
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
