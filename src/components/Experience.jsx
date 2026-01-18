import React from 'react'
import styled from 'styled-components'
import experience from '../data/experience'

const ExperienceSection = styled.section`
  padding: 5rem 0;
  background: #f8f9fa;
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

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 2rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #0066cc;

    @media (min-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`

const ExperienceItem = styled.div`
  position: relative;
  margin-bottom: 3rem;
  padding-left: 5rem;

  @media (min-width: 768px) {
    padding-left: 0;
    width: 50%;
    
    &:nth-child(odd) {
      margin-left: 0;
      padding-right: 3rem;
      text-align: right;
      
      &::before {
        right: -6px;
      }
    }

    &:nth-child(even) {
      margin-left: 50%;
      padding-left: 3rem;
      
      &::before {
        left: -6px;
      }
    }
  }

  &::before {
    content: '';
    position: absolute;
    left: 1.25rem;
    top: 0;
    width: 12px;
    height: 12px;
    background: #0066cc;
    border-radius: 50%;
    border: 3px solid white;
    box-shadow: 0 0 0 3px #0066cc;

    @media (min-width: 768px) {
      top: 0.5rem;
    }
  }
`

const ExperienceCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e9ecef;
`

const CompanyHeader = styled.div`
  margin-bottom: 1.5rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.25rem;
  }

  h4 {
    font-size: 1rem;
    font-weight: 600;
    color: #0066cc;
    margin-bottom: 0.5rem;
  }

  .duration {
    font-size: 0.875rem;
    color: #666;
    font-weight: 500;
  }

  .location {
    font-size: 0.875rem;
    color: #888;
  }
`

const AchievementsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.75rem;
    color: #555;
    line-height: 1.6;

    &::before {
      content: '→';
      position: absolute;
      left: 0;
      color: #0066cc;
      font-weight: bold;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`

const CompanyLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: #0066cc;
    text-decoration: underline;
  }
`

function Experience() {
  return (
    <ExperienceSection id="experience">
      <Container>
        <SectionTitle>Work Experience</SectionTitle>
        
        <Timeline>
          {experience.map((job, index) => (
            <ExperienceItem key={index}>
              <ExperienceCard>
                <CompanyHeader>
                  <h3>
                    <CompanyLink 
                      href={job.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`Visit ${job.company} website`}
                    >
                      {job.company}
                    </CompanyLink>
                  </h3>
                  <h4>{job.position}</h4>
                  <div className="duration">{job.duration}</div>
                  <div className="location">{job.location}</div>
                </CompanyHeader>
                
                <AchievementsList>
                  {job.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex}>{achievement}</li>
                  ))}
                </AchievementsList>
              </ExperienceCard>
            </ExperienceItem>
          ))}
        </Timeline>
      </Container>
    </ExperienceSection>
  )
}

export default Experience