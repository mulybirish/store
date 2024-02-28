import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Store } from "./Store";

export function Home() {
  return (
    <Container className="mt-5">
      <div className="row">
        <div className="col-md-6">
          <h1>Welcome to Our Music Gear Store</h1>

          <p className="lead">
            Explore our extensive collection of high-quality music gear, curated
            by professionals for musicians like you.
          </p>
          <p>
            Whether you're a beginner or a seasoned pro, we have the perfect
            gear to elevate your sound.
          </p>
          <Link to={"/store"}>
            <Button variant="primary" role="buttons">
              Browse Collection
            </Button>
          </Link>
        </div>
        <div className="col-md-6">
          <img
            src="/imgs/moog.avif"
            className="img-fluid"
            alt="Music Gear Store"
          />
        </div>
      </div>
    </Container>
  );
}
