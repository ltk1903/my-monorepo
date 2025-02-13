import Service from "./Service";
import Portfolio from "./Portfolio";
import About from "./About";
import Team from "./Team";
import Clients from "./Clients";
import Contact from "./Contact";

const HomePage = () => {
    return (
      <div>
        <Service />
        <Portfolio />
        <About />
        <Team />
        <Clients />
        <Contact />
      </div>
    );
  };
  
export default HomePage;
  