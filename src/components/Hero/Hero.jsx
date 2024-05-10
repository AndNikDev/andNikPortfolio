import "./Hero.css";
import TypingAnimation from "./TypingAnimation";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-flex">
        <div className="hero-title">
          <div className="text-title">
            Nikolayk Muñoz
            <div className="animation-title"><TypingAnimation
              areas={[
                "Software Developer",
                "Frontend Developer",
                "Data Engineer",
              ]}
              loop
              speed={100}
            /></div>
            
            
            
            <div className="hero-buttons">
              <a href="./Andrew Nikolayk Munoz Alvarez CVE.pdf" download>
                Download CV
              </a>
              <br />
              <a href="https://www.linkedin.com/in/nikolaykmunozalvarez/">
                LinkedIn
              </a>
              <br />
              <a href="https://github.com/AndNikDev">GitHub</a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
