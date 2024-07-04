<template>
  <div class="container-fluid homebar">
    <!-- <div class="row justify-content-center align-items-center topside">
      <h2 class="text-light">Desenvolvido e criado por <a href="https://github.com/VitoorVictor" class="btn">Vitor Victor</a></h2>
    </div> -->
    <div class="row p-2 justify-content-center align-items-center">
      <div class="col-md-4 d-flex justify-content-center align-items-center"><img :src="require('/public/img/Logo A divinhos.png')" alt="logo" class="img-fluid rounded"></div>
      <div class="col-md-4 d-flex justify-content-between align-items-center">
        <a class="btn btn-rotas text-bordo" href="">Vinhos</a>
        <a class="btn btn-rotas text-bordo" href="">Kits</a>
        <a class="btn btn-rotas text-bordo" href="">Mais Vendidos</a>
        <form class="form-search">
          <div class="container-search">
            <div class="input-search d-flex align-items-center">
              <i class="bi bi-search text-bordo"></i>
              <input type="text" placeholder="Buscar vinhos" class="FormControl text-bordo" name="search" autocomplete="off" value="">
            </div>
          </div>
        </form>
      </div>
      <div class="col-md-4 d-flex justify-content-center align-items-center">
        <a href="" v-if="logado"  class="profile p-2">
          <i class="bi bi-person-circle text-bordo size-padrao-icones"></i>
        </a>
        <a href="" v-else class="logar p-2 btn btn-rotas text-bordo">Entrar</a>
        <a href="" class="carrinho p-2">
          <i class="bi bi-bag-fill text-bordo size-padrao-icones"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeBar',
  data() {
    return{
      logado: false
    }
  }
  
  
}
</script>

<style scoped>
  .text-bordo{
    color: #400000;
  }
  .size-padrao-icones{
    font-size: 19px;
  }

  .input-search{
    padding: 4px 5px;
    gap: 6px;
    border: 1px #400000 solid;
    border-radius: 6px;
  }
  .input-search input{
    background: transparent;
    border: none;
    color: #400000;
    
  }
  .input-search input::placeholder{
    color: #500000;
  }
  .input-search input:focus-visible {
    outline:none;
}
  .row{
    height: 100px;
    border-bottom: 1px solid #500000;
  }
  .img-fluid{
    max-height:80px;

  }
  .btn-rotas{
    font-family: "Baskervville SC", serif;
    font-style: normal;
    font-size: 20px;
  }
  .btn-rotas:focus{
    padding: 1px 3px;
  }
  .homebar{
    background-color: #fff;
  }
</style>
