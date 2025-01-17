"use client"; // For Next.js apps
import React, { useState } from "react";
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast, ToastContainer } from "react-toastify";

const ScrollbarGenerator = () => {
  const [scrollbarColor, setScrollbarColor] = useState("#525151");
  const [trackColor, setTrackColor] = useState("#f4f4f4");
  const [thumbColor, setThumbColor] = useState("#767ef5");
  const [width, setWidth] = useState(5); // Default numeric value for range input
  

  const generatedCSS = `
::-webkit-scrollbar {
  width: ${width}px; /* Add px unit */
}
::-webkit-scrollbar-track {
  background: ${trackColor};
}
::-webkit-scrollbar-thumb {
  background: ${thumbColor};
}
::-webkit-scrollbar-thumb:hover {
  background: ${scrollbarColor};
}
  `;

  const copyToClipboard=()=>{
    navigator.clipboard.writeText(generatedCSS);
    toast.success("CSS Copied")
  }

  const resetCSS=()=>{
    setScrollbarColor("#cccccc");
    setTrackColor("#f4f4f4");
    setThumbColor("#888888");
    setWidth(10);

  }

  return (
    <div className="p-4">
        <Row >
            <Col>
      <h2 className="mb-4">CSS Scrollbar Generator</h2>
      </Col>
      <Col>
        <Button onClick={resetCSS} className="w-100 btn btn-dark btn-col">Reset CSS</Button>
      </Col>
      </Row>
      <ToastContainer
         position="bottom-right"
      />
      <Form>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Scrollbar Width</Form.Label>
              <InputGroup>
                <Form.Control
                  type="range"
                  min="5"
                  max="30"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                />
                <Form.Text className="text-muted">
                  
                </Form.Text>
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Scrollbar Thumb Color</Form.Label>
              <Form.Control
                type="color"
                value={thumbColor}
                onChange={(e) => setThumbColor(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Scrollbar Track Color</Form.Label>
              <Form.Control
                type="color"
                value={trackColor}
                onChange={(e) => setTrackColor(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Scrollbar Hover Color</Form.Label>
              <Form.Control
                type="color"
                value={scrollbarColor}
                onChange={(e) => setScrollbarColor(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

      </Form>
       <Row>        
        <Col>
        <Row>
        <Col>
      <h3 className="mt-5">Generated CSS</h3>
      </Col>
      <Col className="mt-4">
      <Button
          className="w-100 btn btn-dark btn-col mt-3"
          variant="primary"
          onClick={copyToClipboard}
        >
          Copy CSS to Clipboard
        </Button>
        </Col>
        </Row>
      <pre className="p-3 bg-light border">{generatedCSS}</pre>
      
        </Col>
        <Col>
      <h3 className="mt-5">Preview</h3>
      <div
        style={{
          height: "150px",
          overflowY: "scroll",
          border: "1px solid #ddd",
          padding: "10px",
        }}
      >
        
        <style>{generatedCSS}</style>
        <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias delectus repellendus sunt quo, cum quam, officia aliquam totam repellat illum adipisci! Commodi repudiandae culpa doloremque esse voluptatem delectus qui ratione iusto rem! Nisi, temporibus reiciendis quidem ab nemo id vel repellat dolores distinctio culpa corrupti nihil repellendus reprehenderit maxime tenetur velit porro odit enim aspernatur blanditiis voluptatum. Minima, deserunt architecto alias ab culpa officia quisquam dolore, animi unde fugit eius placeat distinctio tempore obcaecati voluptates deleniti sit iusto soluta saepe explicabo laborum dolorem excepturi commodi maiores! Maxime similique reprehenderit voluptatibus molestiae quod repudiandae eius! Earum cumque qui nam, dolore a rerum? Hic non assumenda ipsa velit aspernatur nostrum aperiam perferendis, obcaecati accusamus rerum doloremque earum eveniet sequi nesciunt sunt placeat soluta officia maiores provident voluptate? Eligendi quas, ad, obcaecati fugit ullam, modi debitis incidunt repudiandae consequatur rerum eum! Distinctio, id vero similique quidem quia eligendi aspernatur veniam praesentium molestiae, quam ea esse dolorum a quos adipisci et ipsa tenetur, nam fugiat. Repellat velit mollitia voluptates eaque molestias tempore pariatur sit rem. Similique nemo veniam harum sequi facere cum consequatur nobis earum recusandae, explicabo illo vel. Laboriosam architecto molestias hic! At nobis officia, voluptas nam voluptate totam consectetur eaque quisquam aliquam repellat obcaecati alias, consequuntur natus ullam iusto? Perspiciatis, rerum iste? Minima delectus, accusamus, neque inventore nostrum, atque omnis doloremque nemo distinctio consectetur quo facere. Rem mollitia nostrum dolore at molestiae possimus. Excepturi, soluta. Nostrum quae consectetur veritatis ullam perferendis sint vero quos fugiat sit asperiores. Dolor ipsum quae, excepturi aliquam mollitia sunt magni dignissimos vitae ad corrupti nemo ipsa repellendus obcaecati doloribus quod voluptates fugiat. Omnis amet consequatur sunt nam dolor velit et optio, ut quis eligendi quam id culpa iure harum, magni doloremque laudantium vitae neque esse saepe delectus dolores. Unde repellat vel nemo totam natus dicta! Necessitatibus quo sit illum? Dolorum atque tempore architecto maiores sapiente. Maxime eos vero necessitatibus doloribus voluptatum voluptatem ad tenetur expedita recusandae corrupti!</p>
      </div>
      </Col>
      </Row>
    </div>
  );
};

export default ScrollbarGenerator;
