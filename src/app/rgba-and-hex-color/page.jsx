"use client"
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import ColorPallet from '../color-pallet/page'
import {sample_pallet} from '../color-pallet/colorPalettes'


const RgbaHexColor = () => {
  const [rgb, setRgb] = useState({ r: 255, g: 255, b: 255, a: 1 });
  const [hex, setHex] = useState("#0075ff");
  const [error, setError] = useState("");

  // Convert RGB to HEX
  const rgbToHex = (r, g, b) => {
    const toHex = (value) =>
      value.toString(16).padStart(2, "0").toUpperCase();
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };

  const resetCSS=()=>{
    setRgb({ r: 255, g: 255, b: 255, a: 1 });
    setHex("#0075ff");
    toast.info("CSS code reset");

  }

  // Convert RGBA to HEX
  const rgbaToHex = (r, g, b, a) => {
    const toHex = (value) =>
      value.toString(16).padStart(2, "0").toUpperCase();
    const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    return a === 1 ? hex : `${hex}${Math.round(a * 255).toString(16).padStart(2, "0")}`;
  };

  // Convert HEX to RGB
  const hexToRgb = (hexValue) => {
    const cleanedHex = hexValue.replace("#", "");
    if (cleanedHex.length !== 6 && cleanedHex.length !== 8) {
      setError("Invalid HEX code. Use #RRGGBB or #RRGGBBAA format.");
      return null;
    }
    const r = parseInt(cleanedHex.slice(0, 2), 16);
    const g = parseInt(cleanedHex.slice(2, 4), 16);
    const b = parseInt(cleanedHex.slice(4, 6), 16);
    const a = cleanedHex.length === 8 ? parseInt(cleanedHex.slice(6, 8), 16) / 255 : 1;
    return { r, g, b, a };
  };

  // Handle RGB input changes
  const handleRgbChange = (e) => {
    const { name, value } = e.target;
    const intValue = Math.min(Math.max(Number(value), 0), 255); // Clamp between 0-255
    setRgb((prev) => {
      const newRgb = { ...prev, [name]: intValue };
      setHex(rgbaToHex(newRgb.r, newRgb.g, newRgb.b, newRgb.a)); // Update HEX with the new RGB state
      return newRgb;
    });
    setError("");
  };

  // Handle Alpha input changes
  const handleAlphaChange = (e) => {
    const alphaValue = Math.min(Math.max(Number(e.target.value), 0), 1); // Clamp between 0-1
    setRgb((prev) => {
      const newRgb = { ...prev, a: alphaValue };
      setHex(rgbaToHex(newRgb.r, newRgb.g, newRgb.b, newRgb.a)); // Update HEX with the new Alpha state
      return newRgb;
    });
    setError("");
  };

  // Handle HEX input changes
  const handleHexChange = (e) => {
    const hexValue = e.target.value;
    setHex(hexValue);
    const rgbResult = hexToRgb(hexValue);
    if (rgbResult) {
      setRgb(rgbResult);
      setError("");
    }
  };

  const copyToClipboard = (color) => {
    console.log(typeof(color))
    navigator.clipboard.writeText(`${color}`).then(() => {
      toast.success(`Copied: ${color}`);
    });
    
      
  };

  return (
    <Container className="mt-5">
       <ToastContainer
           position="bottom-right"/>

           <Row>
                <Col>
                     <h1 className="text-center mb-4">RGB and HEX Color Converter</h1>
                </Col>
                 <Col> 
                    <Button className='w-100 btn btn-dark btn-col' onClick={resetCSS}>Reset</Button>
                </Col>
            </Row>
      <Row className="gap-4">
        {/* RGB Input Section */}
        <Col md={4}>
          <h3>RGB Input</h3>
          <Form.Group className="mb-3">
            <Form.Label>Red (R):</Form.Label>
            <Form.Control
              type="range"
              name="r"
              min="0"
              max="255"
              value={rgb.r}
              onChange={handleRgbChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Green (G):</Form.Label>
            <Form.Control
              type="range"
              name="g"
              min="0"
              max="255"
              value={rgb.g}
              onChange={handleRgbChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Blue (B):</Form.Label>
            <Form.Control
              type="range"
              name="b"
              min="0"
              max="255"
              value={rgb.b}
              onChange={handleRgbChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Alpha (A) (Transparency):</Form.Label>
            <Form.Control
              type="range"
              name="a"
              min="0"
              max="1"
              step="0.01"
              value={rgb.a}
              onChange={handleAlphaChange}
            />
          </Form.Group>
        </Col>

        {/* HEX Input Section */}
        <Col md={4}>
          <h3>HEX Input</h3>
          <Form.Group className="mb-3">
            <Form.Label>HEX Code:</Form.Label>
            <Form.Control
              type="text"
              maxLength="9"
              value={hex}
              onChange={handleHexChange}
            />
            <Button onClick={()=>{copyToClipboard(hex)}} className="btn btn-primary w-100 btn-col">Copy</Button>
          </Form.Group>

          {error && <p className="text-danger">{error}</p>}
        </Col>

        {/* Color Preview Section */}
        <Col md={4} style={{width:"24%"}}>
          <h3>Color Preview</h3>
          <div
            style={{
              width: "150px",
              height: "150px",
              background: hex,
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          ></div>
          <p className="mt-3">
            <strong>HEX:</strong> {hex} <span style={{cursor:"pointer"}} onClick={()=>{copyToClipboard(hex)}}> &#x2398; </span> 
          </p>
          <p>
            <strong>RGB:</strong> rgb({rgb.r}, {rgb.g}, {rgb.b}) <span style={{cursor:"pointer"}} onClick={()=>{copyToClipboard( `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`)}}> &#x2398; </span>
          </p>
          <p>
            <strong>RGBA:</strong> rgba({rgb.r}, {rgb.g}, {rgb.b}, {rgb.a}) <span style={{cursor:"pointer"}} onClick={()=>{copyToClipboard( `rgb(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`)}}> &#x2398; </span>
          </p>
        </Col>
      </Row>
      <ColorPallet pallets={sample_pallet}/>
      
    </Container>
  );
};

export default RgbaHexColor;
