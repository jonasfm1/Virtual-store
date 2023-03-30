<template>
  <div>
    <h2>Meu Carrinho</h2>
    <div class="row no-gutters">
      <ul class="col-12 col-xl-9 list-group px-2">
        <div v-if="$cart.length == 0">
          Seu carrinho esta vazio
        </div>
        <li v-for="product in $cart" :key="product.id" class="list-group-item">
          <div class="row">
            <div class="col-9 col-sm-5 col-lg-4">
              <div class="d-flex">
                <img class="product-image" :src="product.image">
                <div class="text-truncate px-3">
                  <h6>Name</h6>
                  <h6 class="text-primary text-truncate py-2 mt-3">{{ product.title }}</h6>
                </div>
              </div>
            </div>
            <div class="col-2 col-sm-2 col-lg-2">
              <h6>Amount</h6>
              <div class="text-primary font-weight-bold py-2 mt-3">{{ product.amount }}</div>
            </div>
            <div class="col-3 col-sm-2 col-lg-3">
              <h6>Price</h6>
              <div class="text-primary font-weight-bold py-2 mt-3">U$ {{ product.price }}</div>
            </div>
            <div class="col-4 col-sm-3 col-lg-3">
              <h6>Total</h6>
              <div class="text-primary font-weight-bold py-2 mt-3">U$ {{ product.total }}</div>
            </div>
            <div class="d-flex col-12 col-sm-12 col-md-6 col-lg-4 mt-2">
              <div class="col-7 d-flex px-0">
                <div class="input-group d-flex">
                  <span class="input-group-btn mr-2">
                    <button type="button" class="btn btn-danger font-weight-bold" :data-product="product.id" @click="decreaseProduct">-</button>
                  </span>
                  <input type="text" class="col-md-6 form-control input-number rounded text-center" :value="product.amount" min="1">
                  <span class="input-group-btn ml-2">
                    <button type="button" class="btn btn-success font-weight-bold" :data-product="product.id" @click="incrementProduct">+</button>
                  </span>
                </div>
              </div>
              <div class="col-5 d-flex flex-column justify-content-between">
                <button class="btn btn-danger" :data-product="product.id" @click="destroyProduct">
                  Excluir
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <!-- RESUME CART -->
      <div class="col-12 col-lg-5 col-xl-3 px-2 py-3 py-lg-0">
        <div class="">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Resume Cart</h5>
              <div class="font-weight-bold">Amount product: {{  }}</div>
              <div class="font-weight-bold">Total: U$ {{  }}</div>
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
        product:{
          amount: Number
        }
      }
    },
    computed:{
      $cart(){
        return this.$store.getters.$cart
      }
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
      }
    },
  }
</script>

<style scoped>
.product-image{
  height: 80px;
  width: 80px;
}
</style>