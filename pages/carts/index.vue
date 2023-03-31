<template>
  <div>
    <h2>Meu Carrinho</h2>
    <div class="row no-gutters">

      <ul class="col-12 col-lg-9 list-group px-2">

        <div v-if="$cart.length == 0">
          <h6>Your shopping cart is empty</h6>
        </div>

        <li v-for="product in $cart" :key="product.id" class="list-group-item">
          <div class="row">
            <div class="col-9 col-sm-4 col-lg-4">
              <div class="d-flex">
                <img class="product-image" :src="product.image">
                <div class="text-truncate px-2">
                  <h6>Name</h6>
                  <NuxtLink class="pointer" :to="`/products/${product.id}`">
                    <h6 class="text-primary text-truncate py-2 mt-3">{{ product.title }}</h6>
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div class="col-3 col-sm-2 col-lg-2">
              <h6>Amount</h6>
              <div class="text-primary font-weight-bold py-2 mt-3">{{ product.amount }}</div>
            </div>
            <div class="col-3 col-sm-3 col-lg-3 mt-2 mt-sm-0">
              <h6>Price</h6>
              <div class="text-primary font-weight-bold py-2 mt-3">U$ {{ product.price }}</div>
            </div>
            <div class="col-4 col-sm-3 col-lg-3 mt-2 mt-sm-0">
              <h6>Total</h6>
              <div class="text-primary font-weight-bold py-2 mt-3">U$ {{ product.total }}</div>
            </div>
            <div class="d-flex flex-column flex-md-row col-5 col-sm-12 col-md-6 col-lg-5 mt-2 mt-md-2">
              <div class="col- d-flex mb-2">
                <button type="button" class="btn btn-danger font-weight-bold py-0" :data-product="product.id" @click="decreaseProduct">-</button>
                <input type="text" class="col-md-6 form-control input-number rounded text-center p-0 input-amout" :value="product.amount" min="1">
                <button type="button" class="btn btn-success font-weight-bold px-2 py-0" :data-product="product.id" @click="incrementProduct">+</button>
              </div>
              <div class="col- d-flex flex-column justify-content-between">
                <button class="btn btn-danger" :data-product="product.id" @click="destroyProduct">
                  Excluir
                </button>
              </div> 
            </div>
          </div>
        </li>
      </ul>

      <!-- RESUME CART -->
      <div class="col-12 col-lg-3 col-xl-3 px-2 py-3 py-lg-0">
        <div class="">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Resume Cart</h5>
              <div class="font-weight-bold">Total amount products: {{ cartResume.totalProduct }}</div>
              <div class="font-weight-bold">Final value: {{ cartResume.totalValue }}</div>
              <div>
                <button type="button" class="btn btn-success col mt-3">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        cartResume:{
          totalProduct: 0,
          totalValue: 0,
        }
      }
    },
    computed:{
      $cart(){
        return this.$store.getters.$cart
      },
    },
    methods:{
      incrementProduct(event){
        let idProductIncrement = event.target.dataset.product
        this.$store.dispatch('incrementProduct', idProductIncrement)
        this.$forceUpdate();
      },
      decreaseProduct(event){
        let idProductDecrease = event.target.dataset.product
        this.$store.dispatch('decreaseProduct', idProductDecrease)
        this.$forceUpdate();
      },
      destroyProduct(event){
        let idProductDestroy = event.target.dataset.product
        this.$store.dispatch('destroyProduct', idProductDestroy)
        this.$forceUpdate();
      },
    },
    mounted(){
      let productsInCart = this.$cart
      this.cartResume.totalProduct = productsInCart.reduce((total, { amount }) => total + Number(amount),0)
      this.cartResume.totalValue = productsInCart.reduce((accumulator, { total }) => accumulator + Number(total),0)
    },
    updated(){
      let productsInCart = this.$cart
      this.cartResume.totalProduct = productsInCart.reduce((total, { amount }) => total + Number(amount),0)
      this.cartResume.totalValue = productsInCart.reduce((accumulator, { total }) => accumulator + Number(total),0)
    }
  }
</script>

<style scoped>
.product-image{
  height: 80px;
  width: 80px;
}
.pointer{
  cursor: pointer;
}
.input-amout{
  margin: 0rem 0.8rem 0rem 0.8rem;
}
</style>