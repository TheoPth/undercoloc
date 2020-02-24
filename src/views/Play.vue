<template>
  <v-container fluid>
    <!-- Affiche la grille des joueurs -->
    <v-row>
      <v-col class="text-center" v-for="(player, index) in this.players" :key="index" cols="4">
        <player-card :player="player" class="thumbPlayer" @click="openAskName(index)"></player-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

// MODALS
import DescribeWord from '@/components/modals/describeword.modal'; 

import { Player } from "@/prototypes/player.prototype";
import PlayerCard from "@/components/card.component";
export default {
  name: "play",
  components: {
    PlayerCard,
    DescribeWord,
  },
  computed: {
    ...mapGetters(["players", "nbPlayer", "config"]),
  },
  mounted () {
    // Début de la partie
    
  },
};
</script>

<style lang="scss" scoped>
</style>