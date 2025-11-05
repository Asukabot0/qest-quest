export default function Hero({ title, lead, actions }) {
  return (
    <section className="hero">
      <h1>{title}</h1>
      {lead && <p>{lead}</p>}
      {actions && actions.length > 0 && (
        <div className="hero-cta">
          {actions.map((action) => (
            <a key={action.href} className="button" href={action.href} target={action.external ? '_blank' : undefined} rel={action.external ? 'noreferrer noopener' : undefined}>
              {action.label}
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
