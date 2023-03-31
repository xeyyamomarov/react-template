import "./style.css"
import  img from "../../img/testimonial-author.jpg"
const TeamAbout = () => {
  return (
    <div className="team-about">
    <div className="container">
      <div className="team-item">
        <p>
          “Please tell your friends or collegues about TemplateMo website.<br />
          Anyone can access the website to download free templates. Thank you
          for visiting.”
        </p>
        <div className="author">
          <div className="author-img">
            <img src={img} alt="/" />
          </div>
          <div className="author-about">
            <span>Full Stack Mentor</span>
            <h4>Claude David</h4>
          </div>
        </div>
      </div>
      <div className="testimonials">
        <div className="testimonial-about">
          <h6>TESTIMONIALS</h6>
          <h2>
            What They Say <br />
            About Us?
          </h2>
          <p>
            You can search free CSS templates on Google using different <br />
            keywords such as templatemo portfolio, templatemo gallery,<br />
            templatemo blue color, etc.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TeamAbout
