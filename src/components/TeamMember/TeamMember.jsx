import { teamData } from "../../data/data";
import "./style.css";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

const TeamMember = () => {
  return (
    <div className="teams">
      {teamData.map((member) => {
        return (
          <div key={member.id} className="member">
            <div className="member-img">
              <img src={member.img} alt="/" />
            </div>
            <div className="member-content">
              <span>{member.header}</span>
              <h4>{member.name}</h4>
              <ul>
                <li>
                  <a href="/">
                    <BsFacebook />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <BsTwitter />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <BsLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TeamMember;
