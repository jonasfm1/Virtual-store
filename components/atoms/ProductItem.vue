<template>
  <div class="col-3 mb-4 pointer">
      <div class="card">
        <img class="card-img-top p-4 img-product" :src="imagem"/>
        <hr class="m-0">
        <div class="card-body p-3">
          <h5 class="card-text text-truncate">
            {{ title }}
          </h5>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    props:{
      imagem: String,
      title: String
    }
  }
</script>

<style scoped>
.img-product{
  height: 18rem;
}
.pointer{
  cursor: pointer;
}
</style>