import React, { useState, useEffect } from 'react';

// Dữ liệu giả lập
const categories = [
  { id: 1, name: 'Fruits' },
  { id: 2, name: 'Vegetables' }
];

const products = [
  { id: 1, categoryId: 1, name: 'Apple' },
  { id: 2, categoryId: 1, name: 'Banana' },
  { id: 3, categoryId: 1, name: 'Orange' },
  { id: 4, categoryId: 2, name: 'Carrot' },
  { id: 5, categoryId: 2, name: 'Broccoli' },
  { id: 6, categoryId: 2, name: 'Spinach' }
];

const JoneData = () => {
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    const categoryProductsList = [];

    categories.forEach(category => {
      const matchedProducts = [];
      
      products.forEach(product => {
        if (product.categoryId === category.id) {
          matchedProducts.push(product);
        }
      });

      categoryProductsList.push({
        category: category.name,
        products: matchedProducts
      });
    });

    setCategoryProducts(categoryProductsList);
  }, []);

  return (
    <div>
      {categoryProducts.map((categoryItem, index) => (
        <div key={index}>
          <h2>{categoryItem.category}</h2>
          <ul>
            {categoryItem.products.map(product => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default JoneData;