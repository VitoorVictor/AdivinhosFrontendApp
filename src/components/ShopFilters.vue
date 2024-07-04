<template>
     <div class="container">
        <div class="row">
            <div class="filters col">
                <div class="tipos">
                  <div class="filters-title tipos">
                      <button @click="hiddenFilters('tipos')" class="btn"><h4>TIPOS</h4></button>
                  </div>
                  <div class="filters-selects mt-2" v-if="filtersVisibility.tipos">
                      <ul class="list">
                          <li  v-for="tipo in tipos" :key="tipo.id" class="list-group-item d-flex">
                              <input type="checkbox" class="form-check-input p-2" :value="tipo.id">
                              <p>{{ tipo.nome_tipo }}</p>
                          </li>
                      </ul>
                  </div>
                </div>
                <div class="docuras">
                  <div class="filters-title">
                    <button @click="hiddenFilters('docuras')" class="btn"><h4>DOÇURAS</h4></button>
                </div>
                <div class="filters-selects mt-2" v-if="filtersVisibility.docuras">
                    <ul class="list">
                        <li  v-for="docura in docuras" :key="docura.id" class="list-group-item d-flex">
                            <input type="checkbox" class="form-check-input p-2" :value="docura.id">
                            <p>{{ docura.docura }}</p>
                        </li>
                    </ul>
                </div>
                </div>
                <div class="paises">
                  <div class="filters-title">
                    <button @click="hiddenFilters('paises')" class="btn"><h4>PAÍSES</h4></button>
                </div>
                <div class="filters-selects mt-2" v-if="filtersVisibility.paises">
                    <ul class="list">
                        <li  v-for="pais in paises" :key="pais.id" class="list-group-item d-flex">
                            <input type="checkbox" class="form-check-input p-2" :value="pais.id">
                            <p>{{ pais.nome }}</p>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
     </div>   
</template>
<style scoped>
.btn h4{
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
}

</style>
<script>
import axios from 'axios';

export default {
  name: 'ShopFilters',
  data() {
    return {
      tipos: [],
      docuras: [],
      paises: [],
      error: '',
      filtersVisibility: {
        tipos: true,
        docuras: true,
        paises: true
      },
    };
  },
  created() {
    this.fetchTipos();
    this.fetchDocuras();
    this.fetchPaises();
  },
  methods: {
    hiddenFilters(filterName) {
    this.filtersVisibility[filterName] = !this.filtersVisibility[filterName];
    },
    async fetchTipos() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/tipos');
        this.tipos = response.data;
      } catch (error) {
        this.error = 'Erro ao buscar os tipo de vinho: ' + error.message;
      }
    },
    async fetchPaises() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/paises');
        this.paises = response.data;
      } catch (error) {
        this.error = 'Erro ao buscar os países: ' + error.message;
      }
    },
    async fetchDocuras() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/docuras');
        this.docuras = response.data;
      } catch (error) {
        this.error = 'Erro ao buscar os doçuras de vinho: ' + error.message;
      }
    }
  }
};
</script>