"use client";

import { CheckoutForm } from "@/components/checkout/checkout-form";
import { OrderSummary } from "@/components/checkout/order-summary";
import { useCartStore } from "@/lib/store/cart-store";
import { redirect } from "next/navigation";

export default function CheckoutPage() {
  const { items } = useCartStore();

  if (items.length === 0) {
    redirect("/products");
  }

  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CheckoutForm />
        <OrderSummary />
      </div>
    </div>
  );
}