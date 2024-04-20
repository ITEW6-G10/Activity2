// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    products: [
      { name: 'Acer Monitor', description: 'Acer is a Taiwanese computer and electronics hardware company founded in 1976. They offer displays for everyone, from gamers to those looking for a simple work monitor. ', price: 3600 },
      { name: 'ASUS Monitor', description: 'ASUS, also known as ASUSTeK, is a computer parts manufacturer founded in Taiwan. They have diverse lineups for different needs, and their popular gaming lineups are the Republic of Gamers (ROG) and TUF Gaming models. ', price: 2900 },
      { name: 'Dell Monitor', description: 'Dell is an American company that has become one of the most well-known computer brands worldwide.', price: 4000 },
      { name: 'Gigabyte Monitor', description: 'Gigabyte is another computer parts manufacturer based in Taiwan. ', price: 3300 },
      { name: 'LG Monitor', description: 'LG is an international electronics company headquartered in South Korea. They offer a ton of monitors, with new models coming out each year. ', price: 5200 },
      { name: 'Samsung Monitor', description: 'Based in South Korea, Samsung has become one of the worlds leading electronic brands and is LGs main competitor.', price: 4100 },
      { name: 'HP Monitor', description: 'Many of HPs monitors are focused on office use, so you can find a few cheap, work friendly options.', price: 4500 },
      { name: 'MSI Monitor', description: 'MSI G Series monitors are designed for gamers who have just joined the gaming. With useful features and good display performance, gamers can easily enjoy', price: 2800 },
      { name: 'LENOVO Monitor', description: 'The Lenovo D27-40 Monitor is an impressive home office monitor that can double as your gaming and entertainment machine. ', price: 2500 },
      { name: 'NVISION Monitor', description: 'NVISION is a good quality price monitor with HD Gaming experience in Monitoring the game performance.', price: 2100 },
    ], 
  },
  mutations: {
    addProduct(state, product) {
      state.products.push(product);
    },
    editProduct(state, { index, updatedProduct }) {
      state.products.splice(index, 1, updatedProduct);
    },
    deleteProduct(state, index) {
      state.products.splice(index, 1);
    },
  },
  actions: {
    addProduct({ commit }, product) {
      commit('addProduct', product);
    },
    editProduct({ commit }, payload) {
      commit('editProduct', payload);
    },
    deleteProduct({ commit }, index) {
      commit('deleteProduct', index);
    },
  },
});
