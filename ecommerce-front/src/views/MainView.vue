<template>
    <div class="product-list">
      <h2>Featured Products</h2>
      <div class="products">
        <div v-for="product in products" :key="product.id" class="product-card">
          <img :src="product.image" :alt="product.name" />
          <h3>{{ product.name }}</h3>
          <p>{{ product.price }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MainView',
    data() {
      return {
        products: [
          { id: 1, name: 'Product 1', price: '$50', image: 'https://via.placeholder.com/150' },
          { id: 2, name: 'Product 2', price: '$60', image: 'https://via.placeholder.com/150' },
          { id: 3, name: 'Product 3', price: '$70', image: 'https://via.placeholder.com/150' },
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .product-list {
    padding: 2rem;
  }
  .products {
    display: flex;
    gap: 1rem;
  }
  .product-card {
    border: 1px solid #ddd;
    padding: 1rem;
    text-align: center;
  }
  .product-card img {
    max-width: 100%;
    height: auto;
  }
  </style>