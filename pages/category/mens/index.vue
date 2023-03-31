<template>
  <div>
    
    <div class="row d-flex justify-content-between">
      <h1 class="col-12 col-sm-6 my-1 my-1">{{ title }}</h1>
      <SelectOrder @orderBy="orderBy($event)"/>
    </div>

    <div class="mb-4">
      <img class="rounded" src="~/assets/img/mens.jpg" style="height: 200px; width: 100%;">
    </div>

    <div class="row d-flex justify-content-center">
      <NotFound v-show="error"/>
      <ProductItem v-for="product in $products" :key="product.id"
        :rate="product.rating.rate"
        :imagem="product.image"
        :title="product.title"
        :price="product.price"
        :id="product.id"
      />
    </div>

  </div>
</template>

<script>
  
  import ProductItem from '~/components/atoms/ProductItem.vue';
import SelectOrder from '~/components/atoms/selectOrder.vue';
import NotFound from '~/components/organisms/notFound.vue';
  export default {
    data(){
      return{
        error: false,
        title: ''
      }
    },
    components:{
      ProductItem,
      SelectOrder,
      NotFound
    },
    mounted(){
      const routePath = $nuxt.$route.path
      let parseTitle = routePath.split('/')
      let title = parseTitle[parseTitle.length-1]
      this.title = title
      this.$store.dispatch('fetchCategoryProduct', title)
    },
    updated(){
      this.$store.getters.$products == 0 ? this.error = true : this.error = false
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
    }
  
  }
</script>