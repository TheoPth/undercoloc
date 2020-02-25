<template>
  <v-container fluid>
    
    <grid-player :players="this.players" @clickCard='openAskName'></grid-player>
    
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

import { Player } from "@/prototypes/player.prototype";

// COMPONENTS
import GridPlayer from "@/components/gridPlayer.component";

export default {
  name: "play",
  components: {
    GridPlayer
  },
  computed: {
    ...mapGetters(["players", "nbPlayer", "config"]),
  },
};
</script>

<style lang="scss" scoped>
</style>