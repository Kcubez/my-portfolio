import { useEffect, useRef } from 'react';
import profileImage from '../assets/me in amazon.jpg';
import './About.css';

function About() {
  const aboutRef = useRef(null);

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about section" ref={aboutRef}>
      <div className="container">
        <h2 className="section-title">About</h2>

        <div className="about-content">
          <div className="about-image-wrapper">
            <div className="about-image-container">
              <img src={profileImage} alt="Kaung Khant Kyaw" className="about-profile-image" />
              <div className="image-glow"></div>
            </div>
          </div>

          <div className="about-info">
            <p className="about-description">
              I'm a <strong>First-Class Honours Computer Systems Engineering graduate</strong> with
              <strong> 3+ years of experience</strong> in full-stack development. Using modern
              technologies like React, Next.js, and Python, I've built production-ready web
              applications in domains including AI, data analytics, and business solutions.
            </p>

            <div className="about-details">
              <div className="detail-block">
                <h3>Education</h3>
                <div className="detail-items">
                  <div className="detail-item">
                    <div className="detail-icon edu">🎓</div>
                    <div className="detail-text">
                      <strong>BSc (Hons) Computer Systems Engineering</strong>
                      <span>First Class Honours — 2025</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="detail-block">
                <h3>Certifications</h3>
                <div className="detail-items">
                  <div className="detail-item">
                    <div className="detail-icon cert">🤖</div>
                    <div className="detail-text">
                      <strong>Practical Machine Learning</strong>
                      <span>Women in AI Myanmar — 2025</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-icon cert">📊</div>
                    <div className="detail-text">
                      <strong>Associate Data Scientist in Python</strong>
                      <span>DataCamp — 2025</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-icon cert">☁️</div>
                    <div className="detail-text">
                      <strong>AWS Cloud Quest: Cloud Practitioner</strong>
                      <span>Amazon Web Services — 2024</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="detail-block">
                <h3>Current Role</h3>
                <div className="detail-items">
                  <div className="detail-item">
                    <div className="detail-icon work">💼</div>
                    <div className="detail-text">
                      <strong>Junior AI Specialist</strong>
                      <span>Thura Thanlwin Co. Ltd. — Bangkok, Thailand</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
