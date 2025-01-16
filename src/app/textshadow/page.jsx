"use client"
import React, { useState } from 'react';
import { Col, Container, Row, Button, Card } from 'react-bootstrap';
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

      <Container className='mt-5 pt-5'>
      <h1 className='text-center mb-3'>Text Shadow: Add Depth and Style to Your Text</h1>
      <p>
        <strong>Text Shadow</strong> is a CSS property that allows you to add shadows to text elements. This property adds depth and can make your text stand out on web pages, enhancing readability and aesthetic appeal.
      </p>

      <h2>Why is Text Shadow Important?</h2>
      <p>
        Just like with box shadows, text shadows help distinguish text from its background and create a more dynamic, attractive look. When used correctly, text shadows can make headings, buttons, and links pop.
      </p>

      <ul style={{ listStyleType: "circle" }}>
        <li>Text with shadows appears more pronounced and visually appealing.</li>
        <li>Text shadows help improve text visibility against varying backgrounds.</li>
        <li>Subtle text shadows can make text look like it’s floating or glowing.</li>
      </ul>

      <h2>How to Use Text Shadow in CSS</h2>
      <p>The basic syntax of the <code>text-shadow</code> property looks like this:</p>
      <pre>
        <code>
          {`element {
  text-shadow: offset-x offset-y blur-radius color;
}`}
        </code>
      </pre>

      <p><strong>Here’s a breakdown:</strong></p>
      <ul style={{ listStyleType: "circle" }}>
        <li><strong>offset-x</strong>: Horizontal shadow position (positive = right, negative = left).</li>
        <li><strong>offset-y</strong>: Vertical shadow position (positive = down, negative = up).</li>
        <li><strong>blur-radius</strong>: The level of blurriness of the shadow (optional).</li>
        <li><strong>color</strong>: The color of the shadow (can include opacity).</li>
      </ul>

      <h3>Examples</h3>
      <Row>
        <Col className='border-dark border p-3 my-3'>
          <h4>Basic Example</h4>
          <pre>
            <code>
              {`.heading {
  font-size: 36px;
  color: #333;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}`}
            </code>
          </pre>
        </Col>

        <Col className='border-dark border p-3 my-3'>
          <h4>Multiple Shadows</h4>
          <pre>
            <code>
              {`.title {
  font-size: 48px;
  color: #fff;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4), -3px -3px 5px rgba(255, 255, 255, 0.4);
}`}
            </code>
          </pre>
        </Col>

        <Col className='border-dark border p-3 my-3'>
          <h4>Glowing Text Shadow</h4>
          <pre>
            <code>
              {`.glow {
  font-size: 40px;
  color: #0ff;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}`}
            </code>
          </pre>
        </Col>
      </Row>

      <h3>Tips for Using Text Shadow</h3>
      <ul style={{ listStyleType: "circle" }}>
        <li>Use text shadows sparingly to avoid distracting from the content.</li>
        <li>Experiment with different blur-radius and colors for glowing effects.</li>
        <li>Consider accessibility; text shadows can help with readability but should not overpower the content.</li>
        <li>Use lighter shadows for a subtle effect and darker shadows for stronger emphasis.</li>
      </ul>

      <h3 className='text-center'>Advanced Techniques</h3>
      <h4>Soft Shadows</h4>
      <p>Increase the blur-radius and reduce opacity for a gentle shadow effect that doesn’t overpower the text.</p>

      <h4>3D Text Effects</h4>
      <p>Layer multiple shadows to create a 3D-like effect, making text appear to have more depth.</p>

      <h4>Hover Effects</h4>
      <pre>
        <code>
          {`.button:hover {
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
}`}
        </code>
      </pre>

      <h3>Common Mistakes to Avoid</h3>
      <ul style={{ listStyleType: "circle" }}>
        <li>Using too many shadows can make the text hard to read.</li>
        <li>Overly large or blurred shadows can lead to visual clutter.</li>
        <li>Inconsistent shadow colors can make the design look disjointed.</li>
      </ul>

      <h3>Conclusion</h3>
      <p>
        Text Shadow is a versatile CSS tool that can bring your text to life. From subtle enhancements to bold, glowing effects, text shadows can dramatically improve the aesthetics of your web design. Always test your text shadow designs to ensure readability and balance.
      </p>

      <h2>Example Button with Text Shadow</h2>
      <Button className="button my-4" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' }}>
        Hover Over Me
      </Button>

      <h2>Example Heading with Multiple Shadows</h2>
      <Card className="card my-4" style={{ textShadow: '3px 3px 5px rgba(0, 0, 0, 0.4), -3px -3px 5px rgba(255, 255, 255, 0.4)' }}>
        <Card.Body>
          This heading has multiple shadows.
        </Card.Body>
      </Card>
    </Container>

    </Container>
  );
};

export default TextShadow;
