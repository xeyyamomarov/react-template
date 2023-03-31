import {AiOutlineSearch} from "react-icons/ai"
import "./style.css"
const Navbar = () => {
  return (
    <nav className="nav">
        <div className="container">
    <div className="navbar">
      <h1>SCHOLAR</h1>
      <div className="search">
        <input type="text" placeholder="Type Something" className="search" />
        <AiOutlineSearch className="search-icon" />
      </div>
      <ul>
        <li>
          <a className="active" href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#courses">Courses</a>
        </li>
        <li>
          <a href="#team">Team</a>
        </li>
        <li>
          <a href="#events">Events</a>
        </li>
        <li>
          <a href="#register">Register Now!</a>
        </li>
      </ul>
    </div>
    </div>
  </nav>
  )
}

export default Navbar
