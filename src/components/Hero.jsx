import React from 'react'
import styled from 'styled-components'
import personalInfo from '../data/personal'

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);

  @media (min-width: 768px) {
    padding: 4rem;
  }
`

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const Greeting = styled.p`
  font-size: 1.125rem;
  color: #666;
  margin-bottom: 1rem;
  font-weight: 500;
`

const Name = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #333;
  line-height: 1.1;

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`

const Title = styled.h2`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`

const Summary = styled.p`
  font-size: 1.125rem;
  color: #555;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

const CTAContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.875rem 2rem;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid;

  &.primary {
    background: #0066cc;
    border-color: #0066cc;
    color: white;

    &:hover {
      background: #0052a3;
      border-color: #0052a3;
      text-decoration: none;
      transform: translateY(-2px);
    }
  }

  &.secondary {
    background: transparent;
    border-color: #666;
    color: #666;

    &:hover {
      background: #666;
      color: white;
      text-decoration: none;
      transform: translateY(-2px);
    }
  }
`

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  
  span {
    font-size: 0.875rem;
  }

  &::after {
    content: '';
    width: 2px;
    height: 30px;
    background: #666;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`

function Hero() {
  return (
    <HeroSection id="top">
      <div style={{ position: 'relative', width: '100%' }}>
        <HeroContent id="main-content">
          <Greeting>Hello, I'm</Greeting>
          <Name>{personalInfo.name}</Name>
          <Title>{personalInfo.title}</Title>
          <Summary>{personalInfo.summary}</Summary>
          
          <CTAContainer>
            <CTAButton href="#experience" className="primary">
              View My Work
            </CTAButton>
            <CTAButton href="#contact" className="secondary">
              Get In Touch
            </CTAButton>
          </CTAContainer>
        </HeroContent>
        
        <ScrollIndicator>
          <span>Scroll down</span>
        </ScrollIndicator>
      </div>
    </HeroSection>
  )
}

export default Hero