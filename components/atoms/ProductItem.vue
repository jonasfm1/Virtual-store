<template>
  <NuxtLink class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 pointer" :to="`/products/${id}`">
    <div>
        <div class="card">
          <img class="card-img-top p-4 img-product" :src="imagem"/>
          <hr class="m-0">
          <div class="card-body p-3">
            <h5 class="card-text text-truncate">
              {{ title }}
            </h5>

            <div class="row no-gutters d-flex justify-content-between">
              <span class="font-weight-bold">{{ rate }}</span>
              <span class="d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
              </span>
            </div>
            
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
      rate: Number,
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