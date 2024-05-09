<template>
    <div>
        <h1>Ola vue</h1>
        <reutilizacao />
        <p>meu nome e: {{ nome }} e trabalho como {{ profissao }}</p>
        <multiplos-eventos />
        <reutilizacao />
        <reutilizacao />
        <reutilizacao />
    </div>
</template>

<script>
import MultiplosEventos from './MultiplosEventos.vue'
import Reutilizacao from './Reutilizacao.vue'


    export default {
  components: { MultiplosEventos, Reutilizacao },
        name: 'PrimeiroComponent',
        componets: {
            MultiplosEventos,
            Reutilizacao
        },
        data() {
            return {
                nome: 'matheus',
                profissao: 'mecanico'
            }
        },
        created() {
            this.nome = 'matheus'
        }
    }
</script>



<style></style>