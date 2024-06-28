<template>
  <div class="container-fluid">
    <div class=" homebar row p-2 justify-content-center align-items-center">
      <div class="col-md-4"><img :src="require('/public/img/Logo A divinhos.png')" alt="logo" class="img-fluid rounded"></div>
      <div class="col-md-4"></div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeBar',
  
}
</script>

<style scoped>
  .row{
    height: 140px;
  }
  .img-fluid{
    max-height:120px;

  }
  
</style>
