import { useRouter } from "next/router";
import SingleProduct from "../../components/SingleProduct";

export default function SingleProductPage() {
  const router = useRouter();
  const query = router.query;
  return <SingleProduct id={query.id} />;
}
