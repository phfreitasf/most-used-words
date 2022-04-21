<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Most Used Words</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <vHome></vHome>
      
       </v-content>
  </v-app>
</template>

<script>
import vHome from './components/Home.vue'
export default {
  name: "App",

  components: { vHome },

  data: () => ({
    //
  }),
};
</script>
