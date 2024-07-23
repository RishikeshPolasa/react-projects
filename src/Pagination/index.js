import axios from "axios";
import React, { useState, useEffect } from "react";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Adjust as needed
  const [updatedProducts, setUpdatedProducts] = useState([]);
  useEffect(() => {
    // Fetch all products from the backend
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        // const data = await response.json();
        setProducts(response); // Assuming data is an array of products
        const indexOfLastProduct = currentPage * itemsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
        console.log("pro", products);
        const currentProducts = products?.slice(
          indexOfFirstProduct,
          indexOfLastProduct
        );
        setUpdatedProducts(currentProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Calculate the indexes for the current page

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Display products for the current page */}
      <ul>
        {updatedProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>

      {/* Pagination component */}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(products.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button onClick={() => onPageChange(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
