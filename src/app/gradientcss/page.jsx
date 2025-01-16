"use client"
import React, { useState } from "react";
import { Col, Container, Row, Button, Form, Card } from "react-bootstrap";
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
      <Container className='mt-5 pt-5'>
      <h1 className='text-center mb-3'>CSS Gradient: Add Color Transitions to Your Designs</h1>
      <p>
        A <strong>CSS Gradient</strong> is a smooth transition between two or more colors. Instead of using a solid color for the background, gradients offer a more dynamic and visually appealing option. They can be used for backgrounds, borders, buttons, text, and more, enhancing the overall aesthetics of your web design.
      </p>

      <h2>Why are CSS Gradients Important?</h2>
      <p>
        Gradients provide a modern, polished look to your design, creating depth, and interest. Rather than using flat colors, gradients can add a sense of motion or light, giving your web pages a professional, contemporary feel.
      </p>

      <ul style={{ listStyleType: "circle" }}>
        <li>Gradients create a sense of depth and space.</li>
        <li>They can be used as background images or overlays.</li>
        <li>Gradients allow for smooth transitions between colors, creating visually appealing effects.</li>
      </ul>

      <h2>How to Use CSS Gradients</h2>
      <p>The basic syntax for creating a gradient in CSS looks like this:</p>
      <pre>
        <code>
          {`element {
  background: linear-gradient(direction, color-stop1, color-stop2, ...);
}`}
        </code>
      </pre>

      <p><strong>Here’s a breakdown:</strong></p>
      <ul style={{ listStyleType: "circle" }}>
        <li><strong>direction</strong>: Specifies the direction of the gradient (e.g., <code>to right</code>, <code>to bottom</code>, <code>45deg</code>).</li>
        <li><strong>color-stop</strong>: Defines the colors used in the gradient (e.g., <code>red</code>, <code>#ff5733</code>, etc.). You can also specify a position for the color stops (e.g., <code>50%</code>, <code>20%</code>). </li>
      </ul>

      <h3>Examples</h3>
      <Row>
        <Col className='border-dark border p-3 my-3'>
          <h4>Linear Gradient</h4>
          <pre>
            <code>
              {`.box {
  background: linear-gradient(to right, #ff7e5f, #feb47b);
}`}
            </code>
          </pre>
        </Col>

        <Col className='border-dark border p-3 my-3'>
          <h4>Radial Gradient</h4>
          <pre>
            <code>
              {`.card {
  background: radial-gradient(circle, #ff7e5f, #feb47b);
}`}
            </code>
          </pre>
        </Col>

        <Col className='border-dark border p-3 my-3'>
          <h4>Multi-Color Gradient</h4>
          <pre>
            <code>
              {`.button {
  background: linear-gradient(to right, #ff7e5f, #feb47b, #ffcc00);
}`}
            </code>
          </pre>
        </Col>
      </Row>

      <h3>Advanced Gradient Techniques</h3>
      <h4>Gradient Overlays</h4>
      <p>Gradients can be used to overlay colors on top of images for a more vibrant effect:</p>
      <pre>
        <code>
          {`.overlay {
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.3)),
              url('image.jpg');
}`}
        </code>
      </pre>

      <h4>Repeating Gradients</h4>
      <p>You can create repeating gradients by using the <code>repeating-linear-gradient</code> or <code>repeating-radial-gradient</code> functions:</p>
      <pre>
        <code>
          {`.stripes {
  background: repeating-linear-gradient(45deg, #ff7e5f, #feb47b 10%, #ff7e5f 20%);
}`}
        </code>
      </pre>

      <h3>Tips for Using CSS Gradients</h3>
      <ul style={{ listStyleType: "circle" }}>
        <li>Use gradients to create backgrounds with depth and dimension.</li>
        <li>Pair gradients with other CSS effects, like shadows or animations, for an eye-catching design.</li>
        <li>Experiment with different gradient directions to create interesting visual effects.</li>
        <li>Test gradients on different screen sizes to ensure the colors and effects are visually balanced.</li>
      </ul>

      <h3 className='text-center'>Common Mistakes to Avoid</h3>
      <ul style={{ listStyleType: "circle" }}>
        <li>Using too many gradient colors can make your design look cluttered.</li>
        <li>Overusing gradients may distract from the content itself.</li>
        <li>Using gradients with too much contrast can make text or other content hard to read.</li>
      </ul>

      <h3>Conclusion</h3>
      <p>
        CSS Gradients are a powerful tool for adding dynamic color transitions to your web design. By using linear and radial gradients, you can create visually appealing backgrounds, buttons, and more. Experiment with different gradient types and color combinations to find the right look for your website.
      </p>

      <h2>Example Button with Gradient</h2>
      <Button className="button my-4" style={{ background: 'linear-gradient(to right, #ff7e5f, #feb47b)', border: 'none' }}>
        Hover Over Me
      </Button>

      <h2>Example Card with Radial Gradient</h2>
      <Card className="card my-4" style={{ background: 'radial-gradient(circle, #ff7e5f, #feb47b)' }}>
        <Card.Body>
          This card has a radial gradient background.
        </Card.Body>
      </Card>

      
    </Container>
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
