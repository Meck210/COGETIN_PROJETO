<template>
    <div>
       <h2>MEU FORMULARIO:</h2>
        <form action="" @submit="enviarFormulario($event)">
            <div>
                <input type="text" v-model="name">
            </div>
            <div>
                <input type="text" v-model="email">
            </div>
            <div>
                <Submit />
            </div>
        </form>
        <p>conteudo</p>
        <p>conteudo</p>
        <p>conteudo</p>
    </div>
</template>

<script>
import InputText from './form/InputText.vue'
import Submit from './form/Submit.vue'
export default {
    name: 'Form',
    components: {
        InputText,
        Submit
    },
    data() {
        return {
            name: '',
            email: ''
        }
    },
    methods: {
        enviarFormulario(event) {

            event.preventDefault();

            const name = this.name;
            const email = this.email;

            console.log('formulario enviado');
            console.log("o nome e: " + name);
            console.log("o email e: " + email);
        }
    }
}
</script>

<style scoped>
p {
    margin: 40px;
}
</style>