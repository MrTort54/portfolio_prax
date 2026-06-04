import { useEffect, useState } from 'react'
import { portfolio } from '../data/portfolio'
import { CloseIcon, MenuIcon } from './icons'

const MENU_BREAKPOINT = 1100

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = ''
      return undefined
    }

    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    const handleResize = () => {
      if (window.innerWidth >= MENU_BREAKPOINT) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="shell site-header__inner">
        <a className="brand" href="#home" onClick={closeMenu}>
          {portfolio.brand}
        </a>

        <nav className="desktop-nav" aria-label="Основна навігація">
          <ul className="nav-links">
            {portfolio.navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsMenuOpen((value) => !value)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? 'Закрити меню' : 'Відкрити меню навігації'}
        >
          {isMenuOpen ? <CloseIcon className="icon" /> : <MenuIcon className="icon" />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`mobile-nav ${isMenuOpen ? 'is-open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <button
          type="button"
          className="mobile-nav__backdrop"
          aria-label="Закрити меню"
          onClick={closeMenu}
          tabIndex={isMenuOpen ? 0 : -1}
        />

        <nav className="shell mobile-nav__panel" aria-label="Мобільна навігація">
          <p className="mobile-nav__title">Перехід по сторінці</p>
          <ul className="mobile-nav__links">
            {portfolio.navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
