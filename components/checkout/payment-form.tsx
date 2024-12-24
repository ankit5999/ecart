"use client";

import { useState } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/stripe-js";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/store/cart-store";
import { toast } from "sonner";

export function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const { clearCart } = useCartStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessing(true);

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/order-confirmation`,
        },
      });

      if (error) {
        toast.error(error.message);
      } else {
        clearCart();
        toast.success("Payment successful!");
      }
    } catch (error) {
      toast.error("An error occurred during payment");
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />
      <Button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full"
      >
        {isProcessing ? "Processing..." : "Pay Now"}
      </Button>
    </form>
  );
}