<template>
    <div class="h-full bg-stone-700" id="side-bar" :class="dataOpenSideBar == true ? 'side-bar-visible':'side-bar-close'">
        <div class="bg-stone-800 h-[50px]">
         <div class="text-xl font-bold text-center flex items-center justify-center text-white h-full">
            <a href="#" class="flex items-center">
            <img src="/img/aju.png" alt="" class="w-11 h-11 rounded object-cover">
            <span class="text-lg font-bold text-white ml-1 " v-show="dataOpenSideBar">Inteligente</span>
        </a>
         </div>
        </div>
        <div class="py-4 rounded-sm cursor-pointer text-gray-300 hover:bg-gray-950 hover:text-gray-100">
            <router-link to="/" class="px-2 flex space-x-2 text-sm"><span class="pi pi-palette ml-2 mr-2 " v-toolpit-right="Dashboard"></span><span v-show="dataOpenSideBar">Arte e Cultura</span></router-link>
        </div>
        <div class="py-4 rounded-sm cursor-pointer text-gray-300 hover:bg-gray-950 hover:text-gray-100">
            <router-link to="/as002" class="px-2 flex space-x-2 text-sm"><span class="pi pi-heart-fill ml-2 mr-2 " v-toolpit-right="as002"></span><span v-show="dataOpenSideBar">Assistência Social</span></router-link>
        </div>
        <div class="py-4 rounded-sm cursor-pointer text-gray-300 hover:bg-gray-950 hover:text-gray-100">
            <router-link to="/" class="px-2 flex space-x-2 text-sm"><span class="pi pi-hammer ml-2 mr-2 " v-toolpit-right="Dashboard"></span><span v-show="dataOpenSideBar">Defesa do Consumidor</span></router-link>
        </div>
        <div class="py-4 rounded-sm cursor-pointer text-gray-300 hover:bg-gray-950 hover:text-gray-100">
            <router-link to="/" class="px-2 flex space-x-2 text-sm"><span class="pi pi-folder ml-2 mr-2 " v-toolpit-right="Dashboard"></span><span v-show="dataOpenSideBar">Documentos Oficiais</span></router-link>
        </div>
        <div class="py-4 rounded-sm cursor-pointer text-gray-300 hover:bg-gray-950 hover:text-gray-100">
            <router-link to="/" class="px-2 flex space-x-2 text-sm"><span class="pi pi-lightbulb ml-2 mr-2 " v-toolpit-right="Dashboard"></span><span v-show="dataOpenSideBar">Econônomia e Inovação</span></router-link>
        </div>
        <div class="py-4 rounded-sm cursor-pointer text-gray-300 hover:bg-gray-950 hover:text-gray-100">
            <router-link to="/" class="px-2 flex space-x-2 text-sm"><span class="pi pi-book ml-2 mr-2 " v-toolpit-right="Dashboard"></span><span v-show="dataOpenSideBar">Educação</span></router-link>
        </div>
        <div class="py-4 rounded-sm cursor-pointer text-gray-300 hover:bg-gray-950 hover:text-gray-100">
            <router-link to="/" class="px-2 flex space-x-2 text-sm"><span class="pi pi-trophy ml-2 mr-2 " v-toolpit-right="Dashboard"></span><span v-show="dataOpenSideBar">Esporte</span></router-link>
        </div>
        <div class="py-4 rounded-sm cursor-pointer text-gray-300 hover:bg-gray-950 hover:text-gray-100">
            <router-link to="/" class="px-2 flex space-x-2 text-sm"><span class="pi pi-dollar ml-2 mr-2 " v-toolpit-right="Dashboard"></span><span v-show="dataOpenSideBar">Finanças</span></router-link>
        </div>
        <div class="py-4 rounded-sm cursor-pointer text-gray-300 hover:bg-gray-950 hover:text-gray-100">
            <router-link to="/" class="px-2 flex space-x-2 text-sm"><span class="pi pi-globe ml-2 mr-2 " v-toolpit-right="Dashboard"></span><span v-show="dataOpenSideBar">Meio Mabiente</span></router-link>
        </div>
        <div class="py-4 rounded-sm cursor-pointer text-gray-300 hover:bg-gray-950 hover:text-gray-100">
            <router-link to="/" class="px-2 flex space-x-2 text-sm"><span class="pi pi-building-columns ml-2 mr-2 " v-toolpit-right="Dashboard"></span><span v-show="dataOpenSideBar">Previdência Municipal</span></router-link>
        </div>
        <div class="py-4 rounded-sm cursor-pointer text-gray-300 hover:bg-gray-950 hover:text-gray-100">
            <router-link to="/" class="px-2 flex space-x-2 text-sm"><span class="pi pi-wrench ml-2 mr-2 " v-toolpit-right="Dashboard"></span><span v-show="dataOpenSideBar">Qualificação e Trabalho</span></router-link>
        </div>
        <div class="py-4 rounded-sm cursor-pointer text-gray-300 hover:bg-gray-950 hover:text-gray-100">
            <router-link to="/" class="px-2 flex space-x-2 text-sm"><span class="pi pi-truck ml-2 mr-2 " v-toolpit-right="Dashboard"></span><span v-show="dataOpenSideBar">Saúde</span></router-link>
        </div>
        <div class="py-4 rounded-sm cursor-pointer text-gray-300 hover:bg-gray-950 hover:text-gray-100">
            <router-link to="/" class="px-2 flex space-x-2 text-sm"><span class="pi pi-building ml-2 mr-2 " v-toolpit-right="Dashboard"></span><span v-show="dataOpenSideBar">Serviços Urbanos</span></router-link>
        </div>
        <div class="py-4 rounded-sm cursor-pointer text-gray-300 hover:bg-gray-950 hover:text-gray-100">
            <router-link to="/" class="px-2 flex space-x-2 text-sm"><span class="pi pi-palette ml-2 mr-2 " v-toolpit-right="Dashboard"></span><span v-show="dataOpenSideBar">Servidor Municipal</span></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    props: {
        dataOpenSideBar: Boolean
    },
}
</script>

<style>
.v-tooltip-right{
    font-size: 10px !important;
}

#side-bar {
    overflow: visible;
    transition: 300ms;
}

.side-bar-visible {
    width: 300px !important;
}

.side-bar-close {
    width: 50px !important;
}
</style>