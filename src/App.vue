<template>
  <div class="corpo">
  
    <meu-menu :rotas="routes" />
  
    <transition name="pagina">
      <router-view></router-view>
    </transition>
  
  </div>
</template>

<script>
import { routes } from './routes';
import Menu from './components/shared/menu/Menu.vue';

export default {

  components: {
    'meu-menu': Menu
  },

  data() {

    return {
      routes: routes.filter(route => route.menu)
    }

  }
}
</script>

<style>
.corpo {
  font-family: Helvetica, sans-serif;
  margin: 0 auto;
  width: 96%;
}

.pagina-enter,
.pagina-leave-active {
  opacity: 0;
}

.pagina-leave-active,
.pagina-enter-active {
  transition: opacity .3s;
}
</style>