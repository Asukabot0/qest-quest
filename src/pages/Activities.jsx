import Hero from '../components/Hero.jsx';
import { activities } from '../data/activities.js';

export default function Activities() {
  return (
    <div>
      <Hero
        title="Activities"
        lead="Hands-on programs and workshops where we test speculative concepts with partners across academia and industry."
      />
      <section>
        <div className="card-grid">
          {activities.map((activity) => (
            <article key={activity.title} className="card">
              <img src={activity.image} alt={activity.title} loading="lazy" />
              <h3>{activity.title}</h3>
              <p><strong>{new Date(activity.date).toLocaleDateString()}</strong></p>
              <p>{activity.description}</p>
              <a className="button" href={activity.link} target="_blank" rel="noreferrer noopener">
                View recap
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
