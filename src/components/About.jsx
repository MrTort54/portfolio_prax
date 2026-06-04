import { portfolio } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function About() {
  const { about, person } = portfolio

  return (
    <section id="pro-mene" className="section">
      <div className="shell">
        <SectionHeading number="01" title="Про мене" />

        <div className="about-grid">
          <div className="about-main">
            <div className="about-intro glass-card">
              <p className="about-intro__name">{person.name}</p>
              <p className="about-intro__role">{person.role}</p>
              <p className="about-intro__text">{about.intro}</p>
              <ul className="about-stack" aria-label="Технології практики">
                {about.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <dl className="about-facts">
              {about.facts.map((fact) => (
                <div key={fact.label} className="about-fact glass-card">
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
