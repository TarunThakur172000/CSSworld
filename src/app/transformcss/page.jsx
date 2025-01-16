"use client"
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
const TransformCss = () => {
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [translateZ, setTranslateZ] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [scaleX, setScaleX] = useState(1);
  const [scaleY, setScaleY] = useState(1);
  const [skewX, setSkewX] = useState(0);
  const [skewY, setSkewY] = useState(0);
  const [perspective, setPerspective] = useState(500);

  const generateTransformCSS = () => {
    let transformString = "";

    if (perspective) transformString += `perspective(${perspective}px) `;
    if (translateX || translateY || translateZ)
      transformString += `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) `;
    if (rotate) transformString += `rotate(${rotate}deg) `;
    if (rotateX) transformString += `rotateX(${rotateX}deg) `;
    if (rotateY) transformString += `rotateY(${rotateY}deg) `;
    if (scaleX !== 1 || scaleY !== 1) transformString += `scale(${scaleX}, ${scaleY}) `;
    if (skewX) transformString += `skewX(${skewX}deg) `;
    if (skewY) transformString += `skewY(${skewY}deg) `;

    return transformString.trim();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`transform: ${generateTransformCSS()};`).then(() => {
      toast.success(`Copied: ${generateTransformCSS()}`);
    });
  };

  return (
    <Container className="mt-5" style={{overflow:"hidden"}}>
        <ToastContainer
            position="bottom-right"/>
      <h1 className="text-center mb-5">CSS Transform Generator</h1>
      <Row className="gap-4">
          <h3>Transform Editor</h3>
        <Col md={4} style={{overflowY:"scroll",height:"50vh"}}>

          <Form.Group className="mb-3">
            <Form.Label>Translate X (px):</Form.Label>
            <Form.Control
              type="range"
              min="-500"
              max="500"
              value={translateX}
              onChange={(e) => setTranslateX(Number(e.target.value))}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Translate Y (px):</Form.Label>
            <Form.Control
              type="range"
              min="-500"
              max="500"
              value={translateY}
              onChange={(e) => setTranslateY(Number(e.target.value))}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Translate Z (px):</Form.Label>
            <Form.Control
              type="range"
              min="-500"
              max="500"
              value={translateZ}
              onChange={(e) => setTranslateZ(Number(e.target.value))}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Rotate (deg):</Form.Label>
            <Form.Control
              type="range"
              min="0"
              max="360"
              value={rotate}
              onChange={(e) => setRotate(Number(e.target.value))}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Rotate X (deg):</Form.Label>
            <Form.Control
              type="range"
              min="0"
              max="360"
              value={rotateX}
              onChange={(e) => setRotateX(Number(e.target.value))}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Rotate Y (deg):</Form.Label>
            <Form.Control
              type="range"
              min="0"
              max="360"
              value={rotateY}
              onChange={(e) => setRotateY(Number(e.target.value))}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Scale X:</Form.Label>
            <Form.Control
              type="range"
              min="0.1"
              max="3"
              step="0.1"
              value={scaleX}
              onChange={(e) => setScaleX(Number(e.target.value))}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Scale Y:</Form.Label>
            <Form.Control
              type="range"
              min="0.1"
              max="3"
              step="0.1"
              value={scaleY}
              onChange={(e) => setScaleY(Number(e.target.value))}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Skew X (deg):</Form.Label>
            <Form.Control
              type="range"
              min="-90"
              max="90"
              value={skewX}
              onChange={(e) => setSkewX(Number(e.target.value))}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Skew Y (deg):</Form.Label>
            <Form.Control
              type="range"
              min="-90"
              max="90"
              value={skewY}
              onChange={(e) => setSkewY(Number(e.target.value))}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Perspective (px):</Form.Label>
            <Form.Control
              type="range"
              min="0"
              max="1000"
              value={perspective}
              onChange={(e) => setPerspective(Number(e.target.value))}
            />
          </Form.Group>

         
        </Col>

        <Col md={4}>
          <h3>Generated CSS:</h3>
          <textarea
            readOnly
            value={`transform: ${generateTransformCSS()};`}
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
              height: "300px",
              marginTop: "20px",
              background: "#007bff",
              transform: generateTransformCSS(),
              transition: "transform 0.3s ease",
            }}
          />
        </Col>
      </Row>
      <Container className='mt-5 pt-5'>
      <h1 className='text-center mb-3'>CSS Transform: Enhance Your Web Designs with Dynamic Effects</h1>
      <p>
        The <strong>CSS Transform</strong> property allows you to apply various transformations to HTML elements. You can rotate, scale, skew, and move elements in two or three dimensions, making it a powerful tool for creating dynamic and interactive web designs.
      </p>

      <h2>Why is CSS Transform Important?</h2>
      <p>
        CSS transforms are crucial for creating modern, engaging user experiences. By applying transforms, you can animate elements, adjust layouts, and create a more interactive environment for users. From rotating images to scaling buttons, transforms can elevate the design of your website.
      </p>

      <ul style={{ listStyleType: "circle" }}>
        <li>Transforms make elements responsive and interactive.</li>
        <li>They help in creating animations and smooth transitions.</li>
        <li>Transforms are essential for creating visually appealing effects, such as rotating or flipping elements.</li>
      </ul>

      <h2>How to Use CSS Transform</h2>
      <p>The basic syntax for the <code>transform</code> property is as follows:</p>
      <pre>
        <code>
          {`element {
  transform: transform-function;
}`}
        </code>
      </pre>

      <p><strong>Here’s a breakdown of the most commonly used transform functions:</strong></p>
      <ul style={{ listStyleType: "circle" }}>
        <li><strong>rotate()</strong>: Rotates an element by a specified degree. (e.g., <code>rotate(45deg)</code>)</li>
        <li><strong>scale()</strong>: Scales an element by a factor (e.g., <code>scale(1.5)</code> increases size by 1.5 times).</li>
        <li><strong>translate()</strong>: Moves an element along the X, Y, or Z axis (e.g., <code>translate(50px, 100px)</code>).</li>
        <li><strong>skew()</strong>: Skews an element along the X or Y axis (e.g., <code>skew(20deg, 10deg)</code>).</li>
        <li><strong>matrix()</strong>: Applies a 2D transformation using a matrix of values (advanced use).</li>
      </ul>

      <h3>Examples</h3>
      <Row>
        <Col className='border-dark border p-3 my-3'>
          <h4>Rotate Example</h4>
          <pre>
            <code>
              {`.box {
  width: 100px;
  height: 100px;
  background-color: #ff5733;
  transform: rotate(45deg);
}`}
            </code>
          </pre>
        </Col>

        <Col className='border-dark border p-3 my-3'>
          <h4>Scale Example</h4>
          <pre>
            <code>
              {`.button {
  width: 100px;
  height: 50px;
  background-color: #007bff;
  transform: scale(1.2);
}`}
            </code>
          </pre>
        </Col>

        <Col className='border-dark border p-3 my-3'>
          <h4>Translate Example</h4>
          <pre>
            <code>
              {`.card {
  background-color: #f8f9fa;
  transform: translate(50px, 100px);
}`}
            </code>
          </pre>
        </Col>
      </Row>

      <h3>Advanced CSS Transform Techniques</h3>
      <h4>Combining Multiple Transforms</h4>
      <p>Transformations can be combined to apply more than one effect at a time:</p>
      <pre>
        <code>
          {`.box {
  transform: rotate(45deg) scale(1.5) translate(50px, 100px);
}`}
        </code>
      </pre>

      <h4>3D Transforms</h4>
      <p>CSS transforms can also work in three dimensions. The <code>perspective</code> property is used in combination with <code>transform</code> to create 3D effects:</p>
      <pre>
        <code>
          {`.box {
  perspective: 500px;
  transform: rotateY(45deg);
}`}
        </code>
      </pre>

      <h4>Transform Origin</h4>
      <p>The <code>transform-origin</code> property specifies the point around which an element is transformed (e.g., rotating or scaling):</p>
      <pre>
        <code>
          {`.box {
  transform-origin: top left;
  transform: rotate(45deg);
}`}
        </code>
      </pre>

      <h3>CSS Transform Animations</h3>
      <h4>Animating Transforms</h4>
      <p>Transforms can be animated using the <code>@keyframes</code> rule. Here’s an example of a rotating element:</p>
      <pre>
        <code>
          {`@keyframes rotateAnimation {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.box {
  animation: rotateAnimation 2s infinite;
}`}
        </code>
      </pre>

      <h3>Tips for Using CSS Transform</h3>
      <ul style={{ listStyleType: "circle" }}>
        <li>Use transforms for smooth animations and transitions.</li>
        <li>Combine transform functions to create more complex effects.</li>
        <li>Always consider performance when using 3D transforms on multiple elements.</li>
        <li>Make sure to test transforms on different screen sizes to ensure proper display.</li>
      </ul>

      <h3>Common Mistakes to Avoid</h3>
      <ul style={{ listStyleType: "circle" }}>
        <li>Overusing 3D transforms can impact performance and cause lag.</li>
        <li>Combining too many transform functions may lead to unexpected results.</li>
        <li>Using transforms without considering the layout may break the flow of the page.</li>
      </ul>

      <h3>Conclusion</h3>
      <p>
        The CSS Transform property is an essential tool for creating dynamic, engaging web designs. By rotating, scaling, translating, and skewing elements, you can add interactivity and modern flair to your websites. Use transforms thoughtfully to enhance user experience and elevate the overall aesthetic of your designs.
      </p>

      <h2>Example Button with Transform</h2>
      <Button className="button my-4" style={{ transform: 'scale(1.2)' }}>
        Hover to Scale
      </Button>

      <h2>Example Card with Rotation</h2>
      <Card className="card my-4 w-20" style={{ transform: 'rotate(-45deg)' }}>
        <Card.Body>
          rotated by 45 degrees.
        </Card.Body>
      </Card>

      <h2>Example Box with Multiple Transforms</h2>
      <div className="box p-4 w-20" style={{ transform: 'rotate(-45deg) scale(1.5) ' }}>
        rotated, scaled, and translated.
      </div>
    </Container>
    </Container>
  );
};

export default TransformCss;
