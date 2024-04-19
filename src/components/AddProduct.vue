<template>
  <div class="container">
    <div class="add-product-form">
      <h2 class="form-title">Add Product</h2>
      <form @submit.prevent="addNewProduct">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            v-model="newProduct.name"
            placeholder="Enter product name"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea
            id="description"
            v-model="newProduct.description"
            placeholder="Enter product description"
            class="form-control"
            rows="3"
            required
          ></textarea>
        </div>
        <div class="form-group">
          <label for="price">Price</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">₱</span>
            </div>
            <input
              type="number"
              id="price"
              v-model="newProduct.price"
              placeholder="Enter product price"
              class="form-control"
              step="0.01"
              min="0"
              required
            />
          </div>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Add Product</button>
      </form>
    </div>
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

<style scoped>
.container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}

.add-product-form {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 24px;
}

.form-title {
  text-align: center;
  margin-bottom: 24px;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  font-weight: 500;
  margin-bottom: 8px;
}

.form-control {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 14px;
}

.input-group {
  display: flex;
}

.input-group-prepend {
  display: flex;
}

.input-group-text {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  text-align: center;
  white-space: nowrap;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: 4px 0 0 4px;
}

.btn-block {
  width: 100%;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  color: #fff;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #0069d9;
  border-color: #0062cc;
}
</style>