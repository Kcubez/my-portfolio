import { useState, useEffect } from 'react';
import './CustomCursor.css';

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = e => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleLinkHoverStart = e => {
      if (e.target.closest('a, button, .project-card, .nav-link')) {
        setIsHovering(true);
      }
    };

    const handleLinkHoverEnd = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleLinkHoverStart);
    document.addEventListener('mouseout', handleLinkHoverEnd);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleLinkHoverStart);
      document.removeEventListener('mouseout', handleLinkHoverEnd);
    };
  }, [isVisible]);

  return (
    <>
      <div
        className={`custom-cursor-dot ${isVisible ? 'visible' : ''} ${isHovering ? 'hover' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className={`custom-cursor-glow ${isVisible ? 'visible' : ''} ${isHovering ? 'hover' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
}

export default CustomCursor;
