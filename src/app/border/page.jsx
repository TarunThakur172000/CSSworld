"use client"
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row, Card } from 'react-bootstrap';
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

      <Container className='mt-5 pt-5'>
      <h1 className='text-center mb-3'>CSS Border: Styling the Edges of Your Elements</h1>
      <p>
        The <strong>CSS Border</strong> property allows you to define the border around an HTML element. It provides an easy way to visually separate content, define areas of a page, and create distinct shapes. Borders can be styled in various ways to suit the design and enhance the user experience.
      </p>

      <h2>Why is the Border Important?</h2>
      <p>
        Borders help to visually delineate areas of a web page. Whether you’re creating a button, card, or section, borders can add definition and structure to your elements. Borders can also enhance the aesthetic appeal of your design, making it look polished and professional.
      </p>

      <ul style={{ listStyleType: "circle" }}>
        <li>Borders define the edges of an element, making it stand out.</li>
        <li>They help organize content and improve readability.</li>
        <li>Using styled borders can add emphasis to important elements, like buttons and forms.</li>
      </ul>

      <h2>How to Use Borders in CSS</h2>
      <p>The basic syntax of the <code>border</code> property looks like this:</p>
      <pre>
        <code>
          {`element {
  border: width style color;
}`}
        </code>
      </pre>

      <p><strong>Here’s a breakdown:</strong></p>
      <ul style={{ listStyleType: "circle" }}>
        <li><strong>width</strong>: Specifies the thickness of the border (e.g., <code>1px</code>, <code>2px</code>, etc.).</li>
        <li><strong>style</strong>: Defines the style of the border (e.g., <code>solid</code>, <code>dashed</code>, <code>dotted</code>, etc.).</li>
        <li><strong>color</strong>: Specifies the color of the border (e.g., <code>red</code>, <code>#000000</code>, etc.).</li>
      </ul>

      <h3>Examples</h3>
      <Row>
        <Col className='border-dark border p-3 my-3'>
          <h4>Solid Border</h4>
          <pre>
            <code>
              {`.box {
  border: 2px solid #007bff;
}`}
            </code>
          </pre>
        </Col>

        <Col className='border-dark border p-3 my-3'>
          <h4>Dashed Border</h4>
          <pre>
            <code>
              {`.card {
  border: 3px dashed #ff5733;
}`}
            </code>
          </pre>
        </Col>

        <Col className='border-dark border p-3 my-3'>
          <h4>Dotted Border</h4>
          <pre>
            <code>
              {`.dotted-box {
  border: 1px dotted #00bcd4;
}`}
            </code>
          </pre>
        </Col>
      </Row>

      <h3>Advanced Border Techniques</h3>
      <h4>Border Radius</h4>
      <p>The <code>border-radius</code> property allows you to create rounded corners for elements:</p>
      <pre>
        <code>
          {`.rounded-box {
  border: 2px solid #007bff;
  border-radius: 10px;
}`}
        </code>
      </pre>

      <h4>Border with Different Sides</h4>
      <p>You can specify different borders for each side of an element:</p>
      <pre>
        <code>
          {`.custom-box {
  border-top: 2px solid #007bff;
  border-right: 3px dashed #ff5733;
  border-bottom: 4px dotted #00bcd4;
  border-left: 1px solid #000000;
}`}
        </code>
      </pre>

      <h3>Tips for Using CSS Border</h3>
      <ul style={{ listStyleType: "circle" }}>
        <li>Use borders sparingly to avoid overwhelming the design.</li>
        <li>Combine <code>border-radius</code> with borders for smooth, modern designs.</li>
        <li>Consider using subtle borders (like <code>1px solid</code>) for elements like inputs or cards.</li>
        <li>Use contrasting border colors to make interactive elements, like buttons, stand out.</li>
      </ul>

      <h3 className='text-center'>Common Mistakes to Avoid</h3>
      <ul style={{ listStyleType: "circle" }}>
        <li>Using heavy borders on small elements can create a cluttered look.</li>
        <li>Inconsistent border styles (mixing dashed, dotted, etc.) can make the design appear unorganized.</li>
        <li>Using too many borders around content can make the layout feel rigid and boxed in.</li>
      </ul>

      <h3>Conclusion</h3>
      <p>
        Borders are a simple but effective way to style HTML elements. Whether you’re using solid, dashed, or dotted borders, they help in defining areas of a page and drawing attention to important elements. Experiment with border styles and <code>border-radius</code> to achieve modern, clean designs that enhance your user interface.
      </p>

      <h2>Example Button with Border</h2>
      <Button className="button my-4" style={{ border: '2px solid #007bff', borderRadius: '5px' }}>
        Click Me
      </Button>

      <h2>Example Card with Dashed Border</h2>
      <Card className="card my-4" style={{ border: '3px dashed #ff5733' }}>
        <Card.Body>
          This card has a dashed border.
        </Card.Body>
      </Card>

      <h2>Example Box without Dotted Border</h2>
      <div className="border border-dark p-4">
        This box has a dotted border.
      </div>
    </Container>
    </Container>
  );
};

export default Border;
