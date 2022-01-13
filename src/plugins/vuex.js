import Vue from 'vue'
import Vuex from 'vuex'

import userService from '../services/userService';
import storage from '../plugins/storage.js';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {// stocke les données partageable avec les composants
    task:null,
    user:null,
    services:{
      user: userService,
      storage: storage
    }
  },
  mutations: { // permet les modif de ces donnees
      saveUser(state, newUser){
      state.user = newUser;
    },
    deleteUser() {
      store.replaceState({
        user: {}

      })
    },
  },
});

const userData = storage.get('userData');
if(userData){
  store.commit('saveUser', userData)
}

export default store;