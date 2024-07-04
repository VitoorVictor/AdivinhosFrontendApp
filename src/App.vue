<template>
  <div class="content-main">
      <HomeBar/>
      <RouterView/>
  </div>
</template>


<script>
import HomeBar from './components/HomeBar.vue';
export default {
  components: {
    HomeBar,
  },

}


</script>

<style>

</style>
