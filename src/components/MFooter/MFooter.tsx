import React from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";

/**
 * Footer component
 */
export const MFooter: React.FC = () => {
  return (
    <>
      <footer style={{ background: "aquamarine", color: "black", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center"  }}>
        <Container fluid style={{  }}>
          <Row className="justify-content-md-center">
            <Col sm="auto">
              <span>Personal Website &copy; 2020-2021 by <a href="/">Rishabh Tatia</a></span>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};