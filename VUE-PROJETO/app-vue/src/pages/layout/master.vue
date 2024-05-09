<template>
  <div class="w-full h-full">
    <div class="w-full h-full flex">
      <Sidebar :dataOpenSideBar="openSidebar" />
      <div class="w-full h-full">
        <HeaderTop :dataOpenSideBar="openSidebar" :clickHambuger="toggleSidebar"/>
        <div class="w-full h-full">
          <router-view></router-view>
        </div>
      </div>
    </div>
      <FooterDown :dataOpenSideBar="openSidebar"/>  
  </div>
    
</template>

<script>
import HeaderTop from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
import FooterDown from '@/components/Footer.vue';


export default {
  components: {HeaderTop, Sidebar, FooterDown},
    name: 'master',
    data() {
      return {
        openSidebar: true
      }
    },
      methods: {
        toggleSidebar() {
          this.openSidebar = !this.openSidebar
        }
      }
}
</script>