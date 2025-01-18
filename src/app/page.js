"use client";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from 'react-vanilla-tilt';
import { gradientGallery, gradients, tools } from "./res/cssmod";
import Footer from "../component/Footer";


const HomePage = () => {
  const [currentGradient, setCurrentGradient] = useState(gradients[0]);
  const [currentToolIndex, setCurrentToolIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 500 });

    // Change gradient every 3 seconds
    const gradientInterval = setInterval(() => {
      const randomGradient =
        gradients[Math.floor(Math.random() * gradients.length)];
      setCurrentGradient(randomGradient);
    }, 500);

    // Cycle through tools every 4 seconds
    const toolInterval = setInterval(() => {
      setCurrentToolIndex((prevIndex) => (prevIndex + 1) % tools.length);
    }, 4000);

    return () => {
      clearInterval(gradientInterval);
      clearInterval(toolInterval);
    };
  }, []);

  return (
    <>
   
      {/* Hero Section */}
      
      <div
        style={{
          backgroundImage: "linear-gradient(to bottom, #999dd7, #6b74ff)",
          color: "white",
          padding: "100px 0",
          textAlign: "center",
        }}
      >
        <Container className="w-80">
          <h1>Welcome to CSS World</h1>
          <p>Create stunning gradients and CSS styles effortlessly!</p>
          <Button variant="light" size="lg" href="/gradientcss">
            Start Creating
          </Button>
        </Container>
      </div>

      <Container className="mt-5">
        <h2 className="text-center mb-4" data-aos="fade-up">
          Features
        </h2>
        <Row>
          {/* Gradient Generator Section */}
          <Col
            md={4}
            className="text-center mb-4"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div
              className="gradient-box"
              style={{
                background: currentGradient,
                width: "100%",
                height: "150px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "background 1s ease",
              }}
            ></div>
            <h4 className="mt-3">Gradient Generator</h4>
            <p>Create and customize beautiful gradients with ease.</p>
          </Col>

          {/* Gradient Gallery Section */}
          <Col
            md={4}
            className="text-center mb-4"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="gradient-gallery-container">
              <div className="scroll-box top-to-bottom">
                {gradientGallery.map((gradient, index) => (
                  <div
                    key={index}
                    className="gradient-preview"
                    style={{
                      background: gradient.css,
                      display: "flex",
                    }}
                  >
                    <p
                      style={{
                        textShadow: "5px 5px 10px #ffffff",
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: "10px",
                        margin: "auto",
                      }}
                    >
                      {gradient.name}
                    </p>
                  </div>
                ))}
              </div>
              <div className="scroll-box bottom-to-top">
                {gradientGallery.map((gradient, index) => (
                  <div
                    key={index}
                    className="gradient-preview"
                    style={{
                      background: gradient.css,
                      display: "flex",
                    }}
                  >
                    <p
                      style={{
                        textShadow: "5px 5px 10px #ffffff",
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: "10px",
                        margin: "auto",
                      }}
                    >
                      {gradient.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <h4 className="mt-3">Gradient Gallery</h4>
            <p>Explore pre-made gradient collections for inspiration.</p>
          </Col>

          {/* Custom CSS Tools Section */}
          <Col
            md={4}
            className="text-center mb-4 position-relative"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="animated-tool-container">
              <div className="tool-animation">
                <h4>{tools[currentToolIndex].name}</h4>
                <p>{tools[currentToolIndex].description}</p>
              </div>
            </div>
            <h4 className="mt-3">Custom CSS Tools</h4>
            <p>Generate CSS styles for buttons, backgrounds, and more.</p>
          </Col>
        </Row>
      </Container>
      
      <Container >
        <Row><h2 className="text-center">Tools</h2></Row>
        <Row className="text-center mt-4">
          
          <Col sm 
          data-aos="zoom-in"
          data-aos-delay="100">
            <Title  style={{}} className="my-4">
        <Button variant="dark" size="lg" href="/boxshadow" className="p-5 w-100 btn-col">
                  Box Shadow
          </Button>
          </Title>
        </Col>
        
        <Col sm
        data-aos="zoom-out"
        data-aos-delay="100">
          <Title  style={{}} className="my-4">
        <Button variant="dark" size="lg"  href="/textshadow" className="p-5 w-100 btn-col">
            Text Shadow
          </Button>
          </Title>
        </Col>
        <Col sm
        data-aos="zoom-in"
        data-aos-delay="100">
          <Title  style={{}} className="my-4">
        <Button variant="dark" size="lg" href="/csscursor" className="p-5 w-100 btn-col">
            CSS cursor
          </Button>
          </Title>
        </Col>
        </Row>
        <Row className="text-center mt-4">
          <Col sm
          data-aos="zoom-in"
          data-aos-delay="100">
            <Title  className="my-4" style={{}}>
        <Button variant="dark" size="lg" href="/border" className="p-5  w-100 btn-col">
            Border
          </Button>
          </Title>
        </Col>
        <Col sm
        data-aos="zoom-out"
        data-aos-delay="100">
          <Title  style={{}} className="my-4">
        <Button variant="dark" size="lg"  href="/gradientcss" className="p-5 w-100 btn-col">
            Gradient Generator
          </Button>
          </Title>
        </Col>
        <Col sm
        data-aos="zoom-in"
        data-aos-delay="100">
          <Title  style={{}} className="my-4">
        <Button variant="dark" size="lg" href="/transformcss" className="p-5 w-100 btn-col">
            Transform CSS
          </Button>
          </Title>
        </Col>
        </Row>
        <Row className="text-center mt-4">
          <Col sm
          data-aos="zoom-in"
          data-aos-delay="100">
            <Title  style={{}} className="my-4">
        <Button variant="dark" size="lg" href="/rgbanhexcolor" className="p-5 w-100 btn-col">
            RGBA and HEX Color
          </Button>
          </Title>
        </Col>
        <Col sm
        data-aos="zoom-out"
        data-aos-delay="100">
          <Title style={{}} className="my-4">
        <Button variant="dark" size="lg"  href="/multiplecol" className="p-5 w-100 btn-col">
            Multiple COL
          </Button>
          </Title>
        </Col>
        <Col sm
        data-aos="zoom-in"
        data-aos-delay="100">
          <Title style={{}} className="my-4">
        <Button variant="dark" size="lg" href="/filter" className="p-5 w-100 btn-col">
            Image Filter
          </Button>
          </Title>
        </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
