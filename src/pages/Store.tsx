import { useEffect, useState, useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { ChangeEvent, ReactEventHandler } from "react";

type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};
export function Store() {
  const [textInput, setTetInput] = useState("");
  const { products, openCart } = useShoppingCart();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    setTetInput(value);
    // console.log();
  };
  const filteredItems = products.filter((item) => {
    return item.title.toLowerCase().includes(textInput.toLowerCase());
  });
  console.log(products);
  // console.log(textInput);ךד
  return (
    <>
      <h1>Store</h1>
      <div>
        <span className="fw-bold fs-5">Search:</span>{" "}
        <input
          onChange={handleSearch}
          value={textInput}
          type="text"
          className="mb-3 rounded"
        />
      </div>
      <Row md={2} xs={1} lg={3} className="g-3">
        {filteredItems.map((item) => {
          return (
            <Col>
              <StoreItem key={item.id} {...item} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
