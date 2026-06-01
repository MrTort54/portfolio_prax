import { useState } from 'react'
import { portfolio } from '../data/portfolio'

export function Hero() {
  const { person, hero } = portfolio
  const [photoSrc, setPhotoSrc] = useState(hero.photo)

  const handlePhotoError = () => {
    setPhotoSrc(hero.photoFallback)
  }

  return (
    <section id="home" className="section section--hero">
      <div className="shell hero">
        <div className="hero__layout">
          <div className="hero__content">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1>{hero.title}</h1>
            <h2>{hero.subtitle}</h2>
            <p className="hero__description">{hero.description}</p>

            <div className="hero__actions">
              <a
                className="button button--solid button--small"
                href={hero.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                principles.top
              </a>
              <a className="button button--outline button--small" href="#foto-rozrobky">
                Фото з розробки
              </a>
              <a className="button button--outline button--small" href="#pro-mene">
                Про мене
              </a>
            </div>
          </div>

          <div className="hero__photo glass-card">
            <img
              src={photoSrc}
              alt={`Фото: ${person.name}`}
              className="hero__photo-img"
              onError={handlePhotoError}
            />
          </div>
        </div>

        <aside className="hero__panel">
          <div className="glass-card hero__panel-card">
            <p className="eyebrow">Коротко</p>
            <p className="hero__panel-title">{person.role}</p>
            <p className="hero__panel-text">
              {person.description}{' '}
              <a href={hero.projectUrl} target="_blank" rel="noopener noreferrer">
                principles.top
              </a>
            </p>
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
