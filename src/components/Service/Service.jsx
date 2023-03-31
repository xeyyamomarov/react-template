import "./style.css";
import { serviceData } from "../../data/data";

const Service = () => {
  return (
    <div className="services" id="services">
      <div className="container">
        <div className="services-section">
          {serviceData.map((service) => {
            return (
              <div key={service.id} className="service-col">
                <div className="img">
                  <img src={service.img} alt="/" />
                </div>
                <div className="content">
                  <h4>{service.header}</h4>
                  <p>{service.content}</p>
                  <div className="btn">
                    <a href="/">Read More</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
