import './App.css'
function ProductForm({product,setProduct,productList,setProductList}) {
    const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let newProduct = {
      ProductId: productList[productList.length - 1].ProductId + 1,
      Name: product.Name,
      Price: product.Price,
      Quantity: product.Quantity,
      Category: product.Category,
    }
    productList.push(newProduct)
    setProductList(productList)
    localStorage.setItem("Products", JSON.stringify(productList))
    setProduct({
      ProductId: 0,
      Name: "",
      Price: 0,
      Quantity: 0,
      Category: "",
    });
  };
  return (
    <>
      <div className="flex min-h-screen justify-center p-4">
          <div className="w-full max-w-2xl">
            <h2 className="text-3xl font-semibold text-center text-gray-800">
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
    </>
  )
}

export default ProductForm


