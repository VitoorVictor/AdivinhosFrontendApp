<template>
  <div class="container-fluid homebar">
    <!-- <div class="row justify-content-center align-items-center topside">
      <h2 class="text-light">Desenvolvido e criado por <a href="https://github.com/VitoorVictor" class="btn">Vitor Victor</a></h2>
    </div> -->
    <div class="d-none d-md-flex row p-2 justify-content-center align-items-center">
      <div class="col-md-2 d-flex justify-content-center align-items-center">
        <img :src="require('/public/img/Logo A divinhos.png')" alt="logo" class="img-fluid rounded">
      </div>
      <div class="col-md-8 d-flex justify-content-center align-items-center container">
        <div class="col-md-8 d-flex justify-content-evenly align-items-center">
          <a class="btn btn-rotas text-bordo" href="">Vinhos</a>
          <a class="btn btn-rotas text-bordo" href="">Kits</a>
          <a class="btn btn-rotas text-bordo" href="">Mais Vendidos</a>
        </div>
        <form class="form-search col-md-4">
          <div class="container-search">
            <div class="input-search d-flex align-items-center">
              <i class="bi bi-search text-bordo"></i>
              <input type="text" placeholder="Buscar vinhos" class="form-control form-control-sm text-bordo" name="search" autocomplete="off" value="">
            </div>
          </div>
        </form>
      </div>
      <div class="col-md-2 d-flex justify-content-center align-items-center">
        <a href="" v-if="logado"  class="profile">
          <i class="bi bi-person-circle text-bordo size-padrao-icones"></i>
        </a>
        <a href="" v-else class="logar btn btn-rotas text-bordo">Entrar</a>
        <a href="" class="carrinho">
          <i class="bi bi-bag-fill text-bordo size-padrao-icones"></i>
        </a>
      </div>
    </div>

    <!-- Layout para telas menores que md -->
    <div class="d-md-none row d-flex p-2 align-items-center">
      <div class="d-flex justify-content-between w-100">
        <div class="btn-group">
          <button class="btn btn-menu text-bordo" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#400000"><path d="M80-160v-640h80v640H80Zm720 0v-640h80v640h-80ZM294-280l150-400h72l150 400h-69l-36-102H399l-36 102h-69Zm126-160h120l-58-166h-4l-58 166Z"/></svg></button>        
          <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
            <div class="offcanvas-header border-bottom">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="offcanvas-title text-bordo col-3" id="offcanvasWithBothOptionsLabel">Menu</h5>
                <img :src="require('/public/img/Logo A divinhos.png')" alt="logo" class="img-fluid rounded col-6">
                <button type="button" class="btn-close col-3" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
            </div>
            <div class="offcanvas-body">
              <div class="d-flex  flex-column align-items-start">
                <a class="btn btn-rotas text-bordo" href="">Vinhos</a>
                <a class="btn btn-rotas text-bordo" href="">Kits</a>
                <a class="btn btn-rotas text-bordo" href="">Mais Vendidos</a>
              </div>
            </div>
          </div>
        </div>
        <form class="form-search  mt-2">
          <div class="container-search">
            <div class="input-search d-flex align-items-center">
              <i class="bi bi-search text-bordo"></i>
              <input type="text" placeholder="Buscar vinhos" class="form-control form-control-sm text-bordo" name="search" autocomplete="off" value="">
            </div>
          </div>
        </form>
        <div class="d-flex justify-content-center align-items-center">
          <a href="" v-if="logado"  class="profile">
            <i class="bi bi-person-circle text-bordo size-padrao-icones"></i>
          </a>
          <a href="" v-else class="logar btn btn-rotas text-bordo">Entrar</a>
          <a href="" class="carrinho">
            <i class="bi bi-bag-fill text-bordo size-padrao-icones"></i>
          </a>
        </div>
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
  .form-search {
    min-width:135px;
  }
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
    height: 80px;
    border-bottom: 1px solid #500000;
  }
  .img-fluid{
    max-height:70px;

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
  
  @media (max-width: 576px) {

  }
  .btn-menu:focus{
    border: none;
  }
  .btn-menu:active{
    border: none;
  }

</style>
