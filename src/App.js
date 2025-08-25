import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProjectsPage from "./pages/ProjectsPage";
import { Navbar, Nav, Container } from "react-bootstrap";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Navbar
        expand="lg"
        fixed="top"
        className="shadow"
        style={{ backgroundColor: "#F6F4F0" }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <span className={`fade-text ${showIntro ? "visible" : "hidden"}`}>
              <i>it all starts with</i>
            </span>{" "}
            <b>a solid plan</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/projects">
                Gallery
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="my-4">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
