import axios from "axios";

const state = {
  user: null
};

const getters = {
  isAuthenticated: (state) => !!state.user,
  StateUser: (state) => state.user,
};

const actions = {
  async Register({ dispatch }, form) {
    await axios.post("users/create", form);
    let UserForm = new FormData();
    UserForm.append("username", form.username);
    UserForm.append("email", form.email);
    UserForm.append("password", form.password);
    await dispatch("LogIn", UserForm);
  },

  async LogIn({ commit }, json) {
    await axios.post("auth/login", json);
    const email= json.email
    await commit("setUser", email);
  },

  async LogOut({ commit }) {
    let user = null;
    commit("logout", user);
  },
};

const mutations = {
  setUser(state, username) {
    state.user = username;
  },
  logout(state, user) {
    state.user = user;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
