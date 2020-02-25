<template>
  <v-container fluid>
    <!-- Affiche la grille des joueurs -->
    <v-row>
      <v-col class="text-center" v-for="(player, index) in this.players" :key="index" cols="4">
        <player-card :player="player" class="thumbPlayer" @click="openAskName(index)"></player-card>
      </v-col>
    </v-row>

    <!-- Les modals doivent être ouverts pour être visibles (.show()) -->
    <describe-word ref="describeWord" :player='this.startingPlayer'></describe-word>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

// MODALS
import DescribeWord from '@/components/modals/describeword.modal';

// LOGIC
import RoleService from '@/services/role.service';

import { Player } from "@/prototypes/player.prototype";
import PlayerCard from "@/components/card.component";

export default {
  name: "play",
  components: {
    PlayerCard,
    DescribeWord,
  },
  data() {
      return {
          startingPlayer: undefined
      }
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