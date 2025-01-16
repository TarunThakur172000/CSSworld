import React from 'react'
import { Container,Row,Col,Nav } from 'react-bootstrap';
function Footer(){
    return(
        
     <footer
     className="bg-light text-dark py-4 mt-5"
     data-aos="fade-up"
     data-aos-delay="500"
   >
     <Container>
       <Row>
         <Col md={6}>
           <h5 className='font-weight-bold text-info  '>CSS World</h5>
           <p>Effortless CSS styling at your fingertips.</p>
         </Col>
         <Col md={6} className="text-md-end">
           <Nav className="justify-content-end">
             <Nav.Link href="#gradient-generator" className="text-info font-weight-bold">
               Gradient Generator
             </Nav.Link>
             <Nav.Link href="#gallery" className="text-info font-weight-bold">
               Gallery
             </Nav.Link>
             <Nav.Link href="#contact" className="text-info font-weight-bold">
               Contact
             </Nav.Link>
           </Nav>
         </Col>
       </Row>
       <div className="text-center mt-3">
         &copy; {new Date().getFullYear()} CSS Generator. All rights
         reserved.
       </div>
     </Container>
   </footer>

    )
}
export default Footer;