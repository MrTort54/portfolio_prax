import { practice } from '../data/practice'
import { SectionHeading } from './SectionHeading'

export function PracticeCharacter() {
  const { base, conditions, activities } = practice.practiceCharacter

  return (
    <section id="kharakter-praktyky" className="section">
      <div className="shell">
        <SectionHeading number="03" title="Характер практики" />

        <div className="character-grid">
          <article className="character-card glass-card">
            <h3>{base.title}</h3>
            <p>{base.text}</p>
          </article>

          <article className="character-card glass-card">
            <h3>{conditions.title}</h3>
            <p>{conditions.text}</p>
          </article>

          <article className="character-card glass-card character-card--wide">
            <h3>{activities.title}</h3>
            <ul className="character-list">
              {activities.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
