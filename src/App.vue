<template>
  <v-app id="inspire">
    
    <!-- Page principale -->
    <v-main>
      <NavBarLeft />
      <!-- insert des routes -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavBarLeft from './Components/NavBarLeft.vue'

export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "Todo", icon: "mdi-format-list-checks", to: "/" },
      { title: "About", icon: "mdi-help-box", to: "/about" },
    ],

  }),
    components: {
    NavBarLeft,

  }
};
</script>