<template>
  <div>
    <h1>{{ titulo }}</h1>
    <ul>
      <li v-for="foto of fotos">
        <img :src="foto.url" :alt="foto.titulo">
      </li>
    </ul>    
  </div>
</template>

<script>
export default {
  data() {
    return{

      titulo: 'FotoPic',
      fotos: [
        {
          url: 'http://tudosobrecachorros.com.br/wp-content/uploads/como-fazer-seu-cachorro-feliz-1024x686.jpg',
          titulo: 'cachorro'
        },
        {
          url: 'https://blog.emania.com.br/content/uploads/2016/01/cachorro-curiosidades.jpg',
          titulo: 'cachorro-dois'
        }
      ]      
    }
  }
}
</script>

<style>

</style>
