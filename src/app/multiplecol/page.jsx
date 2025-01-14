"use client"
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
const MultipleColumns = () => {
  const [columnCount, setColumnCount] = useState(1); // Default column count
  const [columnGap, setColumnGap] = useState(20); // Default column gap in pixels
  const [columnRuleStyle, setColumnRuleStyle] = useState("solid"); // Default rule style
  const [columnRuleWidth, setColumnRuleWidth] = useState(2); // Default rule width in pixels
  const [columnRuleColor, setColumnRuleColor] = useState("#000000"); // Default rule color

   // Function to copy the CSS to clipboard
   const copyToClipboard = () => {
    navigator.clipboard.writeText(`column-count: ${columnCount};
column-gap: ${columnGap}px;
column-rule: ${columnRuleWidth}px ${columnRuleStyle} ${columnRuleColor};`)
      .then(() => {
          toast.success(`Copied`);
      })
      .catch(err => {
          toast.error(`Something went wrong`);
      });
  };

  const exampleText = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nulla vel velit finibus 
    pulvinar. Praesent sit amet elit non ligula convallis vehicula. Suspendisse potenti. 
    Maecenas fermentum, libero vel pharetra ultricies, ipsum neque fermentum sapien, et feugiat 
    erat magna ut nunc. Vestibulum at faucibus risus, non facilisis nulla.
  `;

  return (
    <Container className="mt-5">
        <ToastContainer
            position="bottom-right"/>
      <h1 className="text-center mb-4">Column Style Generator</h1>
      <Row>
        {/* Settings Section */}
        <Col md={4}>
          <Form>
            {/* Column Count */}
            <Form.Group className="mb-3">
              <Form.Label>Column Count</Form.Label>
              <Form.Control
                type="range"
                min="1"
                max="5"
                value={columnCount}
                onChange={(e) => setColumnCount(Number(e.target.value))}
              />
            </Form.Group>

            {/* Column Gap */}
            <Form.Group className="mb-3">
              <Form.Label>Column Gap (px)</Form.Label>
              <Form.Control
                type="range"
                min="0"
                value={columnGap}
                onChange={(e) => setColumnGap(Number(e.target.value))}
              />
            </Form.Group>

            {/* Column Rule Style */}
            <Form.Group className="mb-3">
              <Form.Label>Column Rule Style</Form.Label>
              <Form.Control
                as="select"
                value={columnRuleStyle}
                onChange={(e) => setColumnRuleStyle(e.target.value)}
              >
                <option value="none">None</option>
                <option value="solid">Solid</option>
                <option value="dashed">Dashed</option>
                <option value="dotted">Dotted</option>
                <option value="double">Double</option>
                <option value="groove">Groove</option>
                <option value="ridge">Ridge</option>
                <option value="inset">Inset</option>
                <option value="outset">Outset</option>
              </Form.Control>
            </Form.Group>

            {/* Column Rule Width */}
            <Form.Group className="mb-3">
              <Form.Label>Column Rule Width (px)</Form.Label>
              <Form.Control
                type="range"
                min="0"
                value={columnRuleWidth}
                onChange={(e) => setColumnRuleWidth(Number(e.target.value))}
              />
            </Form.Group>

            {/* Column Rule Color */}
            <Form.Group className="mb-3">
              <Form.Label>Column Rule Color</Form.Label>
              <Form.Control
                type="color"
                value={columnRuleColor}
                onChange={(e) => setColumnRuleColor(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Col>

        {/* Preview Section */}
        <Col md={8}>
          <h3>Preview</h3>
          <div
            style={{
              columnCount: columnCount,
              columnGap: `${columnGap}px`,
              columnRuleStyle: columnRuleStyle,
              columnRuleWidth: `${columnRuleWidth}px`,
              columnRuleColor: columnRuleColor,
              padding: "20px",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          >
            {exampleText.repeat(3)}
          </div>
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
{`column-count: ${columnCount};
column-gap: ${columnGap}px;
column-rule: ${columnRuleWidth}px ${columnRuleStyle} ${columnRuleColor};`}
          </pre>
          <Button onClick={copyToClipboard} className="btn btn-primary w-100">
            Copy CSS
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default MultipleColumns;
