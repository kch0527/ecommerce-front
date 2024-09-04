<template>
    <header class="header">
      <h1>My Shop</h1>
      <nav>
        <ul>
          <li><a href="/main">Home</a></li>
          <li><a href="/login">sign in</a></li>
          <li><a href="/join">sign up</a></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header'
  }
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #f8f8f8;
  }
  nav ul {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
  nav ul li a {
    text-decoration: none;
    color: #333;
  }
  </style>