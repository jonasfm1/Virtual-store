<template>
  <div>
    <Banner />
    <div>
      <div class="row no-gutters my-3">
        <img class="all-products" src="~/assets/img/mais-vendidos.png"/>
      </div>
      <div class="row ">
        <ProductItem v-for="product in $products" :key="product.id"
        :imagem="product.image"
        :title="product.title"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import ProductItem from '~/components/atoms/ProductItem.vue';
  import Banner from '~/components/atoms/Banner.vue';

  export default {
    data(){
      return{
      }
    },
    components:{
      Banner, ProductItem,
    },
    mounted(){
      this.$store.dispatch('fetchProducts')
    },
    computed:{
      $products(){
        return this.$store.getters.$products
      }
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