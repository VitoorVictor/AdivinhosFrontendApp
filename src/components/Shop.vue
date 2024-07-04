<template>
    <div class="container">
       <div class="row">
           <div class="catalog col-md-9">   
                <div class="filters container">
                    <div class="row">
                        <div class="col-6">
                        
                        </div>
                        <div class="col-6">
                           
                        </div>
                    </div>
                </div>
                <div class="vinhos">
                    <CardVinhos/>
                </div>
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
    
   };
 },
 created() {
 
 },
 methods: {
   
 }
};
</script>