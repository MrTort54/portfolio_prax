import { portfolio } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function Repositories() {
  const { repositories } = portfolio

  return (
    <section id="repozytorii" className="section">
      <div className="shell">
        <SectionHeading number="07" title="Репозиторії" />
        <p className="section-intro">
          GitHub-репозиторії, пов’язані з практикою, вебсайтом Principles та дипломною роботою.
        </p>

        <ul className="repos-grid">
          {repositories.map((repo) => (
            <li key={repo.url}>
              <a
                className="repo-card glass-card"
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="repo-card__label">{repo.label}</span>
                <h3 className="repo-card__title">{repo.title}</h3>
                <p className="repo-card__text">{repo.description}</p>
                <span className="repo-card__link">{repo.slug}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
