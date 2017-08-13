// Configurando as rotas de meu projeto

import Cadastro from './components/cadastro/Cadastro.vue';
import Home from './components/home/Home.vue';

export const routes = [
    { path: '', name: home, component: Home, titulo: 'Home' },
    { path: '/cadastro', name: cadastro, component: Cadastro, titulo: 'Cadastro' }
];