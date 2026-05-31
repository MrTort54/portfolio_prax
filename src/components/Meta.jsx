import { practice } from '../data/practice'
import { SectionHeading } from './SectionHeading'

export function Meta() {
  if (!practice.metaBlocks?.length) {
    return null
  }

  return (
    <section id="meta" className="section">
      <div className="shell">
        <SectionHeading number="02" title="Мета та завдання практики" />

        <div className="meta-blocks">
          {practice.metaBlocks.map((block, index) => (
            <article key={block.title} className="meta-block glass-card">
              <div className="meta-block__head">
                <span className="meta-block__index">{String(index + 1).padStart(2, '0')}</span>
                <h3>{block.title}</h3>
              </div>

              {block.text ? <p className="meta-block__text">{block.text}</p> : null}

              {block.items ? (
                <ul className={`meta-block__list ${block.text ? 'meta-block__list--spaced' : ''}`}>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
