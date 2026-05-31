import { useEffect, useState } from 'react'
import { portfolio } from '../data/portfolio'
import { CertificateViewer } from './CertificateViewer'
import { CloseIcon } from './icons'
import { SectionHeading } from './SectionHeading'

export function About() {
  const { about, person, certificates } = portfolio
  const [activeCertId, setActiveCertId] = useState(null)
  const activeCert = certificates.find((item) => item.id === activeCertId) ?? null

  useEffect(() => {
    if (!activeCert) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveCertId(null)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeCert])

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

          {certificates.length > 0 ? (
            <div className="about-certificates glass-card">
              <h3 className="about-certificates__title">Сертифікати та подяка</h3>
              <p className="about-certificates__text">
                Натисніть кнопку, щоб переглянути сертифікат або подяку у повному розмірі.
              </p>
              <div className="certificates-actions">
                {certificates.map((certificate) => (
                  <button
                    key={certificate.id}
                    type="button"
                    className="button button--outline certificate-btn"
                    onClick={() => setActiveCertId(certificate.id)}
                  >
                    {certificate.title}
                  </button>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {activeCert ? (
        <div
          className="certificate-modal"
          role="dialog"
          aria-modal="true"
          aria-label={activeCert.title}
          onClick={() => setActiveCertId(null)}
        >
          <div className="certificate-modal__panel" onClick={(event) => event.stopPropagation()}>
            <div className="certificate-modal__head">
              <h3>{activeCert.title}</h3>
              <button
                type="button"
                className="certificate-modal__close"
                onClick={() => setActiveCertId(null)}
                aria-label="Закрити"
              >
                <CloseIcon className="icon" />
              </button>
            </div>

            <CertificateViewer certificate={activeCert} />
          </div>
        </div>
      ) : null}
    </section>
  )
}
