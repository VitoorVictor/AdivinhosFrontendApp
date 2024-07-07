<template>
  <div class="home">
    <div class="title-store justify-content-center text-bordo mt-5 d-none d-md-flex">
      <h2 class="title-shop">Nossa Adega</h2>
    </div>
    <div class=" container title-store text-center text-bordo d-md-none d-flex justify-content-between align-items-center">
        <h2 class="title-shop-small">Nossa Adega</h2>
        <button class="btn" data-bs-toggle="offcanvas" data-bs-target="#filtersOffcanvas" aria-controls="filtersOffcanvas">FILTROS <i class="bi bi-filter-left"></i></button>
    </div>
    <div class="container">
        <div class="row">
          <ShopFilters class="col-3"/>
          <Shop class="col-md-9 col-12"/>
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
.title-shop-small{
  font-family: "Baskervville SC", serif;
  font-style: normal;
  font-size: 20px;
}
</style>
