import { useEffect, useRef } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Crypto Predictor',
    description:
      'AI-Powered Bitcoin Price Prediction platform using machine learning and technical analysis to forecast cryptocurrency trends.',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80',
    tags: ['Next.js', 'TypeScript', 'Gemini AI', 'PostgreSQL'],
    liveUrl: 'https://mot-crypto-predictor.vercel.app/',
    githubUrl: 'https://github.com/Kcubez/crypto-predictor',
  },
  {
    id: 2,
    title: 'Genius Board',
    description:
      'Sales Data Analysis Dashboard that transforms raw data into actionable insights with interactive visualizations and export capabilities.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['Next.js', 'TypeScript', 'Recharts', 'TanStack Table'],
    liveUrl: 'https://genius-board.vercel.app/',
    githubUrl: 'https://github.com/Kcubez/sales-data-analysis-dashboard',
  },
  {
    id: 3,
    title: 'Foodie POS',
    description:
      'Restaurant Point of Sale System with menu management, order processing, and real-time analytics for food service businesses.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'NextAuth.js'],
    liveUrl: 'https://foodie-pos-cloud.vercel.app/',
    githubUrl: 'https://github.com/Kcubez/Foodie-POS',
  },
  {
    id: 4,
    title: 'MOT Genius AutoWriter',
    description:
      'AI Content Generation Platform that creates high-quality written content using advanced language models and customizable templates.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    tags: ['Flask', 'Python', 'Gemini AI', 'Redis'],
    liveUrl: 'https://mot-genius-autowriter.vercel.app/',
    githubUrl: 'https://github.com/Kcubez/mot-genius-autowriter-staging',
  },
];

function Projects() {
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.05 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects section" ref={projectsRef}>
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="project-card"
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View live demo"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View source code"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-arrow"
                aria-label="Visit project"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
