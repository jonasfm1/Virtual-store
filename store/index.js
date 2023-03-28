export const state = () =>({
  products:[] = []
})

export const mutations = {
  SET_PRODUCTS(state, products){
    state.products = products
  }
}

export const actions = {
  // PEGA TODOS OS PRODUTOS
  fetchProducts(context){
    new Promise((resolve, reject) => {
      fetch('https://fakestoreapi.com/products')
      .then(resolve => resolve.json())
      .then(data => {
        context.commit('SET_PRODUCTS', data)
      })
    })
  },

  // PEGA TODOS OS PRODUTOS DE UMA CATEGORIA
  fetchCategoryProduct(context,type){
    const mens = "men's clothing"
    const women = "women's clothing"
    type === "mens" ? type = mens : type === "womens" 
    ? type = women : type
    
    new Promise((resolve, reject) => {
      fetch(`https://fakestoreapi.com/products/category/${type}`)
      .then(resolve => resolve.json())
      .then(data => {
        context.commit('SET_PRODUCTS', data)
      })
    })
  },

  // PEGA PRODUTO ESPECIFICO NA CATEGORIA
  fetchProduct(context, params){
    if(params.category === ''){
      fetch(`https://fakestoreapi.com/products`)
      .then(resolve => resolve.json())
      .then((data) => {
        let titles = data.filter(product => product.title.includes(params.product))
        context.commit('SET_PRODUCTS', titles)
      })
    }else{
      fetch(`https://fakestoreapi.com/products/category/${params.category}`)
      .then(resolve => resolve.json())
      .then((data) => {
        let titles = data.filter(product => product.title.includes(params.product))
        context.commit('SET_PRODUCTS', titles)
      })
    }

  },
}

export const getters = {
  $products(state) {
    return state.products
  }
}