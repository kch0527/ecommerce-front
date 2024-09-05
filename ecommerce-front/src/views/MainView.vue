<template>
  <div class="catalog-list">
    <h2>Featured Products</h2>
    <div class="catalogs">
      <div v-for="catalog in catalogs" :key="catalog.id" class="catalog-card">
        <img :src="catalog.image" :alt="catalog.productName" />
        <h3 @click="href(catalog)">{{ catalog.productName }}</h3>
        <p>{{ catalog.unitPrice }}</p>
      </div>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios';

  export default {
    name: 'MainView',
    data() {
      return {
        catalogs: []
      }
    }, 
    created() {
      this.getData()
    }, 
    methods: {
      getData() {
        axios
        .get('http://localhost:8000/catalog-service/catalogs')
        .then((response) => {
          console.log(response.data);
          this.catalogs = response.data
        })
        .catch((error) => {
          console.log(error)
        })
      },
      href(catalog) {
        console.log(catalog)
        this.$router.push({name: 'CatalogView'})
      }
    }
  }
</script>
  
  <style scoped>
  .catalog-list {
    padding: 2rem;
  }
  .catalogs {
    display: flex;
    gap: 1rem;
  }
  .catalog-card {
    border: 1px solid #ddd;
    padding: 1rem;
    text-align: center;
  }
  .catalog-card img {
    max-width: 100%;
    height: auto;
  }
  </style>