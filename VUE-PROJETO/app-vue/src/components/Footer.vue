<template>
    <div class=" w-full bg-stone-800 flex justify-center h-[60px]">
        <div class="">
            <p>AjuInteliGente © 2024 Prefeitura Municipal de Aracaju.</p>
            {{ dataOpenSideBar }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterDown',
    props: {
        dataOpenSideBar: Boolean
    }
}
</script>