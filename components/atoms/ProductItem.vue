<template>
  <NuxtLink class="col-3 mb-4 pointer" :to="`/products/${id}`">
    <div>
        <div class="card">
          <img class="card-img-top p-4 img-product" :src="imagem"/>
          <hr class="m-0">
          <div class="card-body p-3">
            <h5 class="card-text text-truncate">
              {{ title }}
            </h5>
            <span class="font-weight-bold">R$ {{ price }}</span>
          </div>
        </div>
    </div>

  </NuxtLink>

</template>

<script>
  export default {
    props:{
      imagem: String,
      title: String,
      price: Number,
      id: Number
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