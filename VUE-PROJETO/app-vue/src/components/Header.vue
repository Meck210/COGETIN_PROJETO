<template>
    <div class="w-full bg-gray-50 border-solid border-2 border-green-100">
        <div class="flex justify-between items-center h-[50px]">
        <div class="p-5 cursor-pointer hover:bg-stone-100" @click="clickHambuger">
            <i class="pi pi-bars"></i>
        </div>
        <div class="mt-40">
            {{ dataOpenSideBar }}
            <InputText type="text" v-model="value" placeholder="Digite aqui para pesquisar" class="rounded-none px-60 border border-gray-200"/>
        </div>
        <div>
            <button class="bg-blue-700 mr-4 rounded"><a href="#" class="m-2 text-white hover:border-b-2 font-serif">Login</a></button>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'headerTop',
    props: {
        dataOpenSideBar: Boolean,
        clickHambuger: Function
    },
    data() {
        return {

        }
    }
}
</script>