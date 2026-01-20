import { useEffect, useState } from 'react';
import { Button } from '@mui/material';


interface ProductType {
  ProductId: number;
  Name: string;
  Price: number;
  Quantity: number;
  Category: string;
}

function Product() {
  const [productList, setProductList] = useState<ProductType[]>(() => {
    try {
      const storedData = localStorage.getItem("Products");
      return storedData ? JSON.parse(storedData) as ProductType[] : [];
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      return [];
    }
  });

  useEffect(() => {
    console.log(productList);
  }, [productList]);

  return (
    <>
      <div >
        {productList.length > 0 ? (
          productList.map((product, index) => (
            <div key={product.ProductId} className="bg-white rounded-lg shadow-lg">
              <div className="p-4">
                <h5 className="font-bold mb-2">{product.Name}</h5>
                <h6 className="mb-2">{product.Category}</h6>
                <p className="mb-2">Category: {product.Category}</p>
                <p className="mb-2">Quantity: {product.Quantity}</p>
              </div>
              <div className="flex justify-between p-4">
                <button className="bg-black text-white m-2 px-4 py-2 ">Edit product</button>
                <button className="bg-black text-white px-4 py-2 ">Delete product</button>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>

    </>
  );
}

export default Product;