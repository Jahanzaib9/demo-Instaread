import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { BsNewspaper, BsHeadphones, BsBookmark, BsCart3 } from "react-icons/bs";
import Book from "../../Resources/book.PNG";
import "./index.css";

export const Homepage = () => {
  return (
    <div className="primary_div">
      <Container className="main_grid width">
        <Row>
          <Col sm={12} xs={12} md={3}>
            <Image
              className="image_style"
              src={Book}
              height="300"
              alt="image"
            />
          </Col>
          <Col xs={12} md={9} className="second_col">
            <h2 className="main_title">
              Astrophysics for People in a Hurry's Summary
            </h2>
            <p className="key-text">Key Insights & Analysis</p>
            <span className="colored_text">
              Kelly Brogan, MD with Kristin Loberg
            </span>
            <div className="flex mt-20 border-div">
              <p className="p-tag">
                <BsNewspaper className="icon-style" /> 18 min read
              </p>
              <p className="ml-15 p-tag">
                {" "}
                <BsHeadphones className="icon-style" />
                14 min Listen
              </p>
              <p className="ml-15 p-tag">
                <BsBookmark className="icon-style" />
                Add to Libray
              </p>
              <p className="ml-15 p-tag">
                <BsCart3 className="icon-style" />
                Buy Book
              </p>
            </div>
            <div className="flex mt-20">
              <Button className="button-style" variant="secondary" size="sm">
                Business Finance
              </Button>
              <Button
                className="ml-10 button-style"
                variant="secondary"
                size="sm"
              >
                Business Finance
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
