import { useEffect, useRef } from 'react';
import './Hero.css';

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-content">
        <span className="hero-greeting">I AM</span>

        <h1 className="hero-name">
          <span className="name-line">KAUNG KHANT</span>
          <span className="name-line accent">KYAW</span>
        </h1>

        <div className="hero-title">
          <span className="title-line">FULL -</span>
          <span className="title-line stack">
            <span className="stack-text">STACK</span>
            <span className="stack-outline">STACK</span>
          </span>
          <span className="title-line">DEVELOPER</span>
        </div>

        <p className="hero-description">
          A First-Class Honours graduate specializing in{' '}
          <strong>TypeScript, React & Next.js</strong> with hands-on experience building
          production-grade <strong>AI-powered applications</strong>. Passionate about writing
          clean, reviewable code and understanding <strong>why</strong> things work, not just
          making them work.
        </p>

        <div className="hero-cta">
          <a href="#contact" className="cta-button primary">
            <span>Contact Me</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
          <a href="#projects" className="cta-button secondary">
            <span>View Projects</span>
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">3+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">1st</span>
            <span className="stat-label">Class Honours</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}

export default Hero;
