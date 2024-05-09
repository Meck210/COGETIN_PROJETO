<template>
    <div>
        <button @click="primeiro(txt1, $event), segundo(txt2, $event)">Ativar Multiplos</button>
        <p>{{ multiplos_eventos }}</p>
    </div>
</template>

<script>
export default {
    name: 'MultiplosEventos',
    data() {
        return {
            multiplos_eventos: "",
            txt1: 'primeiro evento',
            txt2: 'segundo evento'
        }
    },
    methods: {
        primeiro(txt, event) {
            this.multiplos_eventos = txt;
        },
        segundo(txt, event) {
            setTimeout(() => this.multiplos_eventos = txt, 3000)
        }
}
}
</script>

<style scoped>
div {
    margin: 100px
}
</style>