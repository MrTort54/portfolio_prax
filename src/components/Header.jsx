import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
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
      return undefined
    }

    const scrollY = window.scrollY
    const { body, documentElement } = document

    body.classList.add('menu-open')
    body.style.position = 'fixed'
    body.style.top = `-${scrollY}px`
    body.style.left = '0'
    body.style.right = '0'
    body.style.width = '100%'
    body.style.overflow = 'hidden'
    documentElement.style.overflow = 'hidden'

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
      body.classList.remove('menu-open')
      body.style.position = ''
      body.style.top = ''
      body.style.left = ''
      body.style.right = ''
      body.style.width = ''
      body.style.overflow = ''
      documentElement.style.overflow = ''
      window.scrollTo(0, scrollY)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  const mobileMenu =
    isMenuOpen &&
    createPortal(
      <div
        id="mobile-navigation"
        className="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Мобільна навігація"
      >
        <button
          type="button"
          className="mobile-nav__backdrop"
          aria-label="Закрити меню"
          onClick={closeMenu}
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
      </div>,
      document.body,
    )

  return (
    <>
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
      </header>

      {mobileMenu}
    </>
  )
}
