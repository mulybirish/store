import { use } from "i18next";
import { useState, useEffect } from "react";

import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Store } from "./Store";

type ResponseType = {
  data: string[];
};

export function Home() {
  const [post, setPost] = useState([]);
  const handle = async () => {};
  // const count = counter(); // output : 4  // the value of the count is now available outside the function scope - clousere
  useEffect(() => {
    fetch("https://api.lyrics.ovh/v1/tool/the-pot")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPost(data);
      });
  }, []);

  console.log(post);
  return (
    <Container className="mt-5">
      <div className="row">
        <div className="col-md-6">
          <h1>Welcome to Our Music Gear Store</h1>
          <p className="lead">
            Explore our extensive collection of high-quality music gear, curated
            by professionals for musicians like you.
          </p>
          <p>{post}</p>
          <Link to={"/store"}>
            <Button
              onClick={() => alert("hi")}
              variant="primary"
              href="#"
              role="buttons"
            >
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
