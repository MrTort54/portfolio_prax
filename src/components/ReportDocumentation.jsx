import { portfolio } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function ReportDocumentation() {
  const { reportDocumentation } = portfolio

  return (
    <section id="zvitna-dokumentatsiya" className="section section--report-docs">
      <div className="shell">
        <SectionHeading number="10" title="Звітна документація" />

        <div className="materials-card glass-card">
          <p className="materials-card__text">{reportDocumentation.text}</p>
          <a
            className="button button--solid materials-card__link"
            href={reportDocumentation.driveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {reportDocumentation.driveLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
