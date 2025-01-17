"use client"
import React, { useState } from "react";
import { Container, Row, Col, Form,Button } from "react-bootstrap";
import img from '../res/pic.jpg'
import { ToastContainer, toast } from "react-toastify";

const ImageFilterGenerator = () => {
  const [filters, setFilters] = useState({
    brightness: 100,
    contrast: 100,
    saturation: 100,
    hueRotate: 0,
    blur: 0,
    invert: 0,
    grayscale: 0,
    sepia: 0,
  });

  const [shadow, setShadow] = useState({
    offsetX: 0,
    offsetY: 0,
    blur: 5,
    spread: 0,
    color: "#000000",
  });

  const resetCSS = () => {
    setFilters({
      brightness: 100,
      contrast: 100,
      saturation: 100,
      hueRotate: 0,
      blur: 0,
      invert: 0,
      grayscale: 0,
      sepia: 0,
    });
  
    setShadow({
      offsetX: 0,
      offsetY: 0,
      blur: 5,
      spread: 0,
      color: "#000000",
    });
    toast.info("CSS code reset");
  };
  

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  const handleShadowChange = (e) => {
    const { name, value } = e.target;
    setShadow((prev) => ({
      ...prev,
      [name]: name === "color" ? value : Number(value),
    }));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`filter: ${filterStyle};\nbox-shadow: ${dropShadow};`).then(() => {
       toast.success(`Copied`);
    });
  };

  const filterStyle = `
    brightness(${filters.brightness}%) 
    contrast(${filters.contrast}%) 
    saturate(${filters.saturation}%) 
    hue-rotate(${filters.hueRotate}deg) 
    blur(${filters.blur}px) 
    invert(${filters.invert}%) 
    grayscale(${filters.grayscale}%) 
    sepia(${filters.sepia}%)
  `;

  const dropShadow = `${shadow.offsetX}px ${shadow.offsetY}px ${shadow.blur}px ${shadow.spread}px ${shadow.color}`;

  return (
    <Container className="mt-5">
        <ToastContainer
            position="bottom-right"/>

            <Row>
                <Col>
                    <h1 className="text-center mb-4">Image Filter</h1>
                </Col>
                <Col> 
                    <Button className='w-100 btn btn-dark btn-col' onClick={resetCSS}>Reset</Button>
                </Col>
            </Row>
      <Row>
        {/* Filters Section */}
        <Col md={4}>
          <Form>
            {/* Brightness */}
            <Form.Group className="mb-3">
              <Form.Label>Brightness (%)</Form.Label>
              <Form.Control
                type="range"
                name="brightness"
                min="0"
                max="200"
                value={filters.brightness}
                onChange={handleFilterChange}
              />
              <Form.Text>{`Brightness: ${filters.brightness}%`}</Form.Text>
            </Form.Group>

            {/* Contrast */}
            <Form.Group className="mb-3">
              <Form.Label>Contrast (%)</Form.Label>
              <Form.Control
                type="range"
                name="contrast"
                min="0"
                max="200"
                value={filters.contrast}
                onChange={handleFilterChange}
              />
              <Form.Text>{`Contrast: ${filters.contrast}%`}</Form.Text>
            </Form.Group>

            {/* Saturation */}
            <Form.Group className="mb-3">
              <Form.Label>Saturation (%)</Form.Label>
              <Form.Control
                type="range"
                name="saturation"
                min="0"
                max="200"
                value={filters.saturation}
                onChange={handleFilterChange}
              />
              <Form.Text>{`Saturation: ${filters.saturation}%`}</Form.Text>
            </Form.Group>

            {/* Hue Rotate */}
            <Form.Group className="mb-3">
              <Form.Label>Hue Rotate (deg)</Form.Label>
              <Form.Control
                type="range"
                name="hueRotate"
                min="0"
                max="360"
                value={filters.hueRotate}
                onChange={handleFilterChange}
              />
              <Form.Text>{`Hue Rotate: ${filters.hueRotate}°`}</Form.Text>
            </Form.Group>

            {/* Blur */}
            <Form.Group className="mb-3">
              <Form.Label>Blur (px)</Form.Label>
              <Form.Control
                type="range"
                name="blur"
                min="0"
                max="20"
                value={filters.blur}
                onChange={handleFilterChange}
              />
              <Form.Text>{`Blur: ${filters.blur}px`}</Form.Text>
            </Form.Group>

             {/* invert */}
             <Form.Group className="mb-3">
              <Form.Label>invert (px)</Form.Label>
              <Form.Control
                type="range"
                name="invert"
                min="0"
                max="20"
                value={filters.invert}
                onChange={handleFilterChange}
              />
              <Form.Text>{`Blur: ${filters.blur}px`}</Form.Text>
            </Form.Group>

            {/* grayScale */}
            <Form.Group className="mb-3">
              <Form.Label>grayscale (px)</Form.Label>
              <Form.Control
                type="range"
                name="grayscale"
                min="0"
                max="20"
                value={filters.grayscale}
                onChange={handleFilterChange}
              />
              <Form.Text>{`Blur: ${filters.blur}px`}</Form.Text>
            </Form.Group>

             {/* sepia */}
             <Form.Group className="mb-3">
              <Form.Label>sepia (px)</Form.Label>
              <Form.Control
                type="range"
                name="sepia"
                min="0"
                max="20"
                value={filters.sepia}
                onChange={handleFilterChange}
              />
              <Form.Text>{`Blur: ${filters.blur}px`}</Form.Text>
            </Form.Group>
            
          </Form>
        </Col>

        {/* Drop Shadow Section */}
        <Col md={4}>
          <Form>
            <h4>Drop Shadow</h4>

            {/* Offset X */}
            <Form.Group className="mb-3">
              <Form.Label>Offset X (px)</Form.Label>
              <Form.Control
                type="range"
                name="offsetX"
                min="-50"
                max="50"
                value={shadow.offsetX}
                onChange={handleShadowChange}
              />
              <Form.Text>{`Offset X: ${shadow.offsetX}px`}</Form.Text>
            </Form.Group>

            {/* Offset Y */}
            <Form.Group className="mb-3">
              <Form.Label>Offset Y (px)</Form.Label>
              <Form.Control
                type="range"
                name="offsetY"
                min="-50"
                max="50"
                value={shadow.offsetY}
                onChange={handleShadowChange}
              />
              <Form.Text>{`Offset Y: ${shadow.offsetY}px`}</Form.Text>
            </Form.Group>

            {/* Blur */}
            <Form.Group className="mb-3">
              <Form.Label>Blur (px)</Form.Label>
              <Form.Control
                type="range"
                name="blur"
                min="0"
                max="50"
                value={shadow.blur}
                onChange={handleShadowChange}
              />
              <Form.Text>{`Blur: ${shadow.blur}px`}</Form.Text>
            </Form.Group>

            {/* Spread */}
            <Form.Group className="mb-3">
              <Form.Label>Spread (px)</Form.Label>
              <Form.Control
                type="range"
                name="spread"
                min="0"
                max="20"
                value={shadow.spread}
                onChange={handleShadowChange}
              />
              <Form.Text>{`Spread: ${shadow.spread}px`}</Form.Text>
            </Form.Group>

            {/* Shadow Color */}
            <Form.Group className="mb-3">
              <Form.Label>Shadow Color</Form.Label>
              <Form.Control
                type="color"
                name="color"
                value={shadow.color}
                onChange={handleShadowChange}
              />
              <Form.Text>{`Color: ${shadow.color}`}</Form.Text>
            </Form.Group>
          </Form>
        </Col>

        {/* Preview Section */}
        <Col md={4}>
          <h3>Preview</h3>
          <div
            style={{
              width: "100%",
              height: "400px",
              background: `url(${img.src}) center/cover`,
              filter: filterStyle,
              boxShadow: dropShadow,
              borderRadius: "8px",
            }}
          ></div>
          <p className="mt-3">
            <strong>CSS Output:</strong>
          </p>
          <pre
            style={{
              background: "#f8f9fa",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
          >
            {`filter: ${filterStyle};\nbox-shadow: ${dropShadow};`}
          </pre>
          <Button onClick={copyToClipboard} className="btn btn-primary w-100 btn-col">
            Copy CSS
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ImageFilterGenerator;
