<template>
  <div>
    <Header :esta_logado="true"></Header>
    <PrimeiroComponent />
    <p class="paragrafo-pai">o da de de app e: {{ testando }}</p>
    <LifeCycle />
    <Pessoa />
  </div>

</template>


<script>
import LifeCycle from './components/LifeCycle.vue';
import PrimeiroComponent from './components/PrimeiroComponent.vue';
import Pessoa from './components/Pessoa.vue';
import Header from './components/Header.vue';
export default {
  name: 'App',
  components: {
    PrimeiroComponent,
    LifeCycle,
    Pessoa,
    Header
  },
  data() {
    return {
      testando: "teste"
    }
  }
}
  </script>


<style>
body {
  background-color: turquoise;
  color: #fff;
}

a {
  color: red;
}

.teste {
  background-color: black;
}

</style>
