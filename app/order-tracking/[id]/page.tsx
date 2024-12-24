"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Package, CheckCircle2, Truck, MapPin } from "lucide-react";

const steps = [
  { id: 1, name: "Order Placed", icon: Package },
  { id: 2, name: "Processing", icon: CheckCircle2 },
  { id: 3, name: "Shipped", icon: Truck },
  { id: 4, name: "Delivered", icon: MapPin },
];

export default function OrderTrackingPage({
  params,
}: {
  params: { id: string };
}) {
  const [currentStep] = useState(2); // Mock current step

  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold mb-8">Order #{params.id}</h1>
      
      <Card className="p-6">
        <div className="relative">
          <div className="overflow-hidden h-2 mb-4 flex rounded bg-muted">
            <div
              className="bg-primary transition-all"
              style={{
                width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
              }}
            />
          </div>

          <div className="flex justify-between">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className={`flex flex-col items-center ${
                    step.id <= currentStep
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  <Icon className="h-6 w-6 mb-2" />
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-medium">Estimated Delivery</span>
            <span>March 15, 2024</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Shipping Method</span>
            <span>Express Shipping</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Tracking Number</span>
            <span className="font-mono">1Z999AA1234567890</span>
          </div>
        </div>
      </Card>
    </div>
  );
}