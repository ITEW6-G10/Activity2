<template>
    <div>
      <h2>Add Product</h2>
      <form @submit.prevent="addNewProduct">
        <input type="text" v-model="newProduct.name" placeholder="Name" required><br>
        <input type="text" v-model="newProduct.description" placeholder="Description" required><br>
        <input type="number" v-model="newProduct.price" placeholder="Price" required><br>
        <button type="submit">Add Product</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AddProduct',
    data() {
      return {
        newProduct: {
          name: '',
          description: '',
          price: 0,
        },
      };
    },
    methods: {
      addNewProduct() {
        this.$store.dispatch('addProduct', this.newProduct);
        // Reset newProduct data
        this.newProduct = {
          name: '',
          description: '',
          price: 0,
        };
        // Redirect to ProductList page after adding
        this.$router.push('/');
      },
    },
  };
  </script>
  