<template>
    <div>
        <button @click="$emit('mudarImagem')">trocar imagem do perfil</button>
    </div>
</template>

<script>
export default {
    name: 'MudarImagem' ,
    emits: ['mudarImagem']
}
</script>

<style scoped>

</style>