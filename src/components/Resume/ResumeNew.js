import React, {useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
// import pdf from "../../Assets/esha.pdf";
import { AiOutlineDownload } from "react-icons/ai";
// import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import 'react-pdf/dist/Page/TextLayer.css';
import Img from "../../Assets/esha.png"



// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  // const [width, setWidth] = useState(1200);
  // const [pdfError, setPdfError] = useState(null);

  useEffect(() => {
    // setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        
        <Row style={{ justifyContent: "center", position: "relative" }}>
          
          <Button
            variant="primary"
            href={"https://drive.google.com/file/d/17qKP0zNzBT4KlG2j2qB7ACmPCiVPOUsg/view?usp=sharing"}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>


        <img src={Img} className="img-fluid" alt="avatar" style={{ borderRadius: '140px', padding:'120px'}} />


        {/* <Row className="resume">
          <Document
            file={pdf}
            className="d-flex justify-content-center"
            onLoadError={(error) => {
              console.error("PDF load error", error);
              setPdfError(error);
            }}
          >
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        {pdfError && (
          <Row style={{ justifyContent: "center", color: "red" }}>
            <p>Error loading PDF. Please check the file path and console for details.</p>
          </Row>
        )} */}

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={"https://drive.google.com/file/d/17qKP0zNzBT4KlG2j2qB7ACmPCiVPOUsg/view?usp=sharing"}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;



