import { portfolio } from '../data/portfolio'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <a href="#home">Портфоліо практики — {portfolio.person.name}</a>
        <p>© {new Date().getFullYear()}. Всі права захищено.</p>
      </div>
    </footer>
  )
}
