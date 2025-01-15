"use client";
import React from "react";
import { Container, Navbar, Nav, Row, Col, Button } from "react-bootstrap";

const HomePage = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/">CSS Generator</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#gradient-generator">Gradient Generator</Nav.Link>
              <Nav.Link href="#gallery">Gradient Gallery</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div
        style={{
          backgroundImage: "linear-gradient(to right, #4facfe, #00f2fe)",
          color: "white",
          padding: "100px 0",
          textAlign: "center",
        }}
      >
        <Container>
          <h1>Welcome to CSS Generator</h1>
          <p>Create stunning gradients and CSS styles effortlessly!</p>
          <Button variant="light" size="lg" href="#gradient-generator">
            Start Creating
          </Button>
        </Container>
      </div>

      {/* Features Section */}
      <Container className="mt-5">
        <h2 className="text-center mb-4">Features</h2>
        <Row>
          <Col md={4} className="text-center mb-4">
            <i
              className="bi bi-palette"
              style={{ fontSize: "3rem", color: "#4facfe" }}
            ></i>
            <h4 className="mt-3">Gradient Generator</h4>
            <p>Create and customize beautiful gradients with ease.</p>
          </Col>
          <Col md={4} className="text-center mb-4">
            <i
              className="bi bi-grid-3x3-gap"
              style={{ fontSize: "3rem", color: "#00f2fe" }}
            ></i>
            <h4 className="mt-3">Gradient Gallery</h4>
            <p>Explore pre-made gradient collections for inspiration.</p>
          </Col>
          <Col md={4} className="text-center mb-4">
            <i
              className="bi bi-brush"
              style={{ fontSize: "3rem", color: "#ff6f61" }}
            ></i>
            <h4 className="mt-3">Custom CSS Tools</h4>
            <p>Generate CSS styles for buttons, backgrounds, and more.</p>
          </Col>
        </Row>
      </Container>

      {/* Footer Section */}
      <footer className="bg-dark text-light py-4 mt-5">
        <Container>
          <Row>
            <Col md={6}>
              <h5>CSS Generator</h5>
              <p>Effortless CSS styling at your fingertips.</p>
            </Col>
            <Col md={6} className="text-md-end">
              <Nav className="justify-content-end">
                <Nav.Link href="#gradient-generator" className="text-light">
                  Gradient Generator
                </Nav.Link>
                <Nav.Link href="#gallery" className="text-light">
                  Gallery
                </Nav.Link>
                <Nav.Link href="#contact" className="text-light">
                  Contact
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
          <div className="text-center mt-3">
            &copy; {new Date().getFullYear()} CSS Generator. All rights
            reserved.
          </div>
        </Container>
      </footer>
    </>
  );
};

export default HomePage;
