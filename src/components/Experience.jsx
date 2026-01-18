import React, { useState } from 'react'
import styled from 'styled-components'
import experience from '../data/experience'

const ExperienceSection = styled.section`
  padding: 3rem 0;
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
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.5rem;
  color: #333;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
`

const TimelineContainer = styled.div`
  position: relative;
  overflow-x: auto;
  padding: 2rem 0;
  
  &::-webkit-scrollbar {
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #0066cc;
    border-radius: 4px;
  }
`

const Timeline = styled.div`
  display: flex;
  gap: 2rem;
  min-width: min-content;
  position: relative;
  padding: 1rem 0.5rem;

  &::before {
    content: '';
    position: absolute;
    top: 2rem;
    left: 0;
    right: 0;
    height: 2px;
    background: #0066cc;
    z-index: 1;
  }
`

const ExperienceItem = styled.div`
  position: relative;
  min-width: 320px;
  max-width: 320px;
  flex-shrink: 0;
  z-index: 2;

  @media (max-width: 768px) {
    min-width: 280px;
    max-width: 280px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 1.75rem;
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 12px;
    background: #0066cc;
    border-radius: 50%;
    border: 3px solid white;
    box-shadow: 0 0 0 3px #0066cc;
    z-index: 3;
  }
`

const ExperienceCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e9ecef;
  margin-top: 4rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
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

const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: #0066cc;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  margin-top: 1rem;
  padding: 0;
  text-decoration: underline;

  &:hover {
    color: #0052a3;
  }

  &:focus {
    outline: 2px solid #0066cc;
    outline-offset: 2px;
  }
`

function Experience() {
  const [expandedCards, setExpandedCards] = useState({})

  const toggleCard = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const getDisplayedAchievements = (achievements, index) => {
    const isExpanded = expandedCards[index]
    return isExpanded ? achievements : achievements.slice(0, 3)
  }
  return (
    <ExperienceSection id="experience">
      <Container>
        <SectionTitle>Work Experience</SectionTitle>
        <SectionSubtitle>My professional journey and achievements</SectionSubtitle>
        
        <TimelineContainer>
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
                    {getDisplayedAchievements(job.achievements, index).map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>{achievement}</li>
                    ))}
                  </AchievementsList>
                  
                  {job.achievements.length > 3 && (
                    <ReadMoreButton onClick={() => toggleCard(index)}>
                      {expandedCards[index] ? 'Show Less' : `Read More (${job.achievements.length - 3} more)`}
                    </ReadMoreButton>
                  )}
                </ExperienceCard>
              </ExperienceItem>
            ))}
          </Timeline>
        </TimelineContainer>
      </Container>
    </ExperienceSection>
  )
}

export default Experience