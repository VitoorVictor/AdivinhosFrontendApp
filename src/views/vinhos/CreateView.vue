<template>
    <div>
        <form class="forms" id="form-vinhos" @submit.prevent="handleSubmit">
            <div class="form-group mb-2 mt-5">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-2 col-5  d-flex justify-content-end">
                        <label class="control-label" for="nome">Nome do Vinho</label>  
                    </div>
                    <div class="col-md-8 col-5">
                        <input id="nome" name="nome" class="form-control form-control-md" required type="text" v-model="form.nome">
                    </div>
                </div>
            </div>
            
            <div class="form-group mb-2">
                <div class="row d-md-flex d-none align-items-center justify-content-center">
                    <div class="col-md-2 d-flex justify-content-end">
                            <label class="control-label" for="safra">Safra da Colheita</label>
                    </div>
                    <div class="col-md-2">
                        <select v-model="form.safra"  name="safra" id="safra" class="form-control form-control-md" required>
                            <option disabled value=" ">Escolha a Safra de Colheita da Uva</option>
                            <option selected value=" "></option>
                            <option v-for="ano in anos" :key="ano" :value="ano">{{ ano }}</option>
                        </select>
                    </div>
                    <div class="col-md-1 d-flex justify-content-end">
                        <label class="control-label" for="valor">Valor</label>  
                    </div>
                    <div class="col-md-2">
                        <input class="form-control form-control-md" type="number" id="valor" name="valor" v-model="form.valor" required autocomplete="off" placeholder="R$">
                    </div>
                    <div class="col-md-1 d-flex justify-content-end">
                        <label class="control-label" for="tamanho">Tamanho</label>  
                    </div>
                    <div class="col-md-2 d-flex">
                        <input id="tamanho" name="tamanho" class="form-control form-control-md" v-model="form.tamanho" required type="text" placeholder="Em Mililitros" autocomplete="off">
                    </div>
                </div>
                <div class="row d-md-none d-flex align-items-center justify-content-center mb-2">
                    <div class="col-5 d-flex justify-content-end">
                        <label class="control-label" for="safra">Safra</label>  
                    </div>
                    <div class="col-5">
                        <select v-model="form.safra"  name="safra" id="safra" class="form-control form-control-md" required>
                            <option v-for="ano in anos" :key="ano" :value="ano">{{ ano }}</option>
                        </select>
                    </div>
                </div>
                <div class="row d-md-none d-flex align-items-center justify-content-center mb-2">
                    <div class="col-5 d-flex justify-content-end">
                        <label class="control-label" for="valor">Valor</label>  
                    </div>
                    <div class="col-5">
                        <input class="form-control form-control-md" type="number" id="valor" name="valor" v-model="form.valor" required autocomplete="off" placeholder="R$">
                    </div>
                </div>
                <div class="row d-md-none d-flex align-items-center justify-content-center mb-2">
                    <div class="col-5 d-flex justify-content-end">
                            <label class="control-label" for="tamanho">Tamanho</label>  
                    </div>
                    <div class="col-5">
                        <input id="tamanho" name="tamanho" class="form-control form-control-md" v-model="form.tamanho" required type="text" placeholder="Em Mililitros" autocomplete="off">
                    </div>
                </div>
            </div>

            <div class="form-group mb-2">
                <div class="row d-md-flex d-none align-items-center justify-content-center">
                    <div class="col-md-2 d-flex justify-content-end">
                            <label class="control-label" for="tipo">Tipo do Vinho</label>  
                    </div>
                    <div class="col-md-2">
                        <select v-model="form.tipo"  name="tipo" id="tipo" class="form-control form-control-md" required>
                            <option disabled value=" ">Escolha o Tipo do Vinho</option>
                            <option selected value=" "></option>
                            <option v-for="tipo in tipos" :key="tipo.id" :value="tipo.id">{{ tipo.nome_tipo }}</option>
                        </select>
                    </div>
                    <div class="col-md-2 d-flex justify-content-end">
                        <label class="control-label" for="docura">Doçura do Vinho</label>  
                    </div>
                    <div class="col-md-2">
                        <select v-model="form.docura"  name="docura" id="docura" class="form-control form-control-md" required>
                            <option disabled value=" ">Escolha a Doçura do Vinho</option>
                            <option selected value=" "></option>
                            <option v-for="docura in docuras" :key="docura.id" :value="docura.id">{{ docura.docura }}</option>
                        </select>
                    </div>
                    <div class="col-md-2"></div>
                </div>
                <div class="row d-md-none d-flex align-items-center justify-content-center mb-2">
                    <div class="col-5 d-flex justify-content-end">
                            <label class="control-label" for="tipo">Tipo</label>  
                    </div>
                    <div class="col-5">
                        <select v-model="form.tipo"  name="tipo" id="tipo" class="form-control form-control-md" required>
                            <option disabled value=" ">Escolha o Tipo do Vinho</option>
                            <option selected value=" "></option>
                            <option v-for="tipo in tipos" :key="tipo.id" :value="tipo.id">{{ tipo.nome_tipo }}</option>
                        </select>
                    </div>
                </div>
                <div class="row d-md-none d-flex align-items-center justify-content-center mb-2">
                    <div class="col-5 d-flex justify-content-end">
                        <label class="control-label" for="docura">Doçura</label>  
                    </div>
                    <div class="col-5">
                        <select v-model="form.docura"  name="docura" id="docura" class="form-control form-control-md" required>
                            <option disabled value=" ">Escolha a Doçura do Vinho</option>
                            <option selected value=" "></option>
                            <option v-for="docura in docuras" :key="docura.id" :value="docura.id">{{ docura.docura }}</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="form-group mb-2">
                <div class="row d-md-flex d-none align-items-center justify-content-center">
                    <div class="col-md-2 d-flex justify-content-end">
                        <label class="control-label" for="pais">País de Origem</label>  
                    </div>
                    <div class="col-md-2">
                        <select v-model="form.pais"  name="pais" id="pais" class="form-control form-control-md" required>
                            <option disabled value=" ">Escolha o País de Origem do Vinho</option>
                            <option selected value=" "></option>
                            <option v-for="pais in paises" :key="pais.id" :value="pais.id">{{ pais.nome }}</option>
                        </select>
                    </div>
                    <div class="col-md-2 d-flex justify-content-end">
                        <label class="control-label" for="fornecedor">Fornecedor do Vinho</label>  
                    </div>
                    <div class="col-md-2">
                        <select v-model="form.fornecedor"  name="fornecedor" id="fornecedor" class="form-control form-control-md" required>
                            <option disabled value=" ">Escolha a Fornecedor do Vinho</option>
                            <option selected value=" "></option>
                            <option v-for="fornecedor in fornecedores" :key="fornecedor.id" :value="fornecedor.id">{{ fornecedor.nome }}</option>
                        </select>
                    </div>
                    <div class="col-md-2"></div>
                </div>
                <div class="row d-md-none d-flex align-items-center justify-content-center mb-2">
                    <div class="col-5 d-flex justify-content-end">
                        <label class="control-label" for="pais">País</label>  
                    </div>
                    <div class="col-5">
                        <select v-model="form.pais"  name="pais" id="pais" class="form-control form-control-md" required>
                            <option disabled value=" ">Escolha o País de Origem do Vinho</option>
                            <option selected value=" "></option>
                            <option v-for="pais in paises" :key="pais.id" :value="pais.id">{{ pais.nome }}</option>
                        </select>
                    </div>
                </div>
                <div class="row d-md-none d-flex align-items-center justify-content-center mb-2">
                    <div class="col-5 d-flex justify-content-end">
                        <label class="control-label" for="fornecedor">Fornecedor</label> 
                    </div>
                    <div class="col-5">
                        <select v-model="form.fornecedor"  name="fornecedor" id="fornecedor" class="form-control form-control-md" required>
                            <option disabled value=" ">Escolha a Fornecedor do Vinho</option>
                            <option selected value=" "></option>
                            <option v-for="fornecedor in fornecedores" :key="fornecedor.id" :value="fornecedor.id">{{ fornecedor.nome }}</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="form-group mb-2">
                <div class="row d-flex align-items-center justify-content-center">
                    <div class="col-md-2 col-5 d-flex justify-content-end">
                        <label class="control-label" for="descricao">Descrição</label>  
                    </div>
                    <div class="col-md-8 col-5">
                        <textarea v-model="form.descricao"  id="descricao" name="descricao" class="form-control" required></textarea>
                    </div>
                </div>
            </div>

            <div class="form-group mb-2">
                <div class="row  align-items-center justify-content-center">
                    <div class="col-md-2 col-5 d-flex justify-content-end">
                        <label class="control-label" for="imagem">Imagem do Vinho</label>  
                    </div>
                    <div class="col-md-8 col-5">
                        <input class="form-control" type="file" id="formFile"  @change="handleFileChange">
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col d-flex  justify-content-center">
                    <button type="submit" class="btn btn-dark col-md-2" >Cadastrar</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'CreateView',
    data() {
        return {
            anos: [],
            tipos: [],
            paises: [],
            docuras: [],
            fornecedores: [],
            error: '',
            form: {
                nome: '',
                safra: '',
                valor: '',
                tamanho: '',
                tipo_id: '',
                docura_id: '',
                pais_id: '',
                fornecedor_id: '',
                descricao: '',
                imagem: null,
            }
        };
    },
    created() {
        this.fetchTipos();
        this.fetchDocuras();
        this.fetchPaises();
        this.fetchFornecedores();
    },
    mounted() {
        this.gerarAnos();
    },
    methods: {
        gerarAnos() {
            const anoAtual = new Date().getFullYear();
            const anoInicio = 1980;
            this.anos = Array.from({ length: anoAtual - anoInicio + 1 }, (_, index) => anoAtual - index);
        },
        async fetchTipos() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/tipos');
                this.tipos = response.data;
                console.log(tipos);
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
        }   catch (error) {
                this.error = 'Erro ao buscar os doçuras de vinho: ' + error.message;
            }
        },
        async fetchFornecedores() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/fornecedores');
                this.fornecedores = response.data;
        }   catch (error) {
                this.error = 'Erro ao buscar os fornecedores de vinho: ' + error.message;
            }
        },
        async handleSubmit() {
            // Exemplo de validação para o campo valor
            const valorRegex = /^\d+(\.\d{1,2})?$/; // Aceita números inteiros ou decimais com até duas casas decimais
            if (!valorRegex.test(this.form.valor)) {
                alert('Por favor, insira um valor numérico válido.');
                return;
            }
            
            const formData = new FormData();
            formData.append('nome', this.form.nome);
            formData.append('safra', this.form.safra);
            formData.append('valor', this.form.valor);
            formData.append('tamanho', this.form.tamanho);
            formData.append('tipo_id', this.form.tipo);
            formData.append('docura_id', this.form.docura);
            formData.append('pais_id', this.form.pais);
            formData.append('fornecedor_id', this.form.fornecedor);
            formData.append('descricao', this.form.descricao);
            formData.append('imagem', this.form.imagem);


            axios.post('http://127.0.0.1:8000/api/vinhos', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(response => {
                console.log('Sucesso:', response.data);
                alert('Cadastro realizado com sucesso')
                setTimeout(() => {
                    window.location.href = '/';
                    }, 1000); 
            })
            .catch(error => {
                console.error('Erro:', error.response);
                // Adicione qualquer lógica adicional em caso de erro
            });
        },
        handleFileChange(event) {
            this.form.imagem = event.target.files[0];
        }
    }
    

}
</script>
<style scoped>

</style>