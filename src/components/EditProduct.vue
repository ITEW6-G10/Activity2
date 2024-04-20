<template>
  <div class="container">
    <div class="edit-product-form">
      <h2 class="form-title">Edit Product</h2>
      <form @submit.prevent="editExistingProduct" class="my-4">
        <div class="form-group">
          <label for="productName" class="form-label">Name:</label>
          <input
            type="text"
            v-model="editedProduct.name"
            class="form-control"
            id="productName"
            required
          />
        </div>
        <div class="form-group">
          <label for="productDescription" class="form-label">Description:</label>
          <textarea
            v-model="editedProduct.description"
            class="form-control"
            id="productDescription"
            rows="3"
            required
          ></textarea>
        </div>
        <div class="form-group">
          <label for="productPrice" class="form-label">Price:</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">₱</span>
            </div>
            <input
              type="number"
              v-model="editedProduct.price"
              class="form-control"
              id="productPrice"
              required
              min="0"
              step="0.01"
            />
          </div>
        </div>
        <button type="submit" class="btn btn-primary btn-block">
          Save Changes
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

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
      this.editedProduct = { ...product };
    }
  },
  methods: {
    editExistingProduct() {
      const index = this.$route.params.id;
      this.$store.dispatch('editProduct', {
        index,
        updatedProduct: this.editedProduct,
      });
      Swal.fire({
        title: 'Success!',
        text: 'Product has been successfully updated.',
        icon: 'success',
        timer: 1500, 
        showConfirmButton: false 
      }).then(() => {
        this.$router.push({
          path: '/',
          query: { message: 'Successfully Updated!' },
        });
      });
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.edit-product-form {
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

.form-label {
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