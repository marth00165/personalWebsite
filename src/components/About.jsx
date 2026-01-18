import React from 'react'
import styled from 'styled-components'

const AboutSection = styled.section`
  padding: 5rem 0;
  background: white;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`

const AboutText = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.7;
    color: #555;
    margin-bottom: 1.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const StatItem = styled.div`
  text-align: center;
  padding: 1.5rem;
  border-radius: 8px;
  background: #f8f9fa;
  border: 1px solid #e9ecef;

  h4 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #0066cc;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    font-weight: 500;
    margin: 0;
  }
`

function About() {
  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle>About Me</SectionTitle>
        
        <AboutContent>
          <AboutText>
            <h3>Passionate Full Stack Developer</h3>
            <p>
              I'm a full stack engineer specializing in React.js with extensive experience in team leadership and agile development. 
              My journey in tech started early, working with computers since age 8, which sparked my lifelong passion for technology and problem-solving.
            </p>
            <p>
              Currently, I lead a team of 5 developers at 1-800Accountant, where I manage sprint planning and coordinate cross-functional teams to deliver high-quality software solutions. 
              I'm particularly passionate about projects that impact the environment and help people live simpler lives.
            </p>
            <p>
              When I'm not coding, I enjoy exploring new technologies, contributing to open source projects, and mentoring junior developers.
            </p>
          </AboutText>

          <Stats>
            <StatItem>
              <h4>5+</h4>
              <p>Years Experience</p>
            </StatItem>
            <StatItem>
              <h4>50+</h4>
              <p>Projects Completed</p>
            </StatItem>
            <StatItem>
              <h4>5</h4>
              <p>Team Members Led</p>
            </StatItem>
            <StatItem>
              <h4>200%</h4>
              <p>Booking Increase</p>
            </StatItem>
          </Stats>
        </AboutContent>
      </Container>
    </AboutSection>
  )
}

export default About