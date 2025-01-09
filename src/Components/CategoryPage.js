import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const apidataUrl = "https://673c4f2196b8dcd5f3f961c0.mockapi.io/Products/Products";

function CategoryPage() {
  const { category } = useParams(); // Get the category from the URL
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apidataUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // Filter products by the selected category
        const filtered = category
          ? data.filter(product => product.listingType === category)
          : data; // If no category, show all products

        setFilteredProducts(filtered);
      } catch (error) {
        setError(`Error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]); // Re-fetch products if category changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Products in {category || 'All Categories'}</h1>
      <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </div>
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
