import logo from "./logo.svg";
import "./App.css";
import Navbar from './Components/Navbar';
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      {/* {Navbar} */}
      <Navbar />
      {/* Intro */}
      <Home />
      {/* About Me */}
      <AboutMe/>
      {/* Skills */}
      <Skills />
      {/* Portfolio */}
      <Portfolio />
      {/* Contact Us*/}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
