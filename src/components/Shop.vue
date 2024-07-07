<template>
    <div class="container mt-2">
      <div class="row d-flex justify-content-between">
         <div class="col-3 mx-3">
               Total
         </div>
         <div class="col-7 mx-3">
               Filtros de ordem...
         </div>
      </div>
      <div class="row d-flex justify-content-start">
         <div class="col-lg-4 col-md-6 col-12">
            <CardVinhos/>
         </div>
         <div class="col-lg-4 col-md-6 col-12">
            <CardVinhos/>
         </div>
         <div class="col-lg-4 col-md-6 col-12">
            <CardVinhos/>
         </div>
         <div class="col-lg-4 col-md-6 col-12">
            <CardVinhos/>
         </div>
         <div class="col-lg-4 col-md-6 col-12">
            <CardVinhos/>
         </div>
         <div class="col-lg-4 col-md-6 col-12">
            <CardVinhos/>
         </div>
         <div class="col-lg-4 col-md-6 col-12">
            <CardVinhos/>
         </div>
      </div>
    </div>   
</template>
<style scoped>
/* .btn h4{
   font-family: "Baskervville SC", serif;
   font-style: normal;
   font-size: 14px;
   font-weight: 600;
}
.filters-title{
   border-bottom: 1px solid #50000030;
}
.btn:focus{
   border: none;
 }
.form-check-input{
   margin-right: 5px;
}
.filters-selects ul{
   padding: 0px;
} */

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
   };
 },
   created() {
    this.fetchVinhos();
  },
 methods: {
   async fetchVinhos() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/vinhos');
        this.vinhos = response.data;
        console.log(this.vinhos);
      } catch (error) {
        this.error = 'Erro ao buscar os vinho: ' + error.message;
      }
    },
 }
};
</script>