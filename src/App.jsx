import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import EFrontEnd from "./components/Experiences/ExperienceFrontEnd";
import EBackEnd from "./components/Experiences/ExperienceBackEnd";
import Portfolio from "./components/Portfolio";
import DevSquad from "./components/DevSquad";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="relative h-full w-full bg-gray-950 overflow-x-hidden">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <NavBar />
        <Hero />
        <About />
        <EFrontEnd />
        <EBackEnd />
        <Portfolio />
        <DevSquad />
        <Footer />
      </div>
    </>
  );
}

export default App;
