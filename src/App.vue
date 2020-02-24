<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
// @ is an alias to /src
import Home from '@/views/Home.vue'

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
