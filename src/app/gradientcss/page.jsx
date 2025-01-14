"use client"
import React, { useState } from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import GradientGallery from "./GradientGallery";
import { ToastContainer, toast } from "react-toastify";
const GradientGenerator = () => {
  const [colors, setColors] = useState([ "#9B4D97","#4C2A84"]); // Initial two colors
  const [direction, setDirection] = useState("to right");
  const [gradientType, setGradientType] = useState("linear");
  const [angle, setAngle] = useState(45);
  const [repeat, setRepeat] = useState(false);
  const [colorStops, setColorStops] = useState([0, 50]); // Color stops
  const [shape, setShape] = useState("circle"); // For radial gradients
  const [size, setSize] = useState("farthest-corner"); // For radial gradients
  const [position, setPosition] = useState("center"); // Starting position for radial/conic gradients

  const addColor = () => {
    setColors([...colors, "#000000"]);
    setColorStops([...colorStops, Math.min(100, colorStops[colorStops.length - 1] + 10)]);
  };

  const removeColor = (index) => {
    setColors(colors.filter((_, i) => i !== index));
    setColorStops(colorStops.filter((_, i) => i !== index));
  };

  const handleColorChange = (e, index) => {
    const updatedColors = [...colors];
    updatedColors[index] = e.target.value;
    setColors(updatedColors);
  };

  const handleStopChange = (e, index) => {
    const updatedStops = [...colorStops];
    updatedStops[index] = Number(e.target.value);
    setColorStops(updatedStops);
  };

  const generateGradientCSS = () => {
    let gradientString = "";

    if (gradientType === "linear") {
      gradientString = `linear-gradient(${direction === "angle" ? angle + "deg" : direction}, `;
    } else if (gradientType === "radial") {
      gradientString = `radial-gradient( ${shape} ${size} at ${position}, `;
    } else if (gradientType === "conic") {
      gradientString = `conic-gradient(from ${angle}deg at ${position}, `;
    }

    gradientString += colors
      .map((color, index) => `${color} ${colorStops[index]}%`)
      .join(", ");

    gradientString += ")";
    
    if (repeat) gradientString += " repeat";

    return gradientString;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateGradientCSS()).then(() => {
      toast.success(`Copied`);
    });
  };

  return (
    <Container className="mt-5">
      <ToastContainer
                  position="bottom-right"/>
      <h1 className="text-center mb-5">CSS Gradient Generator</h1>
      <Row className="gap-4">
        <Col md={4}>
          <h3>Gradient Editor</h3>
          <div className="mb-3">
            <label>Gradient Type:</label>
            <Form.Control
              as="select"
              value={gradientType}
              onChange={(e) => setGradientType(e.target.value)}
            >
              <option value="linear">Linear</option>
              <option value="radial">Radial</option>
              <option value="conic">Conic</option>
            </Form.Control>
          </div>

          {gradientType === "linear" && (
            <div className="mb-3">
              <label>Direction:</label>
              <Form.Control
                as="select"
                value={direction}
                onChange={(e) => setDirection(e.target.value)}
              >
                <option value="to right">Left to Right</option>
                <option value="to left">Right to Left</option>
                <option value="to top">Bottom to Top</option>
                <option value="to bottom">Top to Bottom</option>
                <option value="angle">Angle (in degrees)</option>
              </Form.Control>
              {direction === "angle" && (
                <div className="mt-2">
                  <label>Angle:</label>
                  <CircularAnglePicker angle={angle} setAngle={setAngle} />
                </div>
              )}
            </div>
          )}

          {gradientType === "radial" && (
            <>
              <div className="mb-3">
                <label>Shape:</label>
                <Form.Control
                  as="select"
                  value={shape}
                  onChange={(e) => setShape(e.target.value)}
                >
                  <option value="circle">Circle</option>
                  <option value="ellipse">Ellipse</option>
                </Form.Control>
              </div>
              <div className="mb-3">
                <label>Size:</label>
                <Form.Control
                  as="select"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                >
                  <option value="farthest-corner">Farthest Corner</option>
                  <option value="closest-corner">Closest Corner</option>
                  <option value="farthest-side">Farthest Side</option>
                  <option value="closest-side">Closest Side</option>
                </Form.Control>
              </div>
              <div className="mb-3">
                <label>Position:</label>
                <Form.Control
                  as="select"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                >
                  <option value="center">Center</option>
                  <option value="top left">Top Left</option>
                  <option value="top right">Top Right</option>
                  <option value="bottom left">Bottom Left</option>
                  <option value="bottom right">Bottom Right</option>
                </Form.Control>
               
                
              </div>
            </>
          )}

          {gradientType === "conic" && (
            <div className="mb-3">
              <label>Position:</label>
              <Form.Control
                as="select"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              >
                <option value="center">Center</option>
                <option value="top left">Top Left</option>
                <option value="top right">Top Right</option>
                <option value="bottom left">Bottom Left</option>
                <option value="bottom right">Bottom Right</option>
              </Form.Control>
              <CircularAnglePicker angle={angle} setAngle={setAngle} />
            </div>
          )}

{colors.map((color, index) => (
  <div key={index} className="mb-3">
    <label>Color {index + 1}:</label>
    <div className="d-flex align-items-center">
      <input
        type="color"
        value={color}
        onChange={(e) => handleColorChange(e, index)}
        className="form-control"
        style={{ width: "60px" }}
      />
      <input
        type="range"
        min="0"
        max="100"
        value={colorStops[index]}
        onChange={(e) => handleStopChange(e, index)}
        className="form-range"
        style={{ marginLeft: "10px", width: "100px" }}
      />
      <span style={{ marginLeft: "10px", width: "30px", textAlign: "center" }}>
        {colorStops[index]}%
      </span>
      <Button
        variant="danger"
        onClick={() => removeColor(index)}
        style={{ marginLeft: "10px" }}
        disabled={colors.length === 2}
      >
        Remove
      </Button>
    </div>
  </div>
))}


          <Button onClick={addColor} className="btn btn-secondary mb-3">
            Add Color
          </Button>
        </Col>

        <Col md={4} >
          <h3>Generated CSS:</h3>
          <textarea
            readOnly
            value={generateGradientCSS()}
            rows="6"
            className="form-control mb-3"
          />
          <Button onClick={copyToClipboard} className="btn btn-primary w-100">
            Copy CSS
          </Button>
        </Col>

        <Col md={4} style={{width:"24%"}}>
          <h3>Live Preview:</h3>
          <div
            style={{
              width: "300px",
              height: "200px",
              marginTop: "20px",
              background: generateGradientCSS(),
              transition: "background 0.3s ease",
            }}
          />
        </Col>
      </Row>
      <GradientGallery/>
    </Container>
  );
};

export default GradientGenerator;

const CircularAnglePicker = ({ angle, setAngle }) => {
  const radius = 50;
  const [isDragging, setIsDragging] = useState(false);

  const center = {
    x: radius,
    y: radius,
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const rect = e.target.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - center.x;
    const mouseY = e.clientY - rect.top - center.y;

    const calculatedAngle = Math.atan2(mouseY, mouseX) * (180 / Math.PI) + 90;
    setAngle(calculatedAngle < 0 ? 360 + calculatedAngle : calculatedAngle);
  };

  return (
    <div
      style={{
        width: `${2 * radius}px`,
        height: `${2 * radius}px`,
        position: "relative",
        margin: "20px auto",
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <svg
        width={2 * radius}
        height={2 * radius}
        onMouseDown={handleMouseDown}
        style={{ cursor: "pointer" }}
      >
        <circle
          cx={radius}
          cy={radius}
          r={radius - 10}
          fill="#f1f1f1"
          stroke="#ccc"
          strokeWidth="2"
        />
        <line
          x1={center.x}
          y1={center.y}
          x2={center.x + radius * 0.8 * Math.cos((angle - 90) * (Math.PI / 180))}
          y2={center.y + radius * 0.8 * Math.sin((angle - 90) * (Math.PI / 180))}
          stroke="#007bff"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <strong>Angle: {Math.round(angle)}°</strong>
      </div>
      
    </div>
  );
};
