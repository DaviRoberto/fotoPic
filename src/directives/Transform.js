export default {

    bind(el, binding, vnode) { // el: o elemento - binding: valor passado

        let current = 0;

        el.addEventListener('dblclick', function () {

            let incremento = binding.value || 90;
            let efeito;

            if (!binding.arg || binding.arg == 'rotate') {

                if (binding.modifiers.reverse) { // binding.modifiers que temos acesso aos modificadores utilizadas pela diretiva. Exemplo, binding.modifiers.NomeDoModificador
                    current -= incremento;

                } else {
                    current += incremento;
                }

                efeito = `rotate(${current}deg)`;

            } else if (binding.arg == "scale") {
                efeito = `scale(${incremento})`;
            }

            el.style.transform = efeito;
        
            if (binding.modifiers.animate) this.style.transition = 'transform 0.5s';
        });

    }

};