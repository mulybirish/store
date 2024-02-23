import { Row, Col } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => {
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
