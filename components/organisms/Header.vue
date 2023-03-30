<template>
  <header>
    <nav class="navbar navbar-light bg-light">

      <!-- ICONE HOME  -->

      <div class="col-12 col-md-6 d-flex align-items-center px-0 mb-2 mb-md-0">
        <NuxtLink class="home" to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>
          </svg>
        </NuxtLink>

        <!-- CATEGORIAS -->
        <ul class="navbar-nav flex-row">
          <li v-for="categorie in categories" :key="categorie" class="nav-item px-2">
            <NuxtLink class="nav-link text-dark font-weight-bold" :to="`/category/${categorie}`">{{categorie}}</NuxtLink>
          </li>
        </ul>
      </div>
        
      <div class="col-12 col-md-5 d-flex align-items-center justify-content-md-end px-0">
        <!-- INPUT BUSCAR PRODUTO-->
        <form>
          <div class="input-group">
            <input id="search-product" type="text" class="form-control" placeholder="Search product">
            <div class="input-group-append">
              <button class="btn btn-dark" type="button" @click="searchProduct()">Search</button>
            </div>
          </div>
        </form>
        
        <!-- ICONDE CARRINHO -->
        <div>
          <NuxtLink to="/carts">
            <button type="button" class="btn pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
            </button>
          </NuxtLink>
        </div>

      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    data(){
      return{
        categories:Array,
      }
    },
    created(){
      new Promise((resolve, reject) => {
        fetch('https://fakestoreapi.com/products/categories')
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          this.categories = data.map(category => {
            let parseCategory = category.includes(" ")
            ? category.split(" ").shift().replace(/[^a-zA-Z0-9]/g, "") : category
            return parseCategory
          })
        })
      })
    },
    methods:{
      searchProduct(){
        const routePath = $nuxt.$route.path
        let parseCategory = routePath.split('/')
        let category = parseCategory[parseCategory.length-1]

        let productName = (document.getElementById("search-product").value)
        let product = productName.charAt(0).toUpperCase() + productName.slice(1)

        this.$store.dispatch('fetchProduct', {category, product})
      }
    }
  }
</script>

<style scoped>
.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #84868a;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgb(39 41 42 / 25%);
}
.home{
  cursor: pointer;
}
</style>