"use client"
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";

const Border = () => {
  const [borderWidth, setBorderWidth] = useState(5);
  const [borderStyle, setBorderStyle] = useState('solid');
  const [borderColor, setBorderColor] = useState('#000000');
  const [borderRadius, setBorderRadius] = useState(10);
  const [topLeftRadius, setTopLeftRadius] = useState(10);
  const [topRightRadius, setTopRightRadius] = useState(10);
  const [bottomLeftRadius, setBottomLeftRadius] = useState(10);
  const [bottomRightRadius, setBottomRightRadius] = useState(10);

  // Handle changes in border width, style, color, and radius
  const handleRangeChange = (e) => {
    const { id, value } = e.target;
    if (id === 'borderWidth') setBorderWidth(value);
    else if (id === 'borderRadius') setBorderRadius(value);
  };

  const handleBorderStyleChange = (e) => {
    setBorderStyle(e.target.value);
  };

  const handleBorderColorChange = (e) => {
    setBorderColor(e.target.value);
  };

  const handleRadiusChange = (e) => {
    const { id, value } = e.target;
    if (id === 'topLeft') setTopLeftRadius(value);
    else if (id === 'topRight') setTopRightRadius(value);
    else if (id === 'bottomLeft') setBottomLeftRadius(value);
    else if (id === 'bottomRight') setBottomRightRadius(value);
  };

  // If the user adjusts the uniform border-radius slider, set all corners to that value
  const applyUniformBorderRadius = () => {
    setTopLeftRadius(borderRadius);
    setTopRightRadius(borderRadius);
    setBottomLeftRadius(borderRadius);
    setBottomRightRadius(borderRadius);
  };

  // Generate the border CSS string
  const borderCSS = `${borderWidth}px ${borderStyle} ${borderColor}`;
  const borderRadiusCSS = `${topLeftRadius}px ${topRightRadius}px ${bottomLeftRadius}px ${bottomRightRadius}px`;

  // Function to copy the CSS to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(`border: ${borderCSS}; border-radius: ${borderRadiusCSS};`)
      .then(() => {
         toast.success(`Copied`);
      })
      .catch(err => {
          toast.success(`Something went wrong`);
      });
  };

  return (
    <Container className="mt-5">
      <ToastContainer
      position="bottom-right"/>
      <h1 className="text-center mb-5">CSS Border Generator</h1>
      <Row className="gap-4">
        {/* CSS Editor Section */}
        <Col md={4}>
          <h3>CSS Editor</h3>
          <div className="mb-3">
            <label>Border Width: {borderWidth}px</label>
            <input
              id="borderWidth"
              type="range"
              min="1"
              max="196"
              value={borderWidth}
              onChange={handleRangeChange}
              className="form-range"
            />
          </div>
          <div className="mb-3">
            <label>Border Style:</label>
            <Form.Control
              as="select"
              value={borderStyle}
              onChange={handleBorderStyleChange}
            >
              <option value="solid">Solid</option>
              <option value="dashed">Dashed</option>
              <option value="dotted">Dotted</option>
              <option value="double">Double</option>
              <option value="groove">Groove</option>
              <option value="ridge">Ridge</option>
              <option value="inset">Inset</option>
              <option value="outset">Outset</option>
              <option value="none">None</option>
            </Form.Control>
          </div>
          <div className="mb-3">
            <label>Border Color:</label>
            <input
              type="color"
              value={borderColor}
              onChange={handleBorderColorChange}
              className="mx-4"
            />
          </div>
          <div className="mb-3">
            <label>Border Radius (Uniform): {borderRadius}px</label>
            <input
              id="borderRadius"
              type="range"
              min="0"
              max="200"
              value={borderRadius}
              onChange={handleRangeChange}
              className="form-range"
              onMouseUp={applyUniformBorderRadius} // Apply uniform radius on change
            />
          </div>
          {/* Individual Corner Radius */}
          <div>
            <label>Top Left Radius:</label>
            <input
              id="topLeft"
              type="range"
              min="0"
              max="200"
              value={topLeftRadius}
              onChange={handleRadiusChange}
              className="form-range"
            />
          </div>
          <div>
            <label>Top Right Radius:</label>
            <input
              id="topRight"
              type="range"
              min="0"
              max="200"
              value={topRightRadius}
              onChange={handleRadiusChange}
              className="form-range"
            />
          </div>
          <div>
            <label>Bottom Right Radius:</label>
            <input
              id="bottomLeft"
              type="range"
              min="0"
              max="200"
              value={bottomLeftRadius}
              onChange={handleRadiusChange}
              className="form-range"
            />
          </div>
          <div>
            <label>Bottom Left Radius:</label>
            <input
              id="bottomRight"
              type="range"
              min="0"
              max="200"
              value={bottomRightRadius}
              onChange={handleRadiusChange}
              className="form-range"
            />
          </div>
        </Col>

        {/* Generated CSS Section */}
        <Col md={4}>
          <h3>Generated CSS:</h3>
          <textarea
            readOnly
            value={`border: ${borderCSS}; \nborder-radius: ${borderRadiusCSS};`}
            rows="4"
            className="form-control mb-3"
          />
          <Button onClick={copyToClipboard} className="btn btn-primary w-100">
            Copy CSS
          </Button>
        </Col>

        {/* Live Preview Section */}
        <Col md={4} style={{width:"24%"}}>
          <h3>Live Preview:</h3>
          <div
            style={{
              width: '200px',
              height: '200px',
              backgroundColor: '#3498db',
              marginTop: '20px',
              border: borderCSS,
              borderRadius: borderRadiusCSS, // Applies all individual corner values
              transition: 'border 0.3s ease, border-radius 0.3s ease',
            }}
          >
            This is the preview box
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Border;
