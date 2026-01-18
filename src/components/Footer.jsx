import React from 'react'
import styled from 'styled-components'
import personalInfo from '../data/personal'

const FooterContainer = styled.footer`
  background: #333;
  color: white;
  padding: 3rem 0 2rem;
  text-align: center;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`

const FooterInfo = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p {
    color: #ccc;
    margin: 0;
  }
`

const FooterLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  a {
    color: #ccc;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: white;
      text-decoration: underline;
    }

    &:focus {
      outline: 2px solid #0066cc;
      outline-offset: 2px;
    }
  }
`

const FooterBottom = styled.div`
  border-top: 1px solid #555;
  margin-top: 2rem;
  padding-top: 2rem;
  color: #ccc;
  font-size: 0.875rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const BackToTop = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #ccc;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: white;
    text-decoration: underline;
  }

  &:focus {
    outline: 2px solid #0066cc;
    outline-offset: 2px;
  }

  &::after {
    content: '↑';
    font-size: 1.125rem;
  }
`

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterInfo>
            <h3>{personalInfo.name}</h3>
            <p>{personalInfo.title}</p>
          </FooterInfo>

          <FooterLinks>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </FooterLinks>
        </FooterContent>

        <FooterBottom>
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. Built with React & Vite.
          </div>
          
          <BackToTop href="#top">
            Back to top
          </BackToTop>
        </FooterBottom>
      </Container>
    </FooterContainer>
  )
}

export default Footer