"use client";
import React from "react";
import { Container, Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { colorPalettes } from "./colorPalettes";

const ColorPaletteGallery = (props) => {
  const [palletsCount, setPalletsCount] = React.useState(colorPalettes.length);
  
  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color).then(() => {
      toast.success(`Copied: ${color}`);
    });
  };

  return (
    <Container className="mt-5">

        <ToastContainer
            position="bottom-right"/>
      <h1 className="text-center mb-4">Color Palette Gallery</h1>
      <Row>
        {colorPalettes.map((palette, index) => (
          <Col key={index} md={6} lg={4} className="mb-4">
            <div className="palette-container d-flex">
              {palette.map((color, i) => (
                <OverlayTrigger
                  key={i}
                  placement="top"
                  overlay={<Tooltip>{color}</Tooltip>}
                >
                  <div
                    className="color-swatch"
                    style={{
                      backgroundColor: color,
                      flex: 1,
                      height: "100px",
                      cursor: "pointer",
                      border: "1px solid #ddd",
                    }}
                    onClick={() => copyToClipboard(color)}
                  />
                </OverlayTrigger>
              ))}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ColorPaletteGallery;
