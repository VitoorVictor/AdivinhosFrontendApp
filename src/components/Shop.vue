<template>
    <div class="container mt-2">
      <div class="row d-flex justify-content-between">
         <div class="col-3">
               Total
         </div>
         <div class="col-7 d-flex justify-content-end align-items-center mb-1">
               <div class="mx-2"> 
                  Filtros de ordem...
               </div>
               <div v-show="sessionAdmin" class="admin">
                  <router-link  to="/vinhos/create"><i class="bi bi-plus"></i></router-link>
               </div>
         </div>
      </div>
      <div class="row d-flex justify-content-start">
         <div v-for="vinho in vinhos" :key="vinho.id" class="col-lg-4 col-md-6 col-12">
            <CardVinhos :vinho="vinho"/>
         </div>
      </div>
    </div>   
</template>
<style scoped>
.bi-plus{
   border: 1px solid green;
   border-radius: 15%;
   padding: 0px 3px;
   font-size: 18px;
   color: green;
}
.bi-plus:hover{
   color: #fff;
   background-color: green;
}

</style>
<script>
import axios from 'axios';
import CardVinhos from '@/components/CardVinhos.vue'

export default {
 name: 'Shop',
 components:{
    CardVinhos
 },
 data() {
   return {
      vinhos: [],
      error: '',
      sessionAdmin: true,
   };
 },
   mounted() {
    this.fetchVinhos();
  },
 methods: {
   async fetchVinhos() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/vinhos');
        this.vinhos = response.data;
        console.log(this.vinhos)
      } catch (error) {
        this.error = 'Erro ao buscar os vinho: ' + error.message;
      }
    },
 }
};
</script>