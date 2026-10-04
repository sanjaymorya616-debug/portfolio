import React from 'react';

export default function App() {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'JAVA', 'SQL',
    'MS Excel (Advanced)', 'Power BI', 'Git & GitHub', 'MS Office'
  ];

  const strengths = [
    'Analytical & Data Driven Decision Making',
    'Effective Communication & Team Leadership',
    'Adaptable & Problem-solver',
    'Punctual & Reliable'
  ];

  const projects = [
    {
      title: 'CineStream',
      description: 'A dynamic web streaming interface built using modern web tools and React.',
      link: 'https://cinestream-kappa-sandy.vercel.app/',
      tags: ['React', 'JavaScript', 'CSS', 'Vercel']
    },
    {
      title: 'Evoke Notebooks',
      description: 'An interactive web application for note-taking and management.',
      link: 'https://evoke-notebooks.vercel.app/',
      tags: ['React', 'JavaScript', 'Web App', 'Vercel']
    }
  ];

  return (
    <div style={styles.container}>
      {/* Navigation Bar */}
      <nav style={styles.nav}>
        <h1 style={styles.logo}>SANJAY MAURYA</h1>
        <div style={styles.navLinks}>
          <a href="#about" style={styles.link}>About</a>
          <a href="#experience" style={styles.link}>Experience</a>
          <a href="#skills" style={styles.link}>Skills</a>
          <a href="#projects" style={styles.link}>Projects</a>
          <a href="#education" style={styles.link}>Education</a>
          <a href="#contact" style={styles.link}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" style={styles.hero}>
        <h2 style={styles.heroTitle}>Sanjay Maurya</h2>
        <h3 style={styles.heroSubtitle}>MIS Executive & Web Developer</h3>
        <p style={styles.objective}>
          To work with an organization where my creativity combined with my experience could be best utilized & where I could make best use of my talent.
        </p>
        <div style={styles.heroButtons}>
          <a href="#projects" style={styles.primaryBtn}>View Projects</a>
          <a href="#contact" style={styles.secondaryBtn}>Get in Touch</a>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={styles.section}>
        <h3 style={styles.sectionTitle}>Work Experience</h3>
        <div style={styles.card}>
          <h4 style={styles.cardTitle}>MIS Executive</h4>
          <span style={styles.duration}>1 Year Work Experience</span>
          <p style={styles.cardText}>
            Proficient in advanced data analysis, reporting, and team management.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={styles.section}>
        <h3 style={styles.sectionTitle}>Technical Skills & Tools</h3>
        <div style={styles.badgeContainer}>
          {skills.map((skill) => (
            <span key={skill} style={styles.badge}>{skill}</span>
          ))}
        </div>

        <h4 style={{ ...styles.cardTitle, marginTop: '2rem', marginBottom: '1rem' }}>Strengths</h4>
        <div style={styles.badgeContainer}>
          {strengths.map((strength) => (
            <span key={strength} style={styles.strengthBadge}>{strength}</span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={styles.section}>
        <h3 style={styles.sectionTitle}>Featured Projects</h3>
        <div style={styles.grid}>
          {projects.map((project) => (
            <div key={project.title} style={styles.card}>
              <h4 style={styles.cardTitle}>{project.title}</h4>
              <p style={styles.cardText}>{project.description}</p>
              <div style={styles.tagGroup}>
                {project.tags.map((tag) => (
                  <span key={tag} style={styles.tag}>{tag}</span>
                ))}
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={styles.projectLink}
              >
                Visit Project Live ↗
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" style={styles.section}>
        <h3 style={styles.sectionTitle}>Education</h3>
        <div style={styles.grid}>
          <div style={styles.card}>
            <h4 style={styles.cardTitle}>Bachelor of Computer Applications (BCA)</h4>
            <p style={styles.cardText}>Passed Out</p>
          </div>
          <div style={styles.card}>
            <h4 style={styles.cardTitle}>12th Grade (Senior Secondary)</h4>
            <p style={styles.cardText}>CBSE Board — 73%</p>
          </div>
          <div style={styles.card}>
            <h4 style={styles.cardTitle}>10th Grade (Matriculation)</h4>
            <p style={styles.cardText}>HBSE Board — 73%</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.section}>
        <h3 style={styles.sectionTitle}>Contact Details</h3>
        <div style={styles.contactCard}>
          <p><strong>Email:</strong> <a href="mailto:Sanjaymorya616@gmail.com" style={styles.contactLink}>Sanjaymorya616@gmail.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:9569982611" style={styles.contactLink}>+91 9569982611</a></p>
          <p><strong>Location:</strong> 5e/25 BP, NIT Faridabad - 121001</p>
          <p><strong>Languages:</strong> English & Hindi</p>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} Sanjay Maurya. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    backgroundColor: '#0f172a',
    color: '#f8fafc',
    minHeight: '100vh',
    padding: '0 2rem',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem 0',
    borderBottom: '1px solid #1e293b',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#38bdf8',
    letterSpacing: '0.05em',
  },
  navLinks: {
    display: 'flex',
    gap: '1.25rem',
    flexWrap: 'wrap',
  },
  link: {
    color: '#94a3b8',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '0.95rem',
  },
  hero: {
    textAlign: 'center',
    padding: '4rem 1rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  heroTitle: {
    fontSize: '2.8rem',
    fontWeight: '800',
    marginBottom: '0.5rem',
  },
  heroSubtitle: {
    fontSize: '1.4rem',
    color: '#38bdf8',
    fontWeight: '600',
    marginBottom: '1.2rem',
  },
  objective: {
    fontSize: '1.1rem',
    color: '#94a3b8',
    lineHeight: '1.6',
    marginBottom: '2rem',
  },
  heroButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
  primaryBtn: {
    backgroundColor: '#0284c7',
    color: '#ffffff',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.375rem',
    textDecoration: 'none',
    fontWeight: '600',
  },
  secondaryBtn: {
    border: '1px solid #334155',
    color: '#f8fafc',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.375rem',
    textDecoration: 'none',
    fontWeight: '600',
  },
  section: {
    padding: '3rem 0',
    maxWidth: '900px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    marginBottom: '1.5rem',
    color: '#38bdf8',
    borderBottom: '2px solid #1e293b',
    paddingBottom: '0.5rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    backgroundColor: '#1e293b',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    border: '1px solid #334155',
  },
  cardTitle: {
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: '#f8fafc',
  },
  duration: {
    fontSize: '0.85rem',
    color: '#38bdf8',
    display: 'block',
    marginBottom: '0.75rem',
  },
  cardText: {
    color: '#94a3b8',
    lineHeight: '1.5',
    fontSize: '0.95rem',
  },
  badgeContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
  },
  badge: {
    backgroundColor: '#0369a1',
    color: '#f0f9ff',
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    fontSize: '0.9rem',
    fontWeight: '500',
  },
  strengthBadge: {
    backgroundColor: '#1e293b',
    border: '1px solid #334155',
    color: '#e2e8f0',
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    fontSize: '0.9rem',
  },
  tagGroup: {
    display: 'flex',
    gap: '0.5rem',
    marginTop: '1rem',
    marginBottom: '1rem',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#0284c720',
    color: '#38bdf8',
    fontSize: '0.75rem',
    padding: '0.25rem 0.5rem',
    borderRadius: '0.25rem',
    border: '1px solid #0284c740',
  },
  projectLink: {
    color: '#38bdf8',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '0.9rem',
    display: 'inline-block',
  },
  contactCard: {
    backgroundColor: '#1e293b',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    border: '1px solid #334155',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    color: '#94a3b8',
  },
  contactLink: {
    color: '#38bdf8',
    textDecoration: 'none',
  },
  footer: {
    textAlign: 'center',
    padding: '2rem 0',
    borderTop: '1px solid #1e293b',
    color: '#64748b',
    fontSize: '0.875rem',
    marginTop: '2rem',
  },
};