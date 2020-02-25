<template>
  <v-container fluid>
    
    <grid-player :players="this.players" @clickCard='openAskName'></grid-player>
    
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

// MODALS
import DescribeWord from '@/components/modals/describeword.modal';

// LOGIC
import RoleService from '@/services/role.service';

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
  mounted () {
    // Début de la partie, choix du joueur à commencer
    const indexFirstPlayer = RoleService.getIndexFirstPlayer(this.players, 0);
    this.startingPlayer = this.players[indexFirstPlayer];
    this.$refs.describeWord.show();
  },
};
</script>

<style lang="scss" scoped>
</style>