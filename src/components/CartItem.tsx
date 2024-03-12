import { useShoppingCart } from "../context/ShoppingCartContext";
// import StoreItems from "../data/items.json";
import { Stack, Button } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { ProductType } from "../context/ShoppingCartContext";
type CartItemProps = {
  id: number;
  quantity: number;
};
type Item = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { products, removeFromCart } = useShoppingCart();
  const item = products.find((item) => item.id === id) as ProductType;
  if (item === null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        style={{ objectFit: "cover", width: "125px", height: "75px" }}
        src={item?.image}
        alt={`Image of` + item?.title}
      />
      <div className="me-auto">
        <div>
          {item.title}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              &times;{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".65rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>{formatCurrency(item?.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item?.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
