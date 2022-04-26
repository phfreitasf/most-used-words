<template>
  <v-app>
    <v-app-bar
      app
      shrink-on-scroll
      prominent
      dark
      src="https://picsum.photos/1920/1080?random"

    >
      <v-toolbar-title>Most Used Words</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <vHome></vHome>
    </v-main>
  </v-app>
</template>

<script>
import vHome from "./components/Home.vue";
export default {
  name: "App",

  components: { vHome },

  data: () => ({
    //
  }),
};
</script>
