<template>
  <div class="container container-sm-fluid">
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