import AboutUs from "../AboutUs/AboutUs";
import Accordion from "../Accordion/Accordion";
import "./style.css"
const About = () => {
  return (
    <div className="about-section" >
      <Accordion/>
      <AboutUs/>
    </div>
  );
};

export default About;
