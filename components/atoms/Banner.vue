<template>
  <div class="row no-gutters carrosel-banner">
    <div id="img" class="container-img">
      <img src="~/assets/img/special-sale.jpg">
      <img src="~/assets/img/collection.jpg">
    </div>
  </div>
</template>

<script>
  export default {
    mounted(){
      const imgs = document.getElementById("img")
      const img = document.querySelectorAll("#img img")

      let index = 0;
      function carrosel(){
        index++
        if(index > img.length -1){
          index = 0
        }
      imgs.style.transform = `translateX(${-index * 100}%)`
      }
      setInterval(carrosel, 5000)
    }
  }
</script>

<style scoped>
.carrosel-banner{
  width: auto;
  overflow: hidden;
  border-radius: 5px;
}
.container-img{
  display: flex;
  transition: transform 2s ease-in-out;
  transform: translateX(0);
}
.container-img img{
  object-fit: cover;
  height: 100%;
  width: 100%;
}
</style>