<template>
  <div>
    <div class="row mt-5">
      <div class="col-6">
        <div class="card">
          <img class="card-img-top" :src="$product.image" alt="Card image cap">
        </div>
      </div>

      <div class="col-6">
        <h5 class="card-title">{{ $product.title }}</h5>
        <div class="card-body">
            <p class="card-text">{{ $product.description }}</p>

            <div class="row my-2">
              <div class="col">
                <h3>R$ {{ $product.price }}</h3>
              </div>
            </div>

            <div class="row">

              <div class="col-12 col-md-6 mb-3 mb-md-0">
                <a href="#" class="btn btn-success font-weight-bold p-2">
                  Adicionar ao Carrinho
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
                  </svg>
                </a>
              </div>

              <div class="col-12 col-md-6">
                <div class="input-group">

                  <span class="input-group-btn mr-2">
                      <button type="button" class="btn btn-danger font-weight-bold"  data-type="minus" data-field="quant[2]">-</button>
                  </span>
      
                  <input type="text" name="quant[2]" class=" col-md-6 form-control input-number rounded text-center" value="10" min="1" max="100">
      
                  <span class="input-group-btn ml-2">
                      <button type="button" class="btn btn-success font-weight-bold" data-type="plus" data-field="quant[2]">+</button>
                  </span>
      
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

      }
    },
    mounted(){
      const idProduct = $nuxt.$route.params.id
      this.$store.dispatch('fetchSelectedProduct', idProduct)
    },
    computed:{
      $product(){
        return this.$store.getters.$product
      }
    }
  }
</script>

<style scoped>

</style>