// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Certs } from './components/Certs';
import { TechStack } from './components/TechStack';
import { GitHub } from './components/GitHub';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Certs />
      <TechStack />
      <GitHub />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
