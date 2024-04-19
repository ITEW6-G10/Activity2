<template>
    <div class="container">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title">Edit Product</h2>
          <form @submit.prevent="editExistingProduct" class="my-4">
            <div class="form-group">
              <label for="productName">Name:</label>
              <input type="text" v-model="editedProduct.name" class="form-control" id="productName" required>
            </div>
            <div class="form-group">
              <label for="productDescription">Description:</label>
              <input type="text" v-model="editedProduct.description" class="form-control" id="productDescription" required>
            </div>
            <div class="form-group">
              <label for="productPrice">Price:</label>
              <input type="number" v-model="editedProduct.price" class="form-control" id="productPrice" required>
            </div>
            <button type="submit" class="btn btn-primary">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EditProduct',
    data() {
      return {
        editedProduct: {
          name: '',
          description: '',
          price: 0,
        },
      };
    },
    created() {
      const index = this.$route.params.id;
      const product = this.$store.state.products[index];
      if (product) {
        // Set the editedProduct to the selected product data
        this.editedProduct = { ...product };
      }
    },
    methods: {
      editExistingProduct() {
        const index = this.$route.params.id;
        this.$store.dispatch('editProduct', { index, updatedProduct: this.editedProduct });
        // Redirect to the ProductList page after updating
        this.$router.push({ path: '/', query: { message: 'Successfully Updated!' } });
      }
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
  }
  
  .card {
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
  
  .card-body {
    padding: 1.25rem;
  }
  
  .card-title {
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  </style>
  