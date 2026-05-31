import { practice } from '../data/practice'
import { SectionHeading } from './SectionHeading'

export function Conclusion() {
  if (!practice.conclusion.trim()) {
    return null
  }

  return (
    <section id="vysnovky-praktyky" className="section">
      <div className="shell">
        <SectionHeading number="06" title="Висновки практики" />

        <div className="conclusion-card glass-card">
          {practice.conclusion.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
