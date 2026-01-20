import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import ProductForm from './ProductForm';
interface ProductType {
  ProductId: number;
  Name: string;
  Price: number;
  Quantity: number;
  Category: string;
}

function Product() {
  const [product, setProduct] = useState<ProductType>({
    ProductId: 0,
    Name: "",
    Price: 0,
    Quantity: 0,
    Category: "",
  });

  const [productList, setProductList] = useState<ProductType[]>(() => {
    try {
      const storedData = localStorage.getItem("Products");
      return storedData ? JSON.parse(storedData) as ProductType[] : [];
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      return [];
    }
  });

  return (
    <>
      <div >
        {productList.length > 0 ? (
          <ProductCard productList={productList} product={product} setProductList={setProductList} />
        ) : (
          <p>No products found.</p>
        )}
      </div>
      <div>
        <ProductForm product={product} setProduct={setProduct} productList= {productList} setProductList={setProductList} />
      </div>
    </>
  );
}

export default Product;