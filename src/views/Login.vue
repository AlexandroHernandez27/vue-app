<template>
  <b-card no-body class="overflow-hidden mx-auto mb-2" style="max-width: 50rem">
    <b-row no-gutters align-v="center">
      <b-col md="1"></b-col>
      <b-col md="5">
        <b-img
          src="https://i0.wp.com/inssoftmx.com/wp-content/uploads/2022/01/logo.png?resize=300%2C77&ssl=1"
          alt="Image"
        ></b-img>
      </b-col>
      <b-col md="5">
        <b-card-body title="Login">
          <form @submit.prevent="submit">
            <b-form-input
              class="mx-auto"
              style="width: 20rem"
              v-model="email"
              type="text"
              placeholder="Enter your email:"
            ></b-form-input>
            <b-form-input
              class="mx-auto"
              style="width: 20rem"
              v-model="password"
              type="password"
              placeholder="Enter your password:"
            ></b-form-input>
            <b-button pill variant="primary" type="submit" style="margin: 5px"
              >Login</b-button
            >
          </form>
          <p v-if="showError" id="error">Username or Password is incorrect</p>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  components: {},
  data() {
    return {
      email: "",
      password: "",
      showError: false,
    };
  },
  methods: {
    ...mapActions(["LogIn"]),
    async submit() {
      let json = {
        email: this.email,
        password: this.password,
      };
      try {
        await this.LogIn(json);
        this.$router.push("/");
        this.showError = false;
      } catch (error) {
        this.showError = true;
      }
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

input {
  margin: 10px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  padding: 10px;
  border-radius: 30px;
  text-align: center;
}
#error {
  color: red;
}
</style>
