"use client"
import Footer from '@/component/Footer';
import React, { useState } from 'react';
import { Button, Col, Container, Row, Card } from 'react-bootstrap';
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

  const resetCSS = () => {
     setHorizontal(10);
     setVertical(10);
     setBlur(15);
     setSpread(0);
     setColor('#000000');
     setInset(false);
      toast.info("CSS code reset")
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
        <Row>
        <Col>
          <h3>CSS Editor</h3>
        </Col>
        <Col> <Button className='w-100 btn btn-dark btn-col' onClick={resetCSS}>Reset</Button></Col>
        </Row>
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
            <Button onClick={()=>{copyToClipboard()}} className='btn btn-primary w-100 btn-col'>Copy CSS</Button>
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

      <Container className='mt-5 pt-5 '>
      <h1 className='text-center mb-3'>Box Shadow: Add Depth and Style to Your Web Designs</h1>
      <p>
        <strong>Box Shadow</strong> is a powerful CSS property that allows you to add shadows to HTML elements. It gives a sense of depth and dimension to flat, boring web designs, enhancing the visual appeal. Whether you're designing buttons, cards, or entire sections, box shadows can make your content pop.
      </p>

      <h2>Why is Box Shadow Important?</h2>
      <p>
        Shadows are not just decorative; they serve a purpose. They help users identify layers and distinguish elements from the background. By adding shadows, you mimic the real-world behavior of light and create a natural, intuitive interface for users.
      </p>

      <ul style={{listStyleType:"circle"}}>
        <li>Buttons with shadows appear clickable.</li>
        <li>Cards with shadows look like they are stacked.</li>
        <li>Forms with shadows draw attention.</li>
      </ul>

      <h2>How to Use Box Shadow in CSS</h2>
          <p>The basic syntax of the <code>box-shadow</code> property looks like this:</p>
      <pre>
        <code>
         {`element {
                  box-shadow: offset-x offset-y blur-radius spread-radius color;
                  }`
          }
        </code>
      </pre>

      <p><strong>Here’s a breakdown:</strong></p>
      <ul style={{listStyleType:"circle"}}>
        <li><strong>offset-x</strong>: Horizontal shadow position (positive = right, negative = left).</li>
        <li><strong>offset-y</strong>: Vertical shadow position (positive = down, negative = up).</li>
        <li><strong>blur-radius</strong>: The level of blurriness of the shadow (optional).</li>
        <li><strong>spread-radius</strong>: How much the shadow should expand or shrink (optional).</li>
        <li><strong>color</strong>: The color of the shadow (can include opacity).</li>
      </ul>

      <h3>Examples</h3>
        <Row>  
          <Col className='border-dark border p-3 my-3'>  
          
      <h4>Basic Example</h4>
      <pre>
        <code>
          {`.button {
  width: 100px;
  height: 50px;
  background-color: #007bff;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
}`}
        </code>
      </pre>
      </Col>
      
      <Col className='border-dark border p-3 my-3'>
      <h4>Multiple Shadows</h4>
      <pre>
        <code>
          {`.card {
  box-shadow: 
    2px 2px 5px rgba(0, 0, 0, 0.2), 
    -2px -2px 5px rgba(255, 255, 255, 0.5);
}`}
        </code>
      </pre>
      </Col>
      <Col className='border-dark border p-3 my-3'>
      <h4>Inset Shadows</h4>
      <pre>
        <code>
          {`.panel {
  background-color: #f8f9fa;
  box-shadow: inset 2px 2px 10px rgba(0, 0, 0, 0.1);
}`}
        </code>
      </pre>
      </Col>
      </Row>

      <h3>Tips for Using Box Shadow</h3>
             <ul style={{listStyleType:"circle"}}>
               <li>Use shadows sparingly to avoid clutter.</li>
               <li>Combine shadows with <code>border-radius</code> for smooth, natural effects.</li>
               <li>Always test shadows on different screen sizes and themes (light and dark).</li>
               <li>Use tools like Box Shadow Generators to create perfect shadows effortlessly.</li>
             </ul>

      <h3 className='text-center'>Advanced Techniques</h3>
      <h4 >Soft Shadows</h4>
          <p>Increase the blur-radius and reduce opacity for a subtle effect.</p>

      <h4>3D Effects</h4>
          <p>Use multiple shadows for a layered look.</p>

      <h4>Hover Shadows</h4>
      <pre>
        <code>
          {`.button:hover {
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
}`}
        </code>
      </pre>

      <h3>Common Mistakes to Avoid</h3>
      <ul style={{listStyleType:"circle"}}>
        <li>Overusing shadows can make your design look messy.</li>
        <li>Hard shadows without blur can appear unnatural.</li>
        <li>Poor color choices can clash with the overall theme.</li>
      </ul>

      <h3>Conclusion</h3>
      <p>
        Box Shadow is more than a visual enhancement—it's a tool to guide users and improve the usability of your web design. Experiment with different shadow settings to create interfaces that are both functional and beautiful.
      </p>

      <h2>Example Button with Box Shadow</h2>
              <Button className="button my-4" style={{ boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.5)' }}>
                Hover Over Me
              </Button>

      <h2>Example Card with Multiple Shadows</h2>
              <Card className="card my-4" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2), -2px -2px 5px rgba(255, 255, 255, 0.5)' }}>
                <Card.Body>
                  This card has multiple shadows.
                </Card.Body>
              </Card>
    </Container>
    <Footer/>
    </Container>
  );
};

export default BoxShadow;
