<template>
  <div>
    <div class="row d-flex justify-content-center mt-10">
      <h1>Page not found</h1>
    </div>

    <!-- IMAGEM 404 ENTRA NA DIV CENTRALIZAR DIV -->
    <div class="d-flex justify-content-center">
      <img class="page-404" src="~/assets/img/page404.png">
    </div>

    <div class="row d-flex justify-content-center">
      <NuxtLink to="/">
        <button class="btn btn-primary">Pagina inicial</button>
      </NuxtLink>
    </div>

  </div>
</template>

<script>
  export default {
    layout:'white',
  }
</script>

<style scoped>
.page-404{
  max-height: 500px;
  width: auto;
}
</style>