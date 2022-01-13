<template>
  <div>
  <!-- Menu de navigation gauche -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> TodoList yves </v-list-item-title>
          <v-list-item-subtitle> La meilleur appli </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <!-- le to (recuperer par le script) va generer automatiquement le lien -->
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Barre de navigation top -->
    <v-app-bar
      app
      color="primary"
      dark
      src="https://picsum.photos/1920/1080?random"

    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <!-- Permet d afficher ou pas la barre de nav gauche -->
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <span>appli Todo</span>
        <span  v-if="user">bonjour {{ user.user_nicename }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn v-if="!user" to="/user" icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn v-if="user" to="/logout" icon>
        <v-icon>mdi-exit-run</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    </div>
</template>

<script>
import store from '../plugins/vuex';

export default {

  data: () => ({
    drawer: null,
    store: store,
    items: [
      { title: "Todo", icon: "mdi-format-list-checks", to: "/" },
      { title: "About", icon: "mdi-help-box", to: "/about" },     
     { title: "l'équipe", icon: "mdi-help-box", to: "/Team" },
    ],
  }),
   computed: {
      user() {
      return this.$store.state.user;
    }
  }
}
</script>

<style>

</style>