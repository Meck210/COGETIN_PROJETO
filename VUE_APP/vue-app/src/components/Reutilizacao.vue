<template>
    <div>
        <button @click="ativar">Clique aqui</button>
        <span v-show="ativou">ativado</span>
    </div>
</template>

<script>
export default {
    name: 'Reutilizacao',
    data() {
        return {
            ativou: false
        }
    },
    methods: {
        ativar() {
            this.ativou = !this.ativou
        }
    }
}

</script>

<style scoped>

</style>