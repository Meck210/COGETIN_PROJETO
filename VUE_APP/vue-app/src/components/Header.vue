<template>
    <ul>
        <li><a href="#">HOME</a></li>
        <li><a href="#">PROJETOS</a></li>
        <li><a href="#">Contatos</a></li>
        <li v-if="esta_logado"><a href="">Meu Perfil</a></li>
        <div>
            <h3 v-for="obj in todos" v-bind:key="obj.id">{{ obj.title }}</h3>
        </div>

    </ul>
</template>

<script>
export default {
    name: 'Header',
    props: ['esta_logado'],
    data() {
        return {
            todos: [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  }
]
        }
    }
}
</script>

<style scoped>
ul {
    list-style: none;
    display: flex;
    background-color: #999;
}
li {
    margin-right: 10px;
}

a {
    color: #ddd;
    text-decoration: none;
    transition: .5s;
}

a:hover {
    background-color: yellow;
}
</style>
