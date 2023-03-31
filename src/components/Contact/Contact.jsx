import "./style.css"
import {AiOutlineRight} from "react-icons/ai"
const Contact = () => {
  return (
    <div className="register-offer">
        <div className="contact">
          <h6>CONTACT US</h6>
          <h2>
            Feel Free To Contact Us<br />
            Anytime
          </h2>
          <p>
            Thank you for choosing our templates.<br />
            We provide you best CSS templates at absolutely <br />
            100% free of charge. You may support us by<br />
            sharing our website to your friends.
          </p>
        </div>
        <div className="sales">
          <div className="special-offer">
            <span>
              OFF <br />
              50%
            </span>
          </div>
          <div className="valide">
            <h6>VALIDE: 24 APRIL 2036</h6>
            <h4>Special Offer 50% OFF!</h4>
          </div>
          <div className="icon">
            <a href="/">
                <AiOutlineRight/>
            </a>
          </div>
        </div>
      </div>
  )
}

export default Contact
