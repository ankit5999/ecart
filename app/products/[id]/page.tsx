import { getProductById } from "@/lib/data/products";
import { ProductDetails } from "@/components/product-details";
import { notFound } from "next/navigation";

export default function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}