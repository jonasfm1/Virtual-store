export const state = () =>({
  products:[] = []
})

export const mutations = {
  SET_PRODUCTS(state, products){
    state.products = products
  }
}

export const actions = {
  fetchProducts(context){
    new Promise((resolve, reject) => {
      fetch('https://fakestoreapi.com/products')
      .then(resolve => resolve.json())
      .then(data => {
        context.commit('SET_PRODUCTS', data)
      })
    })
  },

  fetchProduct(context, searchFor){
    fetch('https://fakestoreapi.com/products')
    .then(resolve => resolve.json())
    .then((data) => {
      let titles = data.filter(product => product.title.includes(searchFor))
      console.log(titles)

      context.commit('SET_PRODUCTS', titles)
    })
  }
}

export const getters = {
  $products(state) {
    return state.products
  }
}