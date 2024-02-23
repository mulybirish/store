import { useShoppingCart } from "../context/ShoppingCartContext";
import StoreItems from "../data/items.json";
import { Stack, Button } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = StoreItems.find((item) => item.id === id);
  if (item === null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        style={{ objectFit: "cover", width: "125px", height: "75px" }}
        src={item?.imgUrl}
        alt={`Image of` + item?.name}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
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
