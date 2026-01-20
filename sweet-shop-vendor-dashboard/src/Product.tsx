import { useEffect, useState } from 'react';

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    productList.push(product)
    setProductList(productList)
    setProduct({
      ProductId: 0,
      Name: "",
      Price: 0,
      Quantity: 0,
      Category: "",
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  useEffect(() => {
    console.log(productList);
  }, [productList]);

  return (
    <>
      <div >
        {productList.length > 0 ? (
          productList.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg">
              <div className="p-4">
                <h5 className="font-bold mb-2">{product.Name}</h5>
                <h6 className="mb-2">{product.Category}</h6>
                <p className="mb-2">Category: {product.Category}</p>
                <p className="mb-2">Quantity: {product.Quantity}</p>
              </div>
              <div className="flex justify-between p-4">
                <button className="bg-black text-white m-2 px-4 py-2 ">Edit product</button>
                <button className="bg-black text-white m-2 px-4 py-2 ">Delete product</button>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
      <div>

        <div className="flex min-h-screen items-center justify-center p-4">
          <div className="w-full max-w-2xl">
            <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
              Add Product
            </h2>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              <div>
                <label className="block text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="Name"
                  value={product.Name}
                  onChange={handleChange}
                  placeholder="Enter name of product"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Category</label>
                <input
                  type="text"
                  name="Category"
                  value={product.Category}
                  onChange={handleChange}
                  placeholder="Enter name of product"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Price</label>
                <input
                  type="Number"
                  name="Price"
                  value={product.Price}
                  onChange={handleChange}
                  placeholder="Enter price"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Quantity</label>
                <input
                  type="Number"
                  name="Quantity"
                  value={product.Quantity}
                  onChange={handleChange}
                  placeholder="Enter Quantity"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="col-span-2 mt-4">
              <button
                type="submit"
                className="w-full hover:bg-gray-700   py-2 rounded-lg transition-all"
              >
                Submit
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;