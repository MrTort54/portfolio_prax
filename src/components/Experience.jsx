import { useState } from 'react'
import { portfolio } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeExperience = portfolio.experience[activeIndex]

  return (
    <section id="experience" className="section">
      <div className="shell">
        <SectionHeading number="01." title="Досвід роботи" />

        <div className="experience">
          <div className="experience__tabs" role="tablist" aria-label="Місця роботи">
            {portfolio.experience.map((item, index) => (
              <button
                key={item.company}
                id={`tab-${item.company}`}
                type="button"
                role="tab"
                className={`experience__tab ${activeIndex === index ? 'is-active' : ''}`}
                aria-selected={activeIndex === index}
                aria-controls={`panel-${item.company}`}
                onClick={() => setActiveIndex(index)}
              >
                {item.company}
              </button>
            ))}
          </div>

          <article
            id={`panel-${activeExperience.company}`}
            className="glass-card experience__panel"
            role="tabpanel"
            aria-labelledby={`tab-${activeExperience.company}`}
          >
            <div className="experience__header">
              <div>
                <h3>
                  {activeExperience.role}
                  <span> @ {activeExperience.company}</span>
                </h3>
                <p className="experience__period">{activeExperience.period}</p>
              </div>
              <p className="experience__summary">{activeExperience.summary}</p>
            </div>

            <ul className="experience__list">
              {activeExperience.points.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <ul className="tag-list" aria-label="Технології">
              {activeExperience.technologies.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
