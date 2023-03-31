import { courseData } from "../../data/data";
import "./style.css"

const Course = () => {
  return (
    <div className="courses" id="courses" >
      <div className="courses-section">
        <h6>Latest Courses</h6>
        <h2>Latest Courses</h2>
      </div>
      <div className="events">
        <ul>
          <li>
            <a href="/">Show All</a>
          </li>
          <li>
            <a href="/">Webdesign</a>
          </li>
          <li>
            <a href="/">Development</a>
          </li>
          <li>
            <a href="/">Wordpress</a>
          </li>
        </ul>
      </div>
      <div className="events-info">
        {courseData.map((course)=>{
           return(
            <div  key={course.id} className="event-info">
                <div className="events-img">
                    <img src={course.img} alt="/" />
                    <span>{course.header}</span>
                </div>
                <div className="events-content">
            <span>{course.author}</span>
            <h4>{course.content}</h4>
          </div>
            </div>
           )
        })}
      </div>

    </div>
  );
};

export default Course;
