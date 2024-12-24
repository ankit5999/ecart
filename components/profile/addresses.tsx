"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { AddressForm } from "./address-form";
import { useState } from "react";

const mockAddresses = [
  {
    id: "1",
    type: "Home",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    isDefault: true,
  },
  {
    id: "2",
    type: "Work",
    street: "456 Business Ave",
    city: "New York",
    state: "NY",
    zipCode: "10002",
    isDefault: false,
  },
];

export function Addresses() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Saved Addresses</h2>
        <Button onClick={() => setShowForm(true)} size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Address
        </Button>
      </div>

      {showForm && (
        <Card className="p-6">
          <AddressForm onCancel={() => setShowForm(false)} />
        </Card>
      )}

      <div className="grid gap-4">
        {mockAddresses.map((address) => (
          <Card key={address.id} className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-medium">{address.type}</h3>
                {address.isDefault && (
                  <span className="text-sm text-muted-foreground">Default</span>
                )}
              </div>
              <Button variant="ghost" size="sm">
                Edit
              </Button>
            </div>
            <div className="space-y-1 text-sm">
              <p>{address.street}</p>
              <p>
                {address.city}, {address.state} {address.zipCode}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}