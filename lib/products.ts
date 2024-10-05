import { Product } from '@/types/product';

const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 13 Pro Case',
    description: 'Durable and stylish case for iPhone 13 Pro. Made with high-quality materials to protect your device from scratches and impacts. Available in multiple colors to match your style.',
    price: 29.99,
    images: [
      'https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=1000&q=80',
      'https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&q=80&w=1000&q=80',
    ],
  },
  {
    id: '2',
    name: 'Lightning to USB-C Cable',
    description: 'Fast charging cable for iPhone. This 1-meter cable supports fast charging and data transfer. Compatible with all Lightning port devices and USB-C power adapters.',
    price: 19.99,
    images: [
      'https://images.unsplash.com/photo-1592890288564-76628a30a657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?auto=format&fit=crop&q=80&w=1000&q=80',
    ],
  },
  {
    id: '3',
    name: 'AirPods Pro',
    description: 'Wireless earbuds with active noise cancellation. Featuring customizable fit, sweat and water resistance, and up to 4.5 hours of listening time on a single charge.',
    price: 249.99,
    images: [
      'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    ],
  },
  {
    id: '4',
    name: 'MagSafe Charger',
    description: 'Wireless charger for iPhone 12 and newer. Perfectly aligned magnets attach to your iPhone and provide faster wireless charging up to 15W. Compatible with Qi charging.',
    price: 39.99,
    images: [
      'https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    ],
  },
];

export async function getProducts(): Promise<Product[]> {
  // In a real application, this would fetch products from a database or API
  return products;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  // In a real application, this would fetch a single product from a database or API
  return products.find(product => product.id === id);
}