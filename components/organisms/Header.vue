<template>
  <header>

    <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
      
      <form class="col-6 ml-auto">
        <div class="input-group">
        <input type="text" class="form-control" placeholder="Pesquisar produto">
        <div class="input-group-append">
          <button class="btn btn-dark" type="button">Button</button>
        </div>
      </div>
      </form>
      
      <ul class="navbar-nav ml-auto mr-4">
        <li v-for="categorie in categories" :key="categorie" class="nav-item">
          <NuxtLink class="nav-link text-dark" :to="categorie">{{categorie}}</NuxtLink>
        </li>
      </ul>

      <div class="">
        <i class="bi bi-cart4"></i>
      </div>
    </nav>
  
  </header>
</template>


<script>

  export default {
    data(){
      return{
        categories:Array
      }
    },
    created(){
      new Promise((resolve, reject) => {
        fetch('https://fakestoreapi.com/products/categories')
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          this.categories = data;
        })
      })
    },
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
</style>