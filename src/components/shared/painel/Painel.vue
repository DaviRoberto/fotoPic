<template>
    <div class="painel">
        <h2 class="painel-titulo" @dblclick="invisivel = !invisivel">{{ titulo }}</h2>
        <transition name="painel-fade">
            <div class="painel-conteudo" v-show="invisivel">
                <slot>            
                </slot>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: ['titulo'],

    data(){

        return{
            invisivel: true
        }
    }

}

</script>

<style scoped>

/* estilo do painel */

.painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
}

.painel .painel-titulo {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
    cursor: pointer;
}

*{
    box-shadow: 5px 5px 5px;
}

.painel-fade-enter, .painel-fade-leave-active{
    opacity: 0;
}

.painel-fade-leave-active, .painel-fade-enter-active{
    transition: opacity .3s;
}
</style>