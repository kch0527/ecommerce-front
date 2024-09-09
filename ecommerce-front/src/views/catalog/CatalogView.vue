<template>
    <div class="product-detail">
        <h2>{{ product.productName }}</h2>
        <p>남은 갯수 : {{ product.stock }}</p>
        <p>Price: {{ product.unitPrice }}</p>
        <button @click="go">구매 하기</button>
        <button @click="goBack">뒤로 가기</button>
    </div>
  </template>

<script>
import axios from 'axios';

export default {
  name: 'CatalogView',
  props: ['id'],
  data() {
    return {
      product: {}  
    }
  },
  created() {
    this.getProduct()
  },
  methods: {
    getProduct(){
      axios.get(`http://localhost:8000/catalog-service/catalogs/${this.id}`)
      .then((response) => {
          this.product = response.data;
        })
        .catch((error) => {
          console.log(error);
        })
    },
    goBack() {
        this.$router.push({ name: 'MainView' })
    }
  }
}
</script>

<style scoped>
.product-detail {
  padding: 2rem;
  text-align: center;
}
.product-detail img {
  max-width: 100%;
  height: auto;
}
</style>