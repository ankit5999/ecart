export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'dental' | 'breath' | 'joint';
  image: string;
  features: string[];
  usage: string[];
  sideEffects: string[];
  preventions: string[];
  isComingSoon?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Advanced Dental Relief Gel',
    description: 'Instant relief for tooth pain with our specialized dental gel formula.',
    price: 24.99,
    category: 'dental',
    image: 'https://images.unsplash.com/photo-1628359355624-855775b5c9c8?w=800&auto=format&fit=crop',
    features: [
      'Fast-acting pain relief',
      'Contains natural ingredients',
      'Long-lasting effect',
      'Safe for daily use'
    ],
    usage: [
      'Apply a small amount to affected area',
      'Use up to 4 times daily',
      'For best results, use after meals'
    ],
    sideEffects: [
      'Temporary numbness in application area',
      'Mild tingling sensation'
    ],
    preventions: [
      'Do not swallow',
      'Avoid contact with eyes',
      'Not suitable for children under 12'
    ]
  },
  {
    id: '2',
    name: 'Joint Care Plus Capsules',
    description: 'Advanced formula for joint pain relief and improved mobility.',
    price: 39.99,
    category: 'joint',
    image: 'https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?w=800&auto=format&fit=crop',
    features: [
      'Supports joint health',
      'Reduces inflammation',
      'Improves mobility',
      'Contains Glucosamine and Chondroitin'
    ],
    usage: [
      'Take 2 capsules daily',
      'Best taken with meals',
      'Allow 2-3 weeks for optimal results'
    ],
    sideEffects: [
      'Mild stomach discomfort',
      'Temporary drowsiness'
    ],
    preventions: [
      'Not suitable for pregnant women',
      'Consult doctor if on blood thinners',
      'Store in a cool, dry place'
    ]
  },
  {
    id: '3',
    name: 'Fresh Breath Spray',
    description: 'Instant fresh breath with long-lasting effect.',
    price: 19.99,
    category: 'breath',
    image: 'https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=800&auto=format&fit=crop',
    features: [
      'Instant fresh breath',
      'Kills 99.9% of bad breath bacteria',
      'Long-lasting freshness',
      'Travel-friendly size'
    ],
    usage: [
      'Spray 2-3 times directly in mouth',
      'Use as needed throughout the day',
      'Best used after meals'
    ],
    sideEffects: [
      'Temporary taste alteration',
      'Mild tongue sensitivity'
    ],
    preventions: [
      'Avoid excessive use',
      'Keep out of reach of children',
      'Do not spray in eyes'
    ]
  },
  {
    id: '4',
    name: 'Advanced Tooth Whitening Kit',
    description: 'Professional-grade teeth whitening system for home use.',
    price: 89.99,
    category: 'dental',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&auto=format&fit=crop',
    features: [
      'Professional-grade results',
      'Easy to use at home',
      'Complete kit with instructions',
      'Safe for enamel'
    ],
    usage: [],
    sideEffects: [],
    preventions: [],
    isComingSoon: true
  },
  {
    id: '5',
    name: 'Joint Recovery Patches',
    description: 'Revolutionary patches for targeted joint pain relief.',
    price: 34.99,
    category: 'joint',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop',
    features: [
      'Time-released medication',
      'Waterproof design',
      '24-hour relief',
      'Drug-free formula'
    ],
    usage: [],
    sideEffects: [],
    preventions: [],
    isComingSoon: true
  },
  {
    id: '6',
    name: 'Probiotic Oral Health Tablets',
    description: 'Natural probiotic tablets for complete oral health.',
    price: 29.99,
    category: 'breath',
    image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=800&auto=format&fit=crop',
    features: [
      'Promotes good bacteria',
      'Fights bad breath',
      'Supports gum health',
      'Natural ingredients'
    ],
    usage: [],
    sideEffects: [],
    preventions: [],
    isComingSoon: true
  }
];

export const getProductById = (id: string) => {
  return products.find((product) => product.id === id);
};

export const getProductsByCategory = (category: Product['category']) => {
  return products.filter((product) => product.category === category);
};

export const getAvailableProducts = () => {
  return products.filter((product) => !product.isComingSoon);
};

export const getComingSoonProducts = () => {
  return products.filter((product) => product.isComingSoon);
};