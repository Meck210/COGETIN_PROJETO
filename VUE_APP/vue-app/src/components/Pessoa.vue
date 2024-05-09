<template>
    <div>
        <h2>esta e a descricao da pessoa: {{ nome }}</h2>
        <Verso :email="email" :estou_trabalhando=true />
        <Form></Form>
    </div>
</template>

<script>
import Verso from './Verso.vue';
import Form from './Form.vue';
export default {
    name: 'Pessoa',
    components: {
        Verso,
        Form
    },
    data() {
        return {
            nome: 'matheus',
            email: 'gref@gmail.com'
        }
    }
}
</script>