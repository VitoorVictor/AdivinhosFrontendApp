<template>
<div class="container mb-4">
    <div class="row d-flex justify-content-between">
        <div class="col-2 d-flex flex-column mt-2 align-items-center">
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star text-warning"></i>
            <i class="bi bi-star text-warning"></i>
            <i class="bi bi-star text-warning"></i>
        </div>
        <div class="col-7  d-flex flex-column mt-5 align-items-center">
            <img :src="require('/public/img/vinho-teste.png')"  class="img">
        </div>
        <div class="col-2 mt-2 d-flex justify-content-center">
            <i class="bi bi-heart text-danger"></i>
            <i class="bi bi-heart-fill  hidden text-danger"></i>
        </div>
    </div>
    <div class="row d-flex flex-column align-items-center">
        <div class="col nome-vinho text-center mt-3 text-bordo ">Nome do Vinho</div>
        <div class="col info-vinho text-center text-secondary">Sub Infos do Vinho</div>
        <div class="col text-center text-warning">R$199,00</div>
        <div class="col d-flex justify-content-center mb-4 mt-2">
            <button class="btn btn-dark">Adicionar ao Carrinho</button>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'CardVinho',
    methods:{ 
        toggleHeart(){
            const heart = document.querySelector('.bi-heart');
            const heartFill = document.querySelector('.bi-heart-fill');
            heart.classList.toggle('hidden');
            heartFill.classList.toggle('hidden');
        },  
        applyHeart(){
            const heart = document.querySelector('.bi-heart');
            const heartFill = document.querySelector('.bi-heart-fill');
            heart.classList.add('hidden');
            heartFill.classList.remove('hidden');
        }  
    },

}
</script>
<style scoped>
.bi-heart{
    height: 16px;
}
.bi-heart-fill{
    height: 16px;
}
.hidden{
    display: none;
}
.img{
    width: 40%;
}
.row{
    background-color: white;
    
}
.text-bordo{
    color: #400000;
    font-family: "Baskervville SC", serif;
    font-style: normal;
  }
.nome-vinho{
    font-size: 20px;
    font-weight:bold;
    }
.info-vinho{
    font-size: 12px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    font-style: normal;
}
.btn-dark{
    background-color: #900000  !important;;
    border: #300000  !important;;
}
.btn-dark:hover{
    background-color: #500000 !important; ;
    border: #300000  !important;;
}
.btn-dark:focus{
    background-color: #500000  !important;;
    border: #300000  !important;;
}


</style>