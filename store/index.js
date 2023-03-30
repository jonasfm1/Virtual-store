export const state = () =>({
  products:[] = [],
  product:{} = {},
  cart:[] = []
})

export const mutations = {
  SET_PRODUCTS(state, products){
    state.products = products
  },
  SET_PRODUCT(state, product){
    state.product = product
  },
  ORDER_BY(state, sortedArray){
    
    switch (sortedArray.sortedBy) {
      case 'asc':
        sortedArray.product.sort( function(current, next) {
          return current.title < next.title ? -1 : current.title > next.title ? 1 : 0;
        })
        state.products = sortedArray.product
      break;

      case 'desc':
        sortedArray.product.sort( function(current, next) {
          return current.title > next.title ? -1 : current.title > next.title ? 1 : 0;
        })
        state.products = sortedArray.product
      break;

      case 'lowest-price':
        sortedArray.product.sort( function(current, next) {
          return current.price < next.price ? -1 : current.price > next.price ? 1 : 0;
        })
        state.products = sortedArray.product
      break;
        
      case 'biggest-price':
        sortedArray.product.sort( function(current, next) {
          return current.price > next.price ? -1 : current.price > next.price ? 1 : 0;
        })
        state.products = sortedArray.product
      break;

      case 'Best-evaluation':
        sortedArray.product.sort( function(current, next) {
          return current.rating.rate > next.rating.rate ? -1 : current.rating.rate > next.rating.rate ? 1 : 0;
        })
        state.products = sortedArray.product
      break;
      default:
      break;
    }
  },
  INCREMENT_TO_CART(state, addToCar){
    const findExistentItem = state.cart.findIndex(product => product.id === addToCar.product.id)
    if(findExistentItem > -1){
      state.cart[findExistentItem].amount += addToCar.amount;
      state.cart[findExistentItem].total =
      (state.cart[findExistentItem].amount * state.cart[findExistentItem].price).toFixed(2);
      state.cart[findExistentItem] = state.cart[findExistentItem]
      return
    }

    addToCar.product.amount = addToCar.amount
    addToCar.product.total = (addToCar.amount * addToCar.product.price).toFixed(2)
    state.cart.push(addToCar.product)
  },
  INCREMENT_PRODUCT(state, idProductIncrement){
    const findProduct = state.cart.findIndex(product => product.id === Number(idProductIncrement))
    state.cart[findProduct].amount++
    state.cart[findProduct].total =
    (state.cart[findProduct].amount * state.cart[findProduct].price).toFixed(2);

  },
  DECREASE_PRODUCT(state, idProductDecrease){
    const findProduct = state.cart.findIndex(product => product.id === Number(idProductDecrease))
    state.cart[findProduct].amount === 1 ? state.cart[findProduct].amount = 1 : state.cart[findProduct].amount--
    state.cart[findProduct].total = (state.cart[findProduct].amount * state.cart[findProduct].price).toFixed(2);
  },
  DESTROY_PRODUCT(state, idProductDestroy){
    const findProduct = state.cart.findIndex(product => product.id === Number(idProductDestroy))
    if(findProduct > -1){
      state.cart.splice(findProduct, 1)
    }
    // state.cart = state.cart
  }
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
  },
  // ORDENA OS PRODUTOS COM O PARAMETRO PASSADO
  order_by(context, arrayToSorted){
    context.commit('ORDER_BY', arrayToSorted)
    console.log(arrayToSorted);
  },
  // ADICIONA PRODUTO AO CARRINHO
  incrementToCart(context, addToCar){
    context.commit('INCREMENT_TO_CART',addToCar)
  },
  // AUMENTA A QUANTIDADE DO PRODUTO
  incrementProduct(context, idProduct){
    context.commit('INCREMENT_PRODUCT', idProduct)
  },
  // DIMINUI A QUANTIDADE DO PRODUTO
  decreaseProduct(context, idProduct){
    context.commit('DECREASE_PRODUCT', idProduct)
  },
  // DELETE O PRODUTO
  destroyProduct(context, idProductDestroy){
    context.commit('DESTROY_PRODUCT',idProductDestroy)
  }
}

export const getters = {
  $products(state) {
    return state.products
  },
  $product(state) {
    return state.product
  },
  $cart(state) {
    return state.cart
  }
}

// this.amount === 0 ? this.amount = 0 : this.amount--