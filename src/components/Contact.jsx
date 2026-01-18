import React, { useState } from 'react'
import styled from 'styled-components'
import personalInfo from '../data/personal'

const ContactSection = styled.section`
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
  margin-bottom: 1rem;
  color: #333;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.125rem;
  color: #666;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: start;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`

const ContactInfo = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #333;
  }

  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .icon {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0066cc;
    font-weight: 600;
  }

  .content {
    h4 {
      font-size: 1rem;
      font-weight: 600;
      color: #333;
      margin-bottom: 0.25rem;
    }

    a {
      color: #666;
      text-decoration: none;

      &:hover {
        color: #0066cc;
        text-decoration: underline;
      }
    }
  }
`

const ContactForm = styled.form`
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #e9ecef;
`

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    font-size: 0.875rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.5rem;
  }

  input, textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #dee2e6;
    border-radius: 6px;
    font-size: 1rem;
    font-family: inherit;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: #0066cc;
      box-shadow: 0 0 0 2px rgba(0, 102, 204, 0.1);
    }

    &::placeholder {
      color: #adb5bd;
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }
`

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.875rem;
  background: #0066cc;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: #0052a3;
    transform: translateY(-1px);
  }

  &:disabled {
    background: #adb5bd;
    cursor: not-allowed;
  }

  &:focus {
    outline: 2px solid #0066cc;
    outline-offset: 2px;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: #e9ecef;
  color: #666;
  border-radius: 50%;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: #0066cc;
    color: white;
    transform: translateY(-2px);
    text-decoration: none;
  }

  &:focus {
    outline: 2px solid #0066cc;
    outline-offset: 2px;
  }
`

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Create mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
    const body = encodeURIComponent(`Hi Rohit,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`)
    const mailtoLink = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
    
    window.location.href = mailtoLink
    
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })
    }, 1000)
  }

  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle>Get In Touch</SectionTitle>
        <SectionSubtitle>
          Let's discuss your next project or collaboration opportunity. I'm always excited to work on interesting challenges.
        </SectionSubtitle>
        
        <ContactContent>
          <ContactInfo>
            <h3>Let's Connect</h3>
            <p>
              I'm available for consulting on interesting projects, particularly those involving data 
              that affects the environment or helps people live simpler lives. Feel free to reach out!
            </p>
            
            <ContactDetails>
              <ContactItem>
                <div className="icon">@</div>
                <div className="content">
                  <h4>Email</h4>
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                </div>
              </ContactItem>
              
              <ContactItem>
                <div className="icon">📍</div>
                <div className="content">
                  <h4>Location</h4>
                  <span>{personalInfo.location}</span>
                </div>
              </ContactItem>
              
              <ContactItem>
                <div className="icon">🚀</div>
                <div className="content">
                  <h4>Response Time</h4>
                  <span>Usually within 24 hours</span>
                </div>
              </ContactItem>
            </ContactDetails>

            <SocialLinks>
              <SocialLink 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                GH
              </SocialLink>
              <SocialLink 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                LI
              </SocialLink>
            </SocialLinks>
          </ContactInfo>

          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or idea..."
                required
              />
            </FormGroup>

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Opening Email Client...' : 'Send Message'}
            </SubmitButton>
          </ContactForm>
        </ContactContent>
      </Container>
    </ContactSection>
  )
}

export default Contact