import { portfolio } from '../data/portfolio'

export function Hero() {
  const { person, hero } = portfolio

  return (
    <section id="home" className="section section--hero">
      <div className="shell hero">
        <div className="hero__content">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <h2>{hero.subtitle}</h2>
          <p className="hero__description">{hero.description}</p>

          <div className="hero__actions">
            <a className="button button--outline" href="#pro-mene">
              Про мене
            </a>
            <a className="button button--solid" href="#zvit">
              Звіт
            </a>
          </div>
        </div>

        <aside className="hero__panel">
          <div className="glass-card">
            <p className="eyebrow">Коротко</p>
            <p className="hero__panel-title">{person.role}</p>
            <p className="hero__panel-text">{person.description}</p>
            <div className="hero__availability">
              <span className="status-dot" aria-hidden="true" />
              <span>{person.availability}</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
