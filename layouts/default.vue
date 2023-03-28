<template>
  <div class="container-fluid container-md">
    <Header />
    <Nuxt />
  </div>
</template>

<script>

  import Header from '~/components/organisms/Header.vue';
  export default {
    components:{
      Header,
    }
  }
</script>