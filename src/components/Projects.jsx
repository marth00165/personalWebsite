import React, { useState } from 'react'
import styled from 'styled-components'
import projects from '../data/projects'

const ProjectsSection = styled.section`
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
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
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
`

const ProjectsContainer = styled.div`
  position: relative;
  overflow-x: auto;
  padding: 1rem 0;
  
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

const ProjectsGrid = styled.div`
  display: flex;
  gap: 1.5rem;
  min-width: min-content;
  padding: 0 0.5rem;
`

const ProjectCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;
  min-width: 350px;
  max-width: 350px;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    min-width: 280px;
    max-width: 280px;
  }
`

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: ${props => props.image ? `url(${props.image})` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(0, 102, 204, 0.1), rgba(0, 82, 163, 0.1));
  }
`

const ProjectContent = styled.div`
  padding: 1.5rem;
`

const ProjectHeader = styled.div`
  margin-bottom: 1rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.25rem;
  }

  .subtitle {
    font-size: 0.875rem;
    color: #666;
    font-weight: 500;
  }

  .date {
    font-size: 0.75rem;
    color: #888;
    margin-top: 0.5rem;
  }
`

const ProjectDescription = styled.p`
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
`

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

const TechTag = styled.span`
  background: #e9ecef;
  color: #666;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;

  &.primary {
    background: #0066cc;
    color: white;

    &:hover {
      background: #0052a3;
      text-decoration: none;
      transform: translateY(-1px);
    }
  }

  &.secondary {
    background: transparent;
    color: #666;
    border: 1px solid #e9ecef;

    &:hover {
      background: #f8f9fa;
      border-color: #dee2e6;
      text-decoration: none;
      transform: translateY(-1px);
    }
  }

  &:focus {
    outline: 2px solid #0066cc;
    outline-offset: 2px;
  }
`

function Projects() {
  const [filter, setFilter] = useState('Featured')

  const featuredProjects = projects.filter(project => project.featured)
  const allProjects = projects

  const displayedProjects = filter === 'Featured' ? featuredProjects : allProjects

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle>Featured Projects</SectionTitle>
        <SectionSubtitle>
          A collection of projects showcasing my development skills
        </SectionSubtitle>
        
        <FilterButtons>
          <FilterButton 
            active={filter === 'Featured'}
            onClick={() => setFilter('Featured')}
          >
            Featured
          </FilterButton>
          <FilterButton 
            active={filter === 'All'}
            onClick={() => setFilter('All')}
          >
            All Projects
          </FilterButton>
        </FilterButtons>

        <ProjectsContainer>
          <ProjectsGrid>
            {displayedProjects.map((project, index) => (
              <ProjectCard key={index}>
                <ProjectImage image={project.image} />
                
                <ProjectContent>
                  <ProjectHeader>
                    <h3>{project.title}</h3>
                    <div className="subtitle">{project.subtitle}</div>
                    <div className="date">{project.date}</div>
                  </ProjectHeader>
                  
                  <ProjectDescription>
                    {project.description.length > 120 
                      ? `${project.description.substring(0, 120)}...` 
                      : project.description
                    }
                  </ProjectDescription>
                  
                  <TechStack>
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <TechTag key={techIndex}>{tech}</TechTag>
                    ))}
                    {project.technologies.length > 4 && (
                      <TechTag>+{project.technologies.length - 4}</TechTag>
                    )}
                  </TechStack>
                  
                  <ProjectLinks>
                    <ProjectLink 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="primary"
                      aria-label={`View ${project.title} live demo`}
                    >
                      Live Demo
                    </ProjectLink>
                    {project.github && (
                      <ProjectLink 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="secondary"
                        aria-label={`View ${project.title} source code`}
                      >
                        GitHub
                      </ProjectLink>
                    )}
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </ProjectsContainer>
      </Container>
    </ProjectsSection>
  )
}

export default Projects