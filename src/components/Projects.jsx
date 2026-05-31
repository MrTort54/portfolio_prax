import { portfolio } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'
import { ExternalLinkIcon, FolderIcon, GithubIcon } from './icons'

function ProjectLinks({ project }) {
  return (
    <div className="project-links">
      <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
        <GithubIcon className="icon" />
      </a>
      <a
        href={project.external}
        target="_blank"
        rel="noreferrer"
        aria-label="Відкрити проєкт"
      >
        <ExternalLinkIcon className="icon" />
      </a>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="shell">
        <SectionHeading number="02." title="Мої проєкти" />

        <div className="projects-featured">
          {portfolio.featuredProjects.map((project, index) => (
            <article
              key={project.title}
              className={`project-card ${index % 2 === 1 ? 'project-card--reverse' : ''}`}
            >
              <div className={`project-preview project-preview--${project.accent}`}>
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>

              <div className="project-card__content">
                <p className="eyebrow">Featured Project</p>
                <h3>{project.title}</h3>
                <div className="glass-card project-card__summary">
                  <p>{project.description}</p>
                </div>
                <ul className="project-tech">
                  {project.technologies.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <ProjectLinks project={project} />
              </div>
            </article>
          ))}
        </div>

        <div className="projects-archive">
          <div className="projects-archive__header">
            <h3>Інші проєкти</h3>
            <p>Ще кілька робіт, які показують різні підходи до інтерфейсів і логіки.</p>
          </div>

          <div className="archive-grid">
            {portfolio.otherProjects.map((project) => (
              <article key={project.title} className="glass-card archive-card">
                <div className="archive-card__top">
                  <FolderIcon className="icon archive-card__folder" />
                  <ProjectLinks project={project} />
                </div>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <ul className="project-tech project-tech--compact">
                  {project.technologies.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
