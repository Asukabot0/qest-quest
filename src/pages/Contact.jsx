import Hero from '../components/Hero.jsx';
import { contactInfo } from '../data/contact.js';

export default function Contact() {
  return (
    <div>
      <Hero
        title="Contact"
        lead="Partner with us on quantum internet experiments, workshops, and storytelling."
        actions={[
          {
            href: contactInfo.formUrl,
            label: 'Open contact form',
            external: true
          }
        ]}
      />
      <section>
        <h2 className="section-title">Visit us</h2>
        <div className="card-grid">
          <article className="card">
            <h3>Locations</h3>
            <ul>
              {contactInfo.locations.map((location) => (
                <li key={location}>{location}</li>
              ))}
            </ul>
          </article>
          <article className="card">
            <h3>Collaborate</h3>
            <p>We host co-creation sessions, speculative design sprints, and technical proof-of-concept projects.</p>
            <a className="button" href={contactInfo.formUrl} target="_blank" rel="noreferrer noopener">
              Start a conversation
            </a>
          </article>
        </div>
      </section>
    </div>
  );
}
