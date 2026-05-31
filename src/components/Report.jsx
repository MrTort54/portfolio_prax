import { useState } from 'react'
import { practice } from '../data/practice'
import { SectionHeading } from './SectionHeading'

const photoTypeLabels = {
  design: 'Дизайн',
  code: 'Код',
  result: 'Реалізація',
}

function DayPhotos({ photos }) {
  if (!photos?.length) {
    return null
  }

  return (
    <div className="day-photos">
      <p className="day-photos__title">Матеріали дня</p>
      <div className="day-photos__grid">
        {photos.map((item) => (
          <figure key={item.src} className="day-photo glass-card">
            <span className={`day-photo__badge day-photo__badge--${item.type}`}>
              {photoTypeLabels[item.type] ?? item.type}
            </span>
            <img src={item.src} alt={item.alt} loading="lazy" />
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}

function DayRow({ day, isOpen, onToggle }) {
  const photoCount = day.photos?.length ?? 0

  return (
    <article className={`day-entry glass-card ${isOpen ? 'is-open' : ''}`}>
      <button
        type="button"
        className="day-entry__toggle"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="day-entry__date">{day.date}</span>
        <span className="day-entry__summary">
          {day.activity}
          {photoCount > 0 ? (
            <span className="day-entry__photo-count">{photoCount} фото</span>
          ) : null}
        </span>
        <span className="day-entry__grade">{day.grade}</span>
        <span className="day-entry__chevron" aria-hidden="true">
          {isOpen ? '−' : '+'}
        </span>
      </button>

      {isOpen ? (
        <div className="day-entry__body">
          <p className="day-entry__details">{day.details}</p>

          <dl className="day-entry__meta">
            <div>
              <dt>Фокус дня</dt>
              <dd>{day.focus}</dd>
            </div>
            <div>
              <dt>Робочий час</dt>
              <dd>
                {day.arrival} – {day.departure}
              </dd>
            </div>
            <div>
              <dt>Оцінка</dt>
              <dd>{day.grade}</dd>
            </div>
          </dl>

          {day.diplomaNote ? (
            <p className="day-entry__diploma">
              <strong>Дипломна робота:</strong> {day.diplomaNote}
            </p>
          ) : null}

          <DayPhotos photos={day.photos} />
        </div>
      ) : null}
    </article>
  )
}

export function Report() {
  const [openId, setOpenId] = useState(null)

  if (!practice.practiceDays.length) {
    return null
  }

  return (
    <section id="zvit" className="section">
      <div className="shell">
        <SectionHeading number="05" title="Щоденник практики" />
        <p className="section-intro">
          Натисніть на день, щоб переглянути деталі, фото дизайну, коду та реалізації.
        </p>

        <div className="day-list">
          {practice.practiceDays.map((day) => (
            <DayRow
              key={day.id}
              day={day}
              isOpen={openId === day.id}
              onToggle={() => setOpenId((current) => (current === day.id ? null : day.id))}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
