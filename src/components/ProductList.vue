<template>
  <div class="container">
    <div class="product-list">
      <div class="header">
        <h2>Product List</h2>
        <button class="btn btn-primary add-btn" @click="goToAddProduct">
          <i class="fas fa-plus"></i> Add Product
        </button>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="index">
            <td>{{ product.name }}</td>
            <td>{{ product.description }}</td>
            <td>₱{{ product.price }}</td>
            <td>
              <button class="btn btn-sm btn-info" @click="editProduct(index)">
                <i class="fas fa-edit"></i>
              </button>
              <button class="btn btn-sm btn-danger" @click="confirmDelete(product, index)">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="message" class="alert alert-success" role="alert">
        <p class="message">{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  name: 'ProductList',
  computed: {
    products() {
      return this.$store.state.products;
    },
    message() {
      return this.$route.query.message;
    },
  },
  methods: {
    editProduct(index) {
      this.$router.push(`/edit/${index}`);
    },
    confirmDelete(product, index) {
      Swal.fire({
        title: 'Are you sure?',
        text: `You are about to delete "${product.name}"`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Delete'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch('deleteProduct', index);
          Swal.fire(
            'Deleted!',
            `${product.name} has been deleted.`,
            'success'
          )
        }
      })
    },
    goToAddProduct() {
      this.$router.push('/add');
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.product-list {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #007bff;
  color: #fff;
  padding: 16px;
}

.header h2 {
  margin: 0;
}

.add-btn {
  display: flex;
  align-items: center;
}

.add-btn i {
  margin-right: 8px;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 12px 16px;
  text-align: left;
}

.table th {
  background-color: #f8f9fa;
  font-weight: bold;
}

.table tbody tr:nth-child(even) {
  background-color: #f8f9fa;
}

.table tbody tr:hover {
  background-color: #e9ecef;
}

.btn {
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 4px 8px;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 4px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn-sm {
  padding: 2px 6px;
  font-size: 12px;
}

.btn-info {
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8;
}

.btn-info:hover {
  background-color: #138496;
  border-color: #117a8b;
}

.btn-danger {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-danger:hover {
  background-color: #c82333;
  border-color: #bd2130;
}

.alert-success {
  background-color: #d4edda;
  border-color: #c3e6cb;
  color: #155724;
  padding: 12px 16px;
  margin-top: 16px;
  border-radius: 4px;
}

.message {
  margin: 0;
}

.btn.btn-primary.add-btn {
  display: flex;
  align-items: center;
  background-color: #007bff;
  border-color: #007bff;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btn.btn-primary.add-btn:hover {
  background-color: #0069d9;
  border-color: #0062cc;
}

.btn.btn-primary.add-btn i {
  margin-right: 8px;
}
</style>