import Hero from '../components/Hero.jsx';
import { newsItems } from '../data/news.js';

export default function News() {
  return (
    <div>
      <Hero
        title="News"
        lead="Project announcements, research highlights, and community collaborations from the Q/est Quest team."
      />
      <section>
        <div className="card-grid">
          {newsItems.map((item) => (
            <article key={item.title} className="card">
              <img src={item.image} alt={item.title} loading="lazy" />
              <h3>{item.title}</h3>
              <p><strong>{new Date(item.date).toLocaleDateString()}</strong></p>
              <p>{item.description}</p>
              <a className="button" href={item.link} target="_blank" rel="noreferrer noopener">
                Read article
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
