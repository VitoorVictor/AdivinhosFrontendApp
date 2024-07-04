<template>
  <div class="home">
    <div class="title-store text-center text-bordo mt-5">
      <h2 class="title-shop">Nossa Adega</h2>
    </div>
    <div class="container">
        <div class="row">
          <ShopFilters class="col-3"/>
          <Shop class="col-9"/>
        </div>
      </div>
  </div>
</template>

<script>
import ShopFilters from '@/components/ShopFilters.vue'
import Shop from '../components/Shop.vue'


export default {
  name: 'HomeView',
  components:{
    ShopFilters,
    Shop,
  }
  

}
</script>
<style>
.text-bordo{
    color: #400000;
  }
.content-main{
  background-color: rgb(240, 240, 240);
  min-height: 100em;
}
.title-shop{
  font-family: "Baskervville SC", serif;
  font-style: normal;
  font-size: 42px;
}
</style>
