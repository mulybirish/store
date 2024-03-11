import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
};
export function StoreItem({
  id,
  title,
  price,
  image,
  description,
}: StoreItemProps) {
  const {
    getItemQuantity,
    increaceCartQuantity,
    decreaceCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  console.log(quantity);
  return (
    <>
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={image}
          height="200px"
          style={{ objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-4">{title}</span>
            <span className="ms-2 text-muted">{formatCurrency(price)}</span>
          </Card.Title>
          <Card.Text className="text-muted">
            <span>{description}</span>
          </Card.Text>
          <div className="mt-auto">
            {quantity === 0 ? (
              <Button
                className="w-100"
                onClick={() => increaceCartQuantity(id)}
              >
                {" "}
                + Add to cart
              </Button>
            ) : (
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: ".5rem" }}
              >
                <div
                  className="d-flex align-items-center"
                  style={{ gap: ".5rem" }}
                >
                  <Button onClick={() => increaceCartQuantity(id)}>+</Button>
                  <div>
                    <span className="fs-3">{quantity}</span> in cart
                  </div>
                  <Button onClick={() => decreaceCartQuantity(id)}>-</Button>
                </div>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeFromCart(id)}
                >
                  Remove
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
