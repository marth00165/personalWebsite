import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  border-bottom: ${props => props.scrolled ? '1px solid #eee' : 'none'};
  z-index: 100;
  transition: all 0.3s ease;
  padding: 1rem 0;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`

const Logo = styled.a`
  font-weight: 700;
  font-size: 1.25rem;
  color: #333;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`

const NavList = styled.ul`
  display: none;
  list-style: none;
  gap: 2rem;
  margin: 0;

  @media (min-width: 768px) {
    display: flex;
  }
`

const NavLink = styled.a`
  color: #666;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #333;
    text-decoration: none;
  }

  &:focus {
    outline: 2px solid #0066cc;
    outline-offset: 2px;
  }
`

const MobileMenuButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: none;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }

  span {
    display: block;
    height: 2px;
    width: 100%;
    background: #333;
    transition: all 0.3s ease;
  }
`

const MobileNav = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border-bottom: 1px solid #eee;
  display: ${props => props.isOpen ? 'block' : 'none'};
  
  @media (min-width: 768px) {
    display: none;
  }
`

const MobileNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem;
  
  li {
    margin-bottom: 1rem;
  }

  a {
    color: #333;
    font-weight: 500;
    text-decoration: none;
    padding: 0.5rem 0;
    display: block;

    &:hover {
      color: #0066cc;
      text-decoration: none;
    }
  }
`

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMobileNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <HeaderContainer scrolled={scrolled}>
        <Nav>
          <Logo href="#top">Rohit Pratti</Logo>
          
          <NavList>
            {navItems.map(item => (
              <li key={item.href}>
                <NavLink href={item.href}>{item.label}</NavLink>
              </li>
            ))}
          </NavList>

          <MobileMenuButton 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </MobileMenuButton>
        </Nav>

        <MobileNav isOpen={mobileMenuOpen}>
          <MobileNavList>
            {navItems.map(item => (
              <li key={item.href}>
                <a href={item.href} onClick={handleMobileNavClick}>
                  {item.label}
                </a>
              </li>
            ))}
          </MobileNavList>
        </MobileNav>
      </HeaderContainer>
    </>
  )
}

export default Header