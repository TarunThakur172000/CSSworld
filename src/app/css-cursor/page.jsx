"use client"
import React, { useState } from 'react';
import { Col, Container, Row, Button, Form, Card } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
const CssCursor = () => {
  const [cursorType, setCursorType] = useState('default');

  
  // Handle changes in cursor type dropdown
  const handleCursorTypeChange = (e) => {
    setCursorType(e.target.value);
  };

  

  const resetCSS = () => {
       setCursorType('default');
        toast.info("CSS code reset")
      };

 

  // Generate the cursor CSS string
  const cursorCSS = cursorType;

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
         <Row>
                 <Col>
                   <h3>CSS Editor</h3>
                 </Col>
                 <Col> <Button className='w-100 btn btn-dark btn-col' onClick={resetCSS}>Reset</Button></Col>
                 </Row>
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
          <Button onClick={copyToClipboard} className="btn btn-primary w-100 btn-col">
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
      <Container className='mt-5 pt-5'>
      <h1 className='text-center mb-3'>CSS Cursor: Enhance User Interaction with Custom Cursors</h1>
      <p>
        <strong>CSS Cursor</strong> is a property that controls the type of cursor to be displayed when hovering over an element. It helps in guiding the user’s expectations of the interactivity of a particular element, providing a more intuitive and engaging user experience.
      </p>

      <h2>Why is the Cursor Important?</h2>
      <p>
        The cursor indicates to users whether an element is interactive. Using the right cursor type can give users immediate feedback on what actions they can perform, improving usability and the overall feel of the web application.
      </p>

      <ul style={{ listStyleType: "circle" }}>
        <li>Custom cursors can make buttons and links stand out more.</li>
        <li>Different cursor styles help indicate specific interactions, like clicking or dragging.</li>
        <li>A well-designed cursor improves the overall user experience and makes the interface feel responsive.</li>
      </ul>

      <h2>How to Use Cursor in CSS</h2>
      <p>The basic syntax of the <code>cursor</code> property looks like this:</p>
      <pre>
        <code>
          {`element {
  cursor: value;
}`}
        </code>
      </pre>

      <p><strong>Here’s a breakdown:</strong></p>
      <ul style={{ listStyleType: "circle" }}>
        <li><strong>value</strong>: Specifies the type of cursor to display. It can be a predefined keyword, a URL to an image, or other options.</li>
      </ul>

      <h3>Common Cursor Types</h3>
      <ul style={{ listStyleType: "circle" }}>
        <li><code>default</code>: The default cursor (arrow).</li>
        <li><code>pointer</code>: A hand icon (used for clickable items like links and buttons).</li>
        <li><code>crosshair</code>: A crosshair cursor (used for drawing or precise actions).</li>
        <li><code>move</code>: Indicates that the element can be moved.</li>
        <li><code>text</code>: Indicates that the element is text (usually for selectable text).</li>
        <li><code>wait</code>: Indicates that the application is busy (usually a spinning wheel).</li>
      </ul>

      <h3>Examples</h3>
      <Row>
        <Col className='border-dark border p-3 my-3'>
          <h4>Default Cursor</h4>
          <pre>
            <code>
              {`.default-cursor {
  cursor: default;
}`}
            </code>
          </pre>
        </Col>

        <Col className='border-dark border p-3 my-3'>
          <h4>Pointer Cursor</h4>
          <pre>
            <code>
              {`.button {
  cursor: pointer;
}`}
            </code>
          </pre>
        </Col>

        <Col className='border-dark border p-3 my-3'>
          <h4>Move Cursor</h4>
          <pre>
            <code>
              {`.draggable {
  cursor: move;
}`}
            </code>
          </pre>
        </Col>
      </Row>

      <h3>Tips for Using CSS Cursor</h3>
      <ul style={{ listStyleType: "circle" }}>
        <li>Use <code>pointer</code> cursor for clickable items to indicate interactivity.</li>
        <li>Don't overuse custom cursors. Stick to standard ones unless you have a good reason to customize them.</li>
        <li>Test your cursors to make sure they work well on all screen sizes and devices.</li>
        <li>When using custom images as cursors, ensure they are clear and appropriately sized.</li>
      </ul>

      <h3 className='text-center'>Advanced Techniques</h3>
      <h4>Custom Cursors with Images</h4>
      <p>You can use custom images as cursors by providing a URL to an image:</p>
      <pre>
        <code>
          {`.custom-cursor {
  cursor: url('cursor-image.png'), auto;
}`}
        </code>
      </pre>

      <h4>Dynamic Cursors for Interactions</h4>
      <p>Use CSS to dynamically change the cursor type during interactions (e.g., hovering over an editable area).</p>
      <pre>
        <code>
          {`.editable:hover {
  cursor: text;
}`}
        </code>
      </pre>

      <h3>Common Mistakes to Avoid</h3>
      <ul style={{ listStyleType: "circle" }}>
        <li>Don’t use too many different custom cursors, as it can confuse users.</li>
        <li>Ensure that custom cursor images are not too large or too small, which can lead to a poor user experience.</li>
        <li>Always provide a fallback cursor value (like <code>auto</code>) when using custom images.</li>
      </ul>

      <h3>Conclusion</h3>
      <p>
        The <code>cursor</code> property in CSS may seem small, but it plays an essential role in improving the overall user experience. By customizing the cursor appropriately, you guide users through interactive elements and enhance usability. Experiment with different cursor styles to see how they can complement your web design.
      </p>

      <h2>Example Button with Pointer Cursor</h2>
      <Button className="button my-4" style={{ cursor: 'pointer' }}>
        Hover Over Me
      </Button>

      <h2>Example Div with Move Cursor</h2>
      <Card className="card my-4" style={{ cursor: 'move' }}>
        <Card.Body>
          This card has a move cursor for dragging.
        </Card.Body>
      </Card>
    </Container>
    </Container>
  );
};

export default CssCursor;
