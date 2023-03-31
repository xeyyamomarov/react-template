import "./App.css";
import Footer from "./components/Footer/Footer";
import Courses from "./pages/Courses/Courses";
import Events from "./pages/Events/Events";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Services from "./pages/Services/Services";
import Team from "./pages/Team/Team";

function App() {
  return (
    <>
      <Home />
      <Services />
      <Courses/>
      <Team/>
      <Events/>
      <Register/>
      <Footer/>
    </>
  );
}

export default App;
