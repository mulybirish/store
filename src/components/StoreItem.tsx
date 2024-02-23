import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const [numOfItems, setNumOfItems] = useState(1);
  const plusbtn = () => {
    setNumOfItems((prev) => prev + 1);
  };
  const minusbtn = () => {
    setNumOfItems((prev) => prev - 1);
  };
  const handleCLick = () => {
    return quantity + 1;
  };
  const quantity = 1;
  console.log(quantity);
  return (
    <>
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={imgUrl}
          height="200px"
          style={{ objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-2">{name}</span>
            <span className="ms-2 text-muted">{formatCurrency(price)}</span>
          </Card.Title>
          <div className="mt-auto">
            {quantity === 0 ? (
              <Button onClick={() => alert("yooo")} className="w-100">
                {" "}
                + Add to cart
              </Button>
            ) : (
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: ".5rem" }}
              >
                hi
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
