"use client";

import { Product } from "@/lib/data/products";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/lib/store/cart-store";
import { toast } from "sonner";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
    toast.success("Added to cart");
  };

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
          {product.isComingSoon && (
            <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
              <span className="text-lg font-semibold">Coming Soon</span>
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
          <p className="text-muted-foreground line-clamp-2">
            {product.description}
          </p>
          <p className="mt-4 font-semibold">{formatPrice(product.price)}</p>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex gap-2">
        <Button
          className="flex-1"
          onClick={handleAddToCart}
          disabled={product.isComingSoon}
        >
          Add to Cart
        </Button>
        <Link href={`/products/${product.id}`} className="flex-1">
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}