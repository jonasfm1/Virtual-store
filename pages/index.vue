<template>
  <div>
    <div class="row d-flex justify-content-end">
      <SelectOrder @orderBy="orderBy($event)"/>
    </div>
    <Banner />
    <div>
      <div class="row no-gutters my-3">
        <img class="all-products" src="~/assets/img/mais-vendidos.png"/>
      </div>

      <div class="row d-flex justify-content-center">
        <notFound v-show="error" :hide="error"/>
        <ProductItem v-for="product in $products" :key="product.id"
          :rate="product.rating.rate"
          :imagem="product.image"
          :title="product.title"
          :price="product.price"
          :id="product.id"
        />
      </div>

    </div>
  </div>
</template>

<script>
  import ProductItem from '~/components/atoms/ProductItem.vue';
  import Banner from '~/components/atoms/Banner.vue';
  import SelectOrder from '~/components/atoms/selectOrder.vue';
  import notFound from '~/components/organisms/notFound.vue'

  export default {
    data(){
      return{
        error: false
      }
    },
    components:{
      Banner,
      ProductItem,
      SelectOrder,
      notFound
    },
    computed:{
      $products(){
        return this.$store.getters.$products
      }
    },
    methods:{
      orderBy(option){
        this.$store.dispatch('order_by', {product:this.$products, sortedBy:option})
      }
    },
    mounted(){
      this.$store.dispatch('fetchProducts')
    },
    updated(){
      this.$store.getters.$products == 0 ? this.error = true : this.error = false
    },
  }
</script>

<style scoped>
.all-products{
  width: 100%;
  height: 200px;
  border-radius: 5px;
}
</style>