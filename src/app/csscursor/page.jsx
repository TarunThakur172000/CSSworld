"use client"
import React, { useState } from 'react';
import { Col, Container, Row, Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
const CssCursor = () => {
  const [cursorType, setCursorType] = useState('default');
  const [cursorImage, setCursorImage] = useState(null);
  const [cursorSize, setCursorSize] = useState(32);
  
  // Handle changes in cursor type dropdown
  const handleCursorTypeChange = (e) => {
    setCursorType(e.target.value);
  };

  // Handle changes in custom image file input
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCursorImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle changes in cursor size range input
  const handleCursorSizeChange = (e) => {
    setCursorSize(e.target.value);
  };

  // Generate the cursor CSS string
  const cursorCSS = cursorImage
    ? `url(${cursorImage}) ${cursorSize}px ${cursorSize}px, ${cursorType}`
    : cursorType;

  // Function to copy the CSS to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(`cursor: ${cursorCSS};`)
      .then(() => {
          toast.success(`Copied`);
      })
      .catch(err => {
          toast.error(`Something went wrong`);
      });
  };

  return (
    <Container className="mt-5">
        <ToastContainer
            position="bottom-right"/>
      <h1 className="text-center mb-5">CSS Cursor Generator</h1>
      <Row className="gap-4">
        {/* CSS Editor Section */}
        <Col md={4}>
          <h3>CSS Editor</h3>
          <div className="mb-3">
            <label>Cursor Type:</label>
            <Form.Control
              as="select"
              value={cursorType}
              onChange={handleCursorTypeChange}
              className='border border-4 '
            >
                  <option value="default" >Default</option>
              <option value="pointer">Pointer</option>
              <option value="crosshair">Crosshair</option>
              <option value="move">Move</option>
              <option value="text">Text</option>
              <option value="wait">Wait</option>
              <option value="help">Help</option>
              <option value="not-allowed">Not Allowed</option>
              <option value="grab">Grab</option>
              <option value="grabbing">Grabbing</option>
              <option value="all-scroll">All Scroll</option>
              <option value="col-resize">Column Resize</option>
              <option value="row-resize">Row Resize</option>
              <option value="n-resize">North Resize</option>
              <option value="e-resize">East Resize</option>
              <option value="s-resize">South Resize</option>
              <option value="w-resize">West Resize</option>
              <option value="ne-resize">Northeast Resize</option>
              <option value="nw-resize">Northwest Resize</option>
              <option value="se-resize">Southeast Resize</option>
              <option value="sw-resize">Southwest Resize</option>
              <option value="zoom-in">Zoom In</option>
              <option value="zoom-out">Zoom Out</option>
              <option value="none">None</option>
            </Form.Control>
          </div>
          
         
        </Col>

        {/* Generated CSS Section */}
        <Col md={4}>
          <h3>Generated CSS:</h3>
          <textarea
            readOnly
            value={`cursor: ${cursorCSS};`}
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
              width: '300px',
              height: '200px',
              backgroundColor: '#3498db',
              marginTop: '20px',
              cursor: cursorCSS,
              transition: 'cursor 0.3s ease',
            }}
          >
            Hover over me to see the cursor change!
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CssCursor;
