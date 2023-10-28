import About from "./About";
import "./App.css";
import Experiences from "./Experiences";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
function App() {
  return (
    <div className="App">
      <header className="App-header flex justify-between px-3 sm:px-10 py-5">
        <h1 className="p-2 text-xl sm:text-3xl font-bold cursor-pointer">
          <a href="/">
            {" "}
            vishal.<span style={{ color: "yellowgreen" }}>dev</span>
          </a>
        </h1>
        <div className="menu flex hidden sm:flex">
          <div className="flex">
            <h3 className="py-2 px-4">
              <a href="#about">About</a>
            </h3>
            <h3 className="py-2 px-4">
              <a href="#experience">Experience</a>
            </h3>
            <h3 className="py-2 px-4">
              <a href="#projects">Projects</a>
            </h3>
            <h3 className="py-2 px-4">
              <a href="#experience">Contact Me</a>
            </h3>
          </div>
        </div>
      </header>
      <main>
        <HeroSection />
        <About />
        <Experiences />
        <Projects />
        <Testimonials />
        <Footer />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
