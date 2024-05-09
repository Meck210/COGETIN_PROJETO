<template>
    
        <h1>meu nome e: {{ nome }}</h1>

</template>

<script>
export default {
    name: 'lifeCycle',
    data() {
        return {
            nome: 'ainda nao sei'
        }
    },
    created() {
        setTimeout(() => {
            this.nome = 'matheus'
        }, 2000);

    },
    mounted() {
        setTimeout(() => {
            this.nome = 'pedra'
        }, 7000)

        this.lifeCycle()
    },
    methods: {
        lifeCycle() {
            console.log("funcionou")
        }
    }
}
</script>