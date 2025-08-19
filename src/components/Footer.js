import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{ background: "black", color: "white", padding: "20px 0" }}>
      <Container fluid>
        <Row className="text-center">
          <Col>
            <h5 style={{ marginBottom: "10px" }}>a solid plan</h5>
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
              © {new Date().getFullYear()} a solid plan. All rights reserved.
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
