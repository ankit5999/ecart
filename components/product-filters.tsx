"use client";

import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

const categories = [
  { id: "dental", label: "Dental Care" },
  { id: "breath", label: "Fresh Breath" },
  { id: "joint", label: "Joint Health" },
];

const priceRanges = [
  { id: "0-25", label: "Under $25" },
  { id: "25-50", label: "$25 to $50" },
  { id: "50+", label: "Over $50" },
];

export function ProductFilters() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-semibold mb-4">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox id={category.id} />
              <label
                htmlFor={category.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {category.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Price Range</h3>
        <div className="space-y-3">
          {priceRanges.map((range) => (
            <div key={range.id} className="flex items-center space-x-2">
              <Checkbox id={range.id} />
              <label
                htmlFor={range.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {range.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Button variant="outline" className="w-full">
        Reset Filters
      </Button>
    </div>
  );
}