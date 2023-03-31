<template>
  <div class="col-12 col-sm-6 form-inline d-flex align-items-center justify-content-end my-2">
        <label class="form-inline font-weight-bold pr-3" for="order">Order by:</label>
        <select id="order" class="form-control" @change="$emit('orderBy',$event.target.value)">
          <option value="" disabled selected>Select</option>
          <option value="asc">Name:A-Z</option>
          <option value="desc">Name:Z-A</option>
          <option value="lowest-price">lowest price</option>
          <option value="biggest-price">biggest price</option>
          <option value="Best-evaluation">Best evaluation</option>
        </select>
      </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>