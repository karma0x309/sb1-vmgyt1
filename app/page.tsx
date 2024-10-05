import ProductList from '@/components/ProductList';
import { getProducts } from '@/lib/products';
import CarouselHeader from '@/components/CarouselHeader';
import CustomerReviews from '@/components/CustomerReviews';
import FAQ from '@/components/FAQ';
import AboutUs from '@/components/AboutUs';

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <CarouselHeader />
        <div className="container mx-auto px-4 py-8 space-y-16">
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
            <ProductList products={products} />
          </section>
          <AboutUs />
          <CustomerReviews />
          <FAQ />
        </div>
      </main>
    </div>
  );
}