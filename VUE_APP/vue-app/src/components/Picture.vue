<template>
<div>
    <img :src="avatar" :alt="descricao">
<MudarImagem @mudar-imagem="trocarImagem"/>
</div>
    
</template>

<script>
import MudarImagem from './MudarImagem.vue'
export default {
    name: 'Picture',
    components: {
        MudarImagem
    },
    data() {
        return {
            avatar: "/img/transferir.png",
            descricao: "cogetin"
        }
    },
    methods: {
        trocarImagem() {
            this.avatar = "./img/trem.jpg"
        }

    }
}
</script>