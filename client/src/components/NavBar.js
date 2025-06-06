import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import OS from '../assets/img/OS.jpg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from 'react-router-dom';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <a href='https://onlysun.xyz' classname="OS"><img src={OS} alt="Only Sun Logo" /></a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#tech" className={activeLink === 'techstack' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('techstack')}>Tech</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/tomas-mier/"><img src={navIcon1} alt="LinkedIn Logo, redirects to Tomas Mier's profile on LinkedIn" target="_blank" /></a>
              </div>
              <div className="social-icon">
                <a href="https://www.facebook.com/onlysunshinesbright/"><img src={navIcon2} alt="Facebook Logo, redirects to Tomas Mier's profile on Facebook" target="_blank" /></a>
              </div>
              <div className="social-icon">
                <a href="https://www.instagram.com/onlysunshines/"><img src={navIcon3} alt="Instagram Logo, redirects to Tomas Mier's profile on Instagram" target="_blank" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let's Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}