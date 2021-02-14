import Link from "next/link";
import ItemStyles from "./styles/ItemStyles";
import Title from "./styles/Title";
import PriceTag from "./styles/PriceTag";
import formatPrice from "../lib/formatPrice";

export default function Product({ product }) {
  return (
    <ItemStyles>
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
      />
      <Title>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>
      <PriceTag>{formatPrice(product.price)}</PriceTag>
      <p>{product.description}</p>
      {/* TODO: Add edit/delete for some users */}
    </ItemStyles>
  );
}
