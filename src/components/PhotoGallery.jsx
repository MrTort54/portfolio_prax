import { developmentGallery } from '../data/practice'
import { SectionHeading } from './SectionHeading'

const photoTypeLabels = {
  design: 'Дизайн',
  code: 'Код',
  result: 'Реалізація',
  work: 'Розробка',
}

export function PhotoGallery() {
  if (!developmentGallery.length) {
    return null
  }

  return (
    <section id="foto-rozrobky" className="section">
      <div className="shell">
        <SectionHeading number="06" title="Фото з розробки" />
        <p className="section-intro">
          Фотографії з процесу розробки сайту Principles.top під час переддипломної практики.
        </p>

        <div className="photo-gallery__grid">
          {developmentGallery.map((item) => (
            <figure key={item.src} className="day-photo glass-card">
              <span className="day-photo__badge day-photo__badge--date">
                {item.date ?? photoTypeLabels[item.type]}
              </span>
              <img src={item.src} alt={item.alt} loading="lazy" />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
