import { Card } from "@/components/ui/card";
import { formatPrice } from "@/lib/utils";

const mockOrders = [
  {
    id: "1",
    date: "2024-03-10",
    status: "Delivered",
    total: 64.98,
    items: [
      { name: "Advanced Dental Relief Gel", quantity: 2, price: 24.99 },
      { name: "Fresh Breath Spray", quantity: 1, price: 19.99 },
    ],
  },
  // Add more mock orders as needed
];

export function OrderHistory() {
  return (
    <div className="space-y-6">
      {mockOrders.map((order) => (
        <Card key={order.id} className="p-6">
          <div className="flex justify-between mb-4">
            <div>
              <p className="font-medium">Order #{order.id}</p>
              <p className="text-sm text-muted-foreground">{order.date}</p>
            </div>
            <div className="text-right">
              <p className="font-medium">{formatPrice(order.total)}</p>
              <p className="text-sm text-muted-foreground">{order.status}</p>
            </div>
          </div>
          
          <div className="space-y-2">
            {order.items.map((item, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>{formatPrice(item.price * item.quantity)}</span>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}