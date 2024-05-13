import "../assets/css/Hero.css";
import TypingAnimation from "./TypingAnimation";
import CreateButton from "./CreateButton";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-flex">
        <div className="hero-title">
          <div className="text-title">
            Nikolayk Muñoz
            <div className="animation-title">
              <TypingAnimation
                areas={[
                  "Software Developer",
                  "Frontend Developer",
                  "Data Engineer",
                ]}
                loop
                speed={100}
              />
            </div>
            <div className="hero-buttons">
              <CreateButton
                iconFamily="fa-brands"
                iconText="fa-linkedin-in"
                buttonName="LinkedIn"
                linkTo="https://www.linkedin.com/in/nikolaykmunozalvarez/"
              />
              <CreateButton
                iconFamily="fa-solid"
                iconText="fa-arrow-down"
                buttonName="Download CV"
                linkTo="./Andrew Nikolayk Munoz Alvarez CVE.pdf"
                buttonType="download"
                nameCls="dwn-btn"
              />
              <CreateButton
                iconFamily="fa-brands"
                iconText="fa-github"
                buttonName="GitHub"
                linkTo="https://github.com/AndNikDev"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
