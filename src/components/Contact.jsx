import { portfolio } from '../data/portfolio'
import { GithubIcon, LinkedinIcon, MailIcon } from './icons'

const socialIcons = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Twitter: ExternalLinkPlaceholderIcon,
}

function ExternalLinkPlaceholderIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      aria-hidden="true"
    >
      <path d="M18 5h-5" />
      <path d="M19 5v5" />
      <path d="M10 14 19 5" />
      <path d="M5 7v12h12v-5" />
    </svg>
  )
}

export function Contact() {
  const mailHref = `mailto:${portfolio.person.email}`

  return (
    <section id="contact" className="section section--contact">
      <div className="shell">
        <div className="glass-card contact-card">
          <p className="eyebrow">03. Що далі?</p>
          <h2>Зв'яжіться зі мною</h2>
          <p className="contact-card__text">
            Зараз я відкритий до нових можливостей, співпраці та цікавих задач. Якщо
            хочете обговорити проєкт, вакансію або просто привітатися, пишіть.
          </p>

          <a className="button button--outline contact-card__action" href={mailHref}>
            <MailIcon className="icon" />
            Написати листа
          </a>

          <ul className="social-links" aria-label="Соціальні мережі">
            {portfolio.socialLinks.map((item) => {
              const Icon = socialIcons[item.label] ?? ExternalLinkPlaceholderIcon

              return (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
                    <Icon className="icon" />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
