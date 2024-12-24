import { useState, useEffect } from 'react';
import { Product } from '@/lib/data/products';

export function useSearch(products: Product[], query: string) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    if (!query.trim()) {
      setFilteredProducts(products);
      return;
    }

    const searchResults = products.filter((product) => {
      const searchTerm = query.toLowerCase();
      return (
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
      );
    });

    setFilteredProducts(searchResults);
  }, [products, query]);

  return filteredProducts;
}