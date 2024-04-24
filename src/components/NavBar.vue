<template>
  <div id="nav">
    <div>
      <b-card title="Card Title" no-body>
        <b-card-header header-tag="nav">
          <b-nav card-header tabs>
            <b-nav-item variant="primary" href="/" :active="false">Home</b-nav-item>
            <b-nav-item variant="primary" v-if="isLoggedIn" @click="logout">Logout</b-nav-item>
            <b-nav-item variant="primary" v-if="!isLoggedIn" href="/register">Register</b-nav-item> 
            <b-nav-item variant="primary" v-if="!isLoggedIn" href="/login">Login</b-nav-item>
          </b-nav>
        </b-card-header>
      </b-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    async logout() {
      await this.$store.dispatch("LogOut");
      this.$router.push("/login");
    },
  },
};
</script>
<style>
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
a:hover {
  cursor: pointer;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
