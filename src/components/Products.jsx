// import { useEffect, useState } from "react";
import { popularProducts } from "../data";
import Product from "./Product";
// import axios from "axios";

const Products = () => {
  //   const [products, setProducts] = useState([]);
  //   const [filteredProducts, setFilteredProducts] = useState([]);

  //   useEffect(() => {
  //     const getProducts = async () => {
  //       try {
  //         const res = await axios.get(
  //           cat
  //             ? `http://localhost:5000/api/products?category=${cat}`
  //             : "http://localhost:5000/api/products"
  //         );
  //         setProducts(res.data);
  //       } catch (err) {}
  //     };
  //     getProducts();
  //   }, [cat]);

  //   useEffect(() => {
  //     cat &&
  //       setFilteredProducts(
  //         products.filter((item) =>
  //           Object.entries(filters).every(([key, value]) =>
  //             item[key].includes(value)
  //           )
  //         )
  //       );
  //   }, [products, cat, filters]);

  //   useEffect(() => {
  //     if (sort === "newest") {
  //       setFilteredProducts((prev) =>
  //         [...prev].sort((a, b) => a.createdAt - b.createdAt)
  //       );
  //     } else if (sort === "asc") {
  //       setFilteredProducts((prev) =>
  //         [...prev].sort((a, b) => a.price - b.price)
  //       );
  //     } else {
  //       setFilteredProducts((prev) =>
  //         [...prev].sort((a, b) => b.price - a.price)
  //       );
  //     }
  //   }, [sort]);

  return (
    <div className="p-4 flex flex-wrap justify-between">
      {/* {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)} */}
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
