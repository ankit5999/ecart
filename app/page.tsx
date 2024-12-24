import { Button } from "@/components/ui/button";
import { getAvailableProducts, getComingSoonProducts } from "@/lib/data/products";
import { ProductCard } from "@/components/product-card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const availableProducts = getAvailableProducts();
  const comingSoonProducts = getComingSoonProducts();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-primary/10 to-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Your Path to Better Health Starts Here
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Discover our specialized healthcare solutions for dental care, fresh
              breath, and joint pain relief. Quality products backed by science.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/products">
                <Button size="lg">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-16">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {availableProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-24 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-16">
            Coming Soon
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comingSoonProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Dental Care</h3>
              <p className="text-muted-foreground">
                Advanced solutions for tooth pain and oral health maintenance.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Fresh Breath</h3>
              <p className="text-muted-foreground">
                Long-lasting freshness with our specialized oral care products.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Joint Health</h3>
              <p className="text-muted-foreground">
                Effective relief for joint pain and improved mobility.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}