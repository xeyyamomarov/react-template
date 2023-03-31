import { eventData } from "../../data/data";
import { AiOutlineRight } from "react-icons/ai";
import "./style.css";

const Event = () => {
  return (
    <div className="events-coming" id="events">
      <div className="event-header">
        <h6>SCHEDULE</h6>
        <h2>Upcoming Events</h2>
      </div>
      <div className="events-item">
        {eventData.map((event) => {
          return (
            <div key={event.id} className="event-item">
              <div className="event-img">
                <img src={event.img} alt="/" />
              </div>
              <div className="event-data">
                <ul>
                  <div className="event-text">
                    <li>
                      <span className="category">{event.category}</span>
                      <h4>{event.content}</h4>
                    </li>
                  </div>
                  <div className="event-date">
                    <li>
                      <span>Date:</span>
                      <h6>{event.date}</h6>
                    </li>
                    <li>
                      <span>Duration:</span>
                      <h6>{event.duration}</h6>
                    </li>
                    <li>
                      <span>Prie:</span>
                      <h6>{event.price}</h6>
                    </li>
                  </div>
                </ul>
              </div>
              <div className="event-icon">
                <AiOutlineRight />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Event;
