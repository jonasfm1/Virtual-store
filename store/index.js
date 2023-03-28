export const state = () =>({
  products:[] = [],
  product:{} = {}
})

export const mutations = {
  SET_PRODUCTS(state, products){
    state.products = products
  },
  SET_PRODUCT(state, product){
    state.product = product
  },
}

export const actions = {
  // BUSCA TODOS OS PRODUTOS
  fetchProducts(context){
    new Promise((resolve, reject) => {
      fetch('https://fakestoreapi.com/products')
      .then(resolve => resolve.json())
      .then(data => {
        context.commit('SET_PRODUCTS', data)
      })
    })
  },

  // BUSCA TODOS OS PRODUTOS DE UMA CATEGORIA
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

  // BUSCA PRODUTO ESPECIFICO COM OU SEM CATEGORIA
  fetchProduct(context, params){
    let url = ``
    params.category !== ''
    ? url = `https://fakestoreapi.com/products/category/${params.category}`
    : url = `https://fakestoreapi.com/products`
    
    fetch(url)
    .then(resolve => resolve.json())
    .then((data) => {
      let titles = data.filter(product => product.title.includes(params.product))
      context.commit('SET_PRODUCTS', titles)
    })
  },

   // BUSCAR POR ID DO PRODUTO ESCOLHIDO
  fetchSelectedProduct(context, idProduct){
    fetch(`https://fakestoreapi.com/products/${idProduct}`)
    .then(resolve => resolve.json())
    .then(data => context.commit('SET_PRODUCT', data))
  }
}

export const getters = {
  $products(state) {
    return state.products
  },
  $product(state) {
    return state.product
  }
}