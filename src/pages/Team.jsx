import Hero from '../components/Hero.jsx';
import { teamMembers } from '../data/team.js';

export default function Team() {
  return (
    <div>
      <Hero
        title="Team"
        lead="A multidisciplinary group of designers, engineers, and researchers shaping the quantum internet era."
      />
      <section>
        <div className="card-grid">
          {teamMembers.map((member) => (
            <article key={member.name} className="card">
              <h3>{member.name}</h3>
              <p><strong>{member.role}</strong></p>
              <p>{member.bio}</p>
              {member.link && (
                <a className="button" href={member.link} target="_blank" rel="noreferrer noopener">
                  Portfolio
                </a>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
