import React from "react";
import './base.css';
import { Col } from 'react-bootstrap';


export const Content = () => {
  
  return (
    <Col xs={12} md={9}>
    <div className="content-card">
    This website is under active development. <br />
    Please visit back a week later.
    </div>

    <div className="content-card">
    This website is under active development. <br />
    Please visit back a week later.
    </div>
    </Col>

    );
  };

  export default Content;