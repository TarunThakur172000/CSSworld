// components/GradientGallery.js
import React, { useState } from 'react';
import './GradientGallery.css';
import {gradients} from './gradients'
import { Col, Container, Row } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import Link from 'next/link';
function GradientGallery() {
  const [selectedGradient, setSelectedGradient] = useState("linear-gradient(135deg, #9B4D97, #4C2A84)");

  const handleGradientClick = (gradient) => {
    setSelectedGradient(gradient);
  };

  const copyCSS = (css) => {
    navigator.clipboard.writeText(css);
     toast.success(`Copied`);
  };

  return (
    <div className="gradient-gallery"  >
      <Container style={{width:"100% !important"}}>
        <ToastContainer
                          position="bottom-right"/>
        <Row>
          <Col >
          <Row>
            <Col>
              <h2>Gradient Gallery</h2>
            </Col>
            <Col>
              <Link href="/GradiantGallery" prefetch={true}>Load more</Link>
            </Col>

          </Row>
      <div className="gradient-list" style={{overflowY:"scroll",height:"50vh"}}>
        {gradients.map((gradient, index) => (
          <div
            key={index}
            className="gradient-item"
            style={{ background: gradient.css }}
            onClick={() => handleGradientClick(gradient)}
          >
            <span className="gradient-name">{gradient.name}</span>
          </div>
        ))}
      </div>
      </Col>
      <Col>
      {selectedGradient && (
        <div className="gradient-preview" >
          <h3>Selected Gradient</h3>
          <div
            className="preview-box"
            style={{ background: selectedGradient.css }}
          >
            <p>{selectedGradient.name}</p>
            <button onClick={() => copyCSS(selectedGradient.css)}>
              Copy CSS
            </button>
          </div>
        </div>
      )}
      </Col>
      </Row>
      </Container>
    </div>
  );
}

export default GradientGallery;
