<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>
  
    <input type="search" class="filtro" placeholder="Digite o título da imagem" @input="filtro = $event.target.value">
  
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva v-meu-transform :url="foto.url" :titulo="foto.titulo"/>
          <meu-botao tipo="button" rotulo="REMOVER" @botaoAtivado="remove(foto)" :confirmacao="true" estilo="perigo"/>

        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
// Imports
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Botao from '../shared/botao/Botao.vue';
// Imports - End

export default {

  components: {
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao
  },

  data() {
    return {

      titulo: 'FotoPic',
      fotos: [],
      filtro: ''

    }
  },

  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    }
  },

  methods:{
    remove(foto){
      alert('Remover a foto: ' + foto.titulo);
    }
  },

  created() {

    this.$http.get('http://localhost:3000/v1/fotos') // Me devolve uma promisse
      .then(res => res.json()) // Pegando a promisse e convertendo para json
      .then(fotos => this.fotos = fotos, err => console.log(err)); // Acessando as fotos e mestrando log de erros caso tenha

  }

}

</script>

<style>
.centralizado {
  text-align: center;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
}

.filtro {
  width: 100%;
}
</style>