import { practiceProject } from '../data/practice'
import { SectionHeading } from './SectionHeading'

export function PracticeProject() {
  return (
    <section id="proiekt-praktyky" className="section">
      <div className="shell">
        <SectionHeading number="05" title="Проєкт практики" />

        <div className="practice-site glass-card">
          <div className="practice-site__head">
            <div>
              <p className="practice-site__eyebrow">Результат практики</p>
              <h3 className="practice-site__title">{practiceProject.title}</h3>
              <p className="practice-site__subtitle">{practiceProject.subtitle}</p>
            </div>
            <a
              className="button button--solid practice-site__link"
              href={practiceProject.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              principles.top
            </a>
          </div>

          <p className="practice-site__text">{practiceProject.description}</p>

          <ul className="about-stack practice-site__stack" aria-label="Технології проєкту">
            {practiceProject.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
