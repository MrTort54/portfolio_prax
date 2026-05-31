import { practice } from '../data/practice'
import { SectionHeading } from './SectionHeading'

export function DiplomaWork() {
  const { intro, items, technologies } = practice.diplomaWork

  return (
    <section id="dyplomna-robota" className="section">
      <div className="shell">
        <SectionHeading number="04" title="Робота над дипломною роботою" />

        <p className="section-intro">{intro}</p>

        <ul className="diploma-grid">
          {items.map((item) => (
            <li key={item.date} className="diploma-card glass-card">
              <span className="diploma-card__date">{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>

        <ul className="about-stack diploma-stack" aria-label="Технології дипломної роботи">
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
