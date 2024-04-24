<template>
    <div class="container">
      <div v-if="User">
        <h1>Bienvenido</h1>
      </div>
      <div v-else>
        <h1>Por favor inicia sesión</h1>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters } from "vuex";
  
  export default {
    name: "Welcome",
    components: {},
    data() {
      return {
        form: {
          title: "",
          write_up: "",
        },
      };
    },
    computed: {
      ...mapGetters({ User: "StateUser" }),
    },
  };
  </script>
  <style scoped>
  * {
    box-sizing: border-box;
  }
  </style>
  