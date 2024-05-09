<template>
    <div>
        <p>{{compEmail}}</p>
        <p v-if="estou_trabalhando">estou trabalhando no momento</p>
        <p v-else>em busca de emprego</p>
        <button @click="showEmail">{{textoBotao }}</button>
        <p v-show="mostrar_email">o meu email e: {{ email }}</p>
        <p class="teste">para acessar meu portfólio <a v-bind:href="meu_link" target="_blank">basta clicar aqui</a></p>
        <Picture></Picture>
        <p>utilizo as seguitens tecnologias</p>
        <ul>
            <li v-for="(tecnologi, index) in backend_tecnology" v-bind:key="index">{{ tecnologi }}</li>
        </ul>
        <p>utilizo essas tecnologias para frontend:</p>
        <ul>
            <li v-for="tecnologi in frontend_tecnology" :key="tecnologi.id">
            {{ tecnologi.language }}
            </li>
        </ul>
        <ul>
            <p>utilizo essas tecnologias full</p>
            <li v-for="(tecnologi, index) in full_tecnology" v-bind:key="index">{{ tecnologi }}</li>
        </ul>
    </div>
</template>

<script>
import Picture from './Picture.vue'
export default {
    name: 'Verso',
    components: {
        Picture
    },
    props: {
        email: String,
        estou_trabalhando: Boolean
    },
    data() {
        return {
            
            mostrar_email: false,
            meu_link: 'https://google.com',
            textoBotao: 'Mostrar E-mail',
            backend_tecnology: ['java', 'php', 'python'],
            frontend_tecnology: [
                {id: 1, language:'html'},
                {id: 2, language: 'css'},
                {id: 3, language: 'javascript'}
            ],
            full_tecnology: ['backend_tecnology', 'frontend_tecnology']
        }
    },
    methods: {
        showEmail() {
            this.mostrar_email = !this.mostrar_email
            if(!this.mostrar_email) {
                this.textoBotao = 'Mostrar e-mail'
            } else {
                this.textoBotao = 'esconder e-mail'
            }
        }
    }
}
</script>

<style>
.paragrafo-pai {
    color: red;
}
</style>