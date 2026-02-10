import './GlowBackground.css';

function GlowBackground() {
  return (
    <div className="glow-background">
      <div className="glow-orb glow-orb-1"></div>
      <div className="glow-orb glow-orb-2"></div>
      <div className="glow-orb glow-orb-3"></div>
      <div className="glow-border glow-border-top"></div>
      <div className="glow-border glow-border-right"></div>
      <div className="glow-border glow-border-bottom"></div>
      <div className="glow-border glow-border-left"></div>
      <div className="noise-overlay"></div>
    </div>
  );
}

export default GlowBackground;
