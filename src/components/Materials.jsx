import { portfolio } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function Materials() {
  const { materials } = portfolio

  return (
    <section id="materialy" className="section section--materials">
      <div className="shell">
        <SectionHeading number="09" title="Використані матеріали" />

        <div className="materials-card glass-card">
          <p className="materials-card__text">{materials.text}</p>
          <a
            className="button button--solid materials-card__link"
            href={materials.driveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {materials.driveLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
