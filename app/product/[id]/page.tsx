import { getProducts, getProductById } from '@/lib/products';
import ProductDetailPage from '@/components/ProductDetailPage';

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function Page({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetailPage product={product} />;
}