<template>
  <div class="content-main">
      <HomeBar  v-if="$route.meta.showHomeBar"/>
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
.content-main{
  background-color: rgb(240, 240, 240);
  background-position: center; 
  background-size: cover;
  background-attachment: fixed;
  min-height: 100em;
}
</style>
