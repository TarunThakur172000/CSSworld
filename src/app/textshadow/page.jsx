"use client"
import React, { useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
const TextShadow = () => {
  const [horizontal, setHorizontal] = useState(10);
  const [vertical, setVertical] = useState(10);
  const [blur, setBlur] = useState(15);
  const [color, setColor] = useState('#000000');
  const [inset, setInset] = useState(false);

  // Function to handle changes in range inputs
  const handleRangeChange = (e) => {
    const { id, value } = e.target;
    if (id === 'horizontal') setHorizontal(value);
    else if (id === 'vertical') setVertical(value);
    else if (id === 'blur') setBlur(value);
  };

  // Function to handle changes in color and inset checkbox
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    if (type === 'color') setColor(value);
    else if (type === 'checkbox') setInset(checked);
  };

  // Generate the text-shadow CSS string
  const textShadowCSS = `${horizontal}px ${vertical}px ${blur}px ${color}`;

  // Function to copy the CSS to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(`text-shadow: ${textShadowCSS};`)
      .then(() => {
          toast.success(`Copied`);
      })
      .catch(err => {
        toast.error(`Something went Wrong sorry for inconveniance`)
       
      });
  };

  return (
    <Container className="mt-5">
        <ToastContainer
            position="bottom-right"/>
      <h1 className="text-center mb-5">Text Shadow Generator</h1>
      <Row className="gap-4">
        {/* CSS Editor Section */}
        <Col md={4}>
          <h3>CSS Editor</h3>
          <div>
            <label>Horizontal Offset: {horizontal}px</label>
            <input
              id="horizontal"
              type="range"
              min="-50"
              max="50"
              value={horizontal}
              onChange={handleRangeChange}
              className="form-range mb-3"
            />
          </div>
          <div>
            <label>Vertical Offset: {vertical}px</label>
            <input
              id="vertical"
              type="range"
              min="-50"
              max="50"
              value={vertical}
              onChange={handleRangeChange}
              className="form-range mb-3"
            />
          </div>
          <div>
            <label>Blur Radius: {blur}px</label>
            <input
              id="blur"
              type="range"
              min="0"
              max="50"
              value={blur}
              onChange={handleRangeChange}
              className="form-range mb-3"
            />
          </div>
          <div>
            <label>Color:</label>
            <input
              id="color"
              type="color"
              value={color}
              onChange={handleChange}
              className="mx-2 mb-3"
            />
          </div>
         
        </Col>

        {/* Generated CSS Section */}
        <Col md={4}>
          <h3>Generated CSS:</h3>
          <textarea
            readOnly
            value={`text-shadow: ${textShadowCSS};`}
            rows="4"
            className="form-control mb-3"
          />
          <Button onClick={copyToClipboard} className="btn btn-primary w-100">
            Copy CSS
          </Button>
        </Col>

        {/* Live Preview Section */}
        <Col >
          <h3>Live Preview:</h3>
          <div
            style={{
              fontSize: '40px',
              fontWeight: 'bold',
              color: '#333',
              textShadow: textShadowCSS,
              transition: 'text-shadow 0.3s ease',
            }}
          >
            Live Preview Text
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TextShadow;
