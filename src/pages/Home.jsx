import Hero from '../components/Hero.jsx';
import HeroSlideshow from '../components/HeroSlideshow.jsx';
import { heroSlides } from '../data/heroSlides.js';
import { newsItems } from '../data/news.js';
import { activities } from '../data/activities.js';
import { contactInfo } from '../data/contact.js';

export default function Home() {
  return (
    <div>
      <Hero
        title="Designing Quantum Internet Futures"
        lead="We explore how quantum networks will reshape everyday experiences through speculative design, co-creation, and engineering research."
        actions={[
          { href: '/news', label: 'Latest news' },
          { href: '/contact', label: 'Work with us' }
        ]}
      />

      <HeroSlideshow slides={heroSlides} interval={7000} />

      <section>
        <h2 className="section-title">Latest News</h2>
        <p className="section-lead">Research milestones and collaborations happening inside the Q/est Quest initiative.</p>
        <div className="card-grid">
          {newsItems.map((item) => (
            <article key={item.title} className="card">
              <img src={item.image} alt={item.title} loading="lazy" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p><strong>{new Date(item.date).toLocaleDateString()}</strong></p>
              <a className="button" href={item.link} target="_blank" rel="noreferrer noopener">
                Read more
              </a>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">Activities</h2>
        <p className="section-lead">Workshops, prototyping sessions, and public programs exploring quantum-driven futures.</p>
        <div className="card-grid">
          {activities.map((activity) => (
            <article key={activity.title} className="card">
              <img src={activity.image} alt={activity.title} loading="lazy" />
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
              <p><strong>{new Date(activity.date).toLocaleDateString()}</strong></p>
              <a className="button" href={activity.link} target="_blank" rel="noreferrer noopener">
                Event details
              </a>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">Contact</h2>
        <p className="section-lead">{contactInfo.intro}</p>
        <div className="card-grid">
          <article className="card">
            <h3>Locations</h3>
            <ul>
              {contactInfo.locations.map((location) => (
                <li key={location}>{location}</li>
              ))}
            </ul>
            <a className="button" href={contactInfo.formUrl} target="_blank" rel="noreferrer noopener">
              Contact us
            </a>
          </article>
        </div>
      </section>
    </div>
  );
}
