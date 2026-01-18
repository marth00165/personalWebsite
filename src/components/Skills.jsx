import React, { useState } from 'react'
import styled from 'styled-components'
import { skills, skillCategories } from '../data/skills'

const SkillsSection = styled.section`
  padding: 3rem 0;
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
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  color: #333;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
`

const FilterButton = styled.button`
  padding: 0.5rem 1.25rem;
  border-radius: 25px;
  border: 2px solid #e9ecef;
  background: ${props => props.active ? '#0066cc' : 'white'};
  color: ${props => props.active ? 'white' : '#666'};
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #0066cc;
    color: ${props => props.active ? 'white' : '#0066cc'};
  }

  &:focus {
    outline: 2px solid #0066cc;
    outline-offset: 2px;
  }
`

const SkillsContainer = styled.div`
  max-height: ${props => props.showAll ? '400px' : 'none'};
  overflow-y: ${props => props.showAll ? 'auto' : 'visible'};
  padding: ${props => props.showAll ? '1rem 0.5rem' : '0'};
  
  ${props => props.showAll && `
    &::-webkit-scrollbar {
      width: 8px;
    }
    
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 4px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: #0066cc;
      border-radius: 4px;
    }
  `}
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: ${props => props.showAll ? 'repeat(4, 1fr)' : 'repeat(3, 1fr)'};
  }
`

const SkillItem = styled.div`
  background: #f8f9fa;
  padding: 1.25rem;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: #333;
    margin: 0;
  }

  .level {
    font-size: 0.875rem;
    font-weight: 600;
    color: #0066cc;
  }
`

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: #e9ecef;
  border-radius: 4px;
  overflow: hidden;
`

const Progress = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #0066cc, #0052a3);
  width: ${props => props.level}%;
  border-radius: 4px;
  transition: width 0.8s ease-in-out;
`

const CategoryTag = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: #e9ecef;
  color: #666;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 12px;
  margin-top: 0.75rem;
`

function Skills() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory)

  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle>Skills & Technologies</SectionTitle>
        
        <FilterButtons>
          <FilterButton 
            active={activeCategory === 'All'}
            onClick={() => setActiveCategory('All')}
          >
            All Skills
          </FilterButton>
          {skillCategories.map(category => (
            <FilterButton
              key={category}
              active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </FilterButton>
          ))}
        </FilterButtons>

        <SkillsContainer showAll={activeCategory === 'All'}>
          <SkillsGrid showAll={activeCategory === 'All'}>
            {filteredSkills.map((skill, index) => (
              <SkillItem key={index}>
                <SkillHeader>
                  <h3>{skill.name}</h3>
                  <div className="level">{skill.level}%</div>
                </SkillHeader>
                
                <ProgressBar>
                  <Progress level={skill.level} />
                </ProgressBar>
                
                <CategoryTag>{skill.category}</CategoryTag>
              </SkillItem>
            ))}
          </SkillsGrid>
        </SkillsContainer>
      </Container>
    </SkillsSection>
  )
}

export default Skills