<template>
    <div class="product-detail">
      <h2>{{ product.productName }}</h2>
      <img :src="product.image" :alt="product.productName" />
      <p>{{ product.stock }}</p>
      <p>Price: {{ product.unitPrice }}</p>
      <button @click="go">구매 하기</button>
      <button @click="goBack">뒤로 가기</button>
    </div>
  </template>

<script>

export default {
  name: 'CatalogView',
  data() {
    return {
      product: {}  
    }
  },
  created() {
    console.log(this.$store.state.product)
    this.product = this.$store.state.product
  },
  methods: {
    goBack() {
        this.$store.commit('setProduct', {})
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