export function SectionHeading({ number, title, align = 'left' }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <span className="section-heading__number">{number}</span>
      <h2>{title}</h2>
      <span className="section-heading__line" aria-hidden="true" />
    </div>
  )
}
