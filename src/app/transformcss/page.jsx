"use client"
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
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
    </Container>
  );
};

export default TransformCss;
