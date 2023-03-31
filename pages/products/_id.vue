<template>
  <div>
    <div id="toast" class="custom-toast">
      <div>
        <strong>Success!</strong>
        <p>Added to your cart</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-exclamation" viewBox="0 0 16 16">
        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z"/>
      </svg>
    </div>
    <!-- TOAST ESCONDIDO -->

    <div class="row mt-5">
      <!-- IMAGEM DO PRODUTO -->
      <div class="col-6">
        <div class="card">
          <img class="card-img-top" :src="$product.image" alt="Card image cap">
        </div>
      </div>
      <!-- TITLE / DESCRIPTION / PRICE / AVALIACAO / CARRINHO E QUANTIDADE -->
      <div class="col-6">
        <h5 class="card-title">{{ $product.title }}</h5>
        <div class="card-body">
          <p class="card-text">{{ $product.description }}</p>  
          <!-- PRECO / AVALIACAO -->
          <div class="row my-2">
            <div class="col">
              <h3 class="text-success">R$ {{ $product.price }}</h3>
              <div class="row no-gutters d-flex justify-content-between mb-2 evaluation">
                <span class="font-weight-bold text-success">{{ rate }}</span>
                <span class="d-flex align-items-center text-success">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <!-- CARRINHO E QUANTIDADE -->
          <div class="row">
            <!--CARRINHO -->
            <div class="col-12 col-md-6 mb-3 mb-md-0">
              <button class="btn btn-success font-weight-bold p-2" @click="addToCart(), showToast()">
                Adicionar ao Carrinho
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
                </svg>
              </button>
            </div>
            <!-- ADICIONAR QUANTIDADE AO CARRINHO -->
            <div class="col-12 col-md-6">
              <div class="input-group d-flex justify-content-end">
                <span class="input-group-btn mr-2">
                  <button type="button" class="btn btn-danger font-weight-bold" @click="decrease">-</button>
                </span>
                <input type="text" class="col-md-6 form-control input-number rounded text-center" :value="amount" min="1">
                <span class="input-group-btn ml-2">
                  <button type="button" class="btn btn-success font-weight-bold" @click="increment">+</button>
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
        rate:'',
        amount: 1,
      }
    },
    beforeUpdate(){
      this.getRate()
    },
    mounted(){
      const idProduct = $nuxt.$route.params.id
      this.$store.dispatch('fetchSelectedProduct', idProduct)
    },
    computed:{
      $product(){
        return this.$store.getters.$product
      }
    },
    methods:{
      async getRate(){
        let rating = await this.$store.getters.$product.rating
        this.rate = rating.rate
      },
      increment(){
        this.amount++
      },
      decrease(){
        this.amount === 1 ? this.amount = 1 : this.amount--
      },
      addToCart(){
        this.$store.dispatch('incrementToCart', {product:this.$product, amount: this.amount})
      },
      showToast(){
        const myToast = document.getElementById("toast")
        setTimeout(() => {
          myToast.style.display = 'flex'
        }, 10)

        setTimeout(() => {
          myToast.animate([
            { transform : 'translateY(0px)'},
            { transform : 'translateY(-300px)'},
          ],{
            duration: 3000,
            iterations: 1
          })
        });

        setTimeout(() => {
          myToast.style.display = 'none'
        }, 2000)
      }
    }
  }
</script>

<style scoped>
.evaluation{
  font-size: 1.5rem;
}

.custom-toast {
  position: absolute;
  right: 0;
  top: 0;
  margin: 30px;
  overflow: hidden;

  background-color: #9bf0bd;
  height: auto;
  width: 150px;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(56,56,56,0.8);

  display: none;
  justify-content: space-between;
  align-items: center;
}

.custom-toast strong{
  color: #467757;
  font-weight: bold;
  font-size: 18px;
}

.custom-toast p {
  color: #477757;
  font-size: 14px;
}
</style>