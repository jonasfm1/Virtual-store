<template>
  <div>
    <div class="d-flex justify-content-between">
      <h1 class="my-1">{{ title }}</h1>

      <div class="form-inline d-flex align-items-center">
        <label class="form-inline font-weight-bold pr-3" for="order">Order by:</label>
        <select id="order" class="form-control">
          <option value="">Name</option>
          <option value="">Price</option>
          <option value="">Best evaluation</option>
        </select>
      </div>
 
    </div>

    <div class="mb-4">
      <img class="rounded" src="~/assets/img/electronics.jpg" style="height: 200px; width: 100%;">
    </div>

    <div class="row ">
      <ProductItem v-for="product in $products" :key="product.id"
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

  export default {
    data(){
      return{
        title: String
      }
    },
    components:{
      ProductItem
    },
    mounted(){
      const routePath = $nuxt.$route.path
      let parseTitle = routePath.split('/')
      let title = parseTitle[parseTitle.length-1]
      this.title = title
      this.$store.dispatch('fetchCategoryProduct', title)
    },
    computed:{
      $products(){
        return this.$store.getters.$products
      }
    }
  }
</script>
