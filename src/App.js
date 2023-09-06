import About from "./About";
import "./App.css";
import Experiences from "./Experiences";
import HeroSection from "./HeroSection";
import Projects from "./Projects";
function App() {
  return (
    <div className="App">
      <header className="App-header flex justify-between px-10 py-5">
        <h1 className="p-2 text-3xl font-bold">
          vishal.<span style={{ color: "yellowgreen" }}>dev</span>
        </h1>
        <div className="menu flex">
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
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
