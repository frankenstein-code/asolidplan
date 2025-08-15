import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{ background: "black", color: "white", padding: "20px 0" }}>
      <Container fluid>
        <Row className="text-center">
          <Col>
            <h5 style={{ marginBottom: "10px" }}>A Solid Plan</h5>
            <div>
              <a href="#about" style={{ color: "white", margin: "0 10px" }}>
                About
              </a>
              <a href="#services" style={{ color: "white", margin: "0 10px" }}>
                Services
              </a>
              <a href="#projects" style={{ color: "white", margin: "0 10px" }}>
                Projects
              </a>
              <a href="#contact" style={{ color: "white", margin: "0 10px" }}>
                Contact
              </a>
            </div>

            {/* Social Links */}
            <div style={{ marginTop: "15px" }}>
              <a
                href="https://www.instagram.com/asolidplan.in/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white", margin: "0 10px", fontSize: "1.5rem" }}
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/7259318886"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white", margin: "0 10px", fontSize: "1.5rem" }}
              >
                <FaWhatsapp />
              </a>
            </div>

            <div
              style={{ fontSize: "0.85rem", color: "#aaa", marginTop: "10px" }}
            >
              © {new Date().getFullYear()} A Solid Plan. All rights reserved.
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
