import ProductClient from "./ProductClient";
import { getProductById, products } from "@/data/products";

// Statik export için gerekli - build zamanında hangi product id'leri için sayfa oluşturulacağını belirtir
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id);

  if (!product) {
    return (
      <div className="bg-white min-h-screen pt-24 flex items-center justify-center">
        <p className="text-silver-dark">Ürün bulunamadı</p>
      </div>
    );
  }

  return <ProductClient product={product} productId={params.id} />;
}
