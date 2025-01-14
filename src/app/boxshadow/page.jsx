"use client"
import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
const BoxShadow = () => {
  const [horizontal, setHorizontal] = useState(10);
  const [vertical, setVertical] = useState(10);
  const [blur, setBlur] = useState(15);
  const [spread, setSpread] = useState(0);
  const [color, setColor] = useState('#000000');
  const [inset, setInset] = useState(false);

  // Function to handle changes in range inputs
  const handleRangeChange = (e) => {
    const { id, value } = e.target;
    if (id === 'horizontal') setHorizontal(value);
    else if (id === 'vertical') setVertical(value);
    else if (id === 'blur') setBlur(value);
    else if (id === 'spread') setSpread(value);
  };

  // Function to handle changes in color and inset checkbox
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    if (type === 'color') setColor(value);
    else if (type === 'checkbox') setInset(checked);
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(`box-shadow: ${boxShadowCSS};`)
      .then(() => {
          toast.success(`Copied`);
      })
      .catch(err => {
          toast.success(`Something went wrong`);
      });
  };
  // Generate the box-shadow CSS string
  const boxShadowCSS = `${inset ? 'inset' : ''} ${horizontal}px ${vertical}px ${blur}px ${spread}px ${color}`;

  return (
    <Container className="mt-5">
        <ToastContainer
            position="bottom-right"/>
      <h1 className="text-center mb-5">Box Shadow Generator</h1>
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
            <label>Spread Radius: {spread}px</label>
            <input
              id="spread"
              type="range"
              min="-20"
              max="20"
              value={spread}
              onChange={handleRangeChange}
              className="form-range mb-3"
            />
          </div>
          <Row>
            <Col>
          <div>
            <label>Color:</label>
            <input
              id="color"
              type="color"
              value={color}
              onChange={handleChange}
              className="mx-3 mb-3 border-1"
            />
          </div>
          
          </Col>
          <Col>
          <div>
            <label>Inset:</label>
            <input
              id="inset"
              type="checkbox"
              checked={inset}
              onChange={handleChange}
              className="form-check-input border border-dark border-3 mx-2"
            />
          </div>
          </Col>
          </Row>
          
        </Col>

        {/* Generated CSS Section */}
        <Col md={4}>
          <h3>Generated CSS:</h3>
          <textarea
            readOnly
            value={`box-shadow: ${boxShadowCSS};`}
            rows="4"
            className="form-control mb-3"
          />
            <Button onClick={()=>{copyToClipboard()}} className='w-100'>Copy CSS</Button>
        </Col>

        {/* Live Preview Section */}
        <Col md={4} style={{width:"20%"}}>
          <h3>Live Preview:</h3>
          <div
            style={{
              width: '200px',
              height: '200px',
              backgroundColor: '#3498db',
              marginTop: '20px',
              boxShadow: boxShadowCSS,
              transition: 'box-shadow 0.3s ease',
            }}
          ></div>
        </Col>
      </Row>
    </Container>
  );
};

export default BoxShadow;
