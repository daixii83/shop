import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      { id: 1, name: '芋頭沙西米露', price: '75', image: 'https://d1ralsognjng37.cloudfront.net/888a54ee-e691-4d38-bc1e-01562e3f04d6.jpeg' },
      { id: 2, name: '小芋圓熟成奶茶', price: '75', image: 'https://d1ralsognjng37.cloudfront.net/70b7bcc0-0d4d-4a4d-ad13-45f75620d4ba.jpeg' },
      { id: 3, name: '紫芋波波沙', price: '85', image: 'https://d1ralsognjng37.cloudfront.net/1a961bbd-a187-4b86-915a-a8e464179e1f.jpeg' },
      { id: 4, name: '招牌 1 號', price: '80', image: 'https://d1ralsognjng37.cloudfront.net/c18c3ca9-d8d8-4189-a08b-5f894d192804.jpeg' },
      { id: 5, name: '雙芋冰嫩仙草凍', price: '90', image: 'https://d1ralsognjng37.cloudfront.net/649d72e4-bdbf-47cb-8fd3-b66b93e5c4b2.jpeg' },
      { id: 6, name: '芋見幸福', price: '90', image: 'https://d1ralsognjng37.cloudfront.net/7dabbebd-2f23-40a2-8b3d-147b578023ca.jpeg' }
    ],
    cart: []
  },
  mutations: {
    addCart (state, data) {
      // 找購物車裡有沒有這個商品
      const idx = state.cart.findIndex(product => {
        return product.id === data
      })
      if (idx > -1) {
        // 有的話數量 + 1
        state.cart[idx].count++
      } else {
        // 沒有的話，用 id 找出該商品的資料後 push 進購物車
        const pidx = state.products.findIndex(product => {
          return product.id === data
        })
        state.cart.push({ ...state.products[pidx], count: 1 })
      }
    },
    delCart (state, data) {
      const idx = state.cart.findIndex(product => {
        return product.id === data
      })
      state.cart.splice(idx, 1)
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    createPersistedState({
      // localStorage 的 key，不設的話是 vuex
      key: 'shop-practice',
      // 指定只保存 state 裡的哪個資料
      paths: ['cart']
    })
  ]
})
