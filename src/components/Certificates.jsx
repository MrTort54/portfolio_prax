import { useEffect, useState } from 'react'
import { portfolio } from '../data/portfolio'
import { CertificateViewer } from './CertificateViewer'
import { CloseIcon } from './icons'
import { SectionHeading } from './SectionHeading'

export function Certificates() {
  const { certificates } = portfolio
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

  if (!certificates.length) {
    return null
  }

  return (
    <section id="sertifikaty" className="section">
      <div className="shell">
        <SectionHeading number="09" title="Сертифікати" />
        <p className="section-intro">
          Натисніть кнопку, щоб переглянути сертифікат або подяку у повному розмірі.
        </p>

        <div className="certificates-block glass-card">
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
