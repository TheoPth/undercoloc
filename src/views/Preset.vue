<template>
  <v-container fluid>
    <!-- Affiche la grille des joueurs -->
    <v-row>
      <v-col class="text-center" v-for="(player, index) in this.players" :key="index" cols="4">
        <player-card :player='player' class="thumbPlayer" @click="openAskName(index)"></player-card>
      </v-col>
    </v-row>

    <!-- Les modals utilisés dans la phase d'inscription des joueurs. 
    Ils doivent être ouverts via leur nom pour s'afficher (.show())-->
    <show-word ref="showWord" :player='this.players[this.currentCard]' @before-close="this.showWord"></show-word>

    <ask-name-modal ref="askNameModal" @before-close="this.retrieveName"></ask-name-modal>

    <new-player-turn ref="newPlayerTurn" :currentTurn="this.numPlayer"></new-player-turn>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

import { Player } from "@/prototypes/player.prototype";

// COMPOSANTS
import AskNameModal from "@/components/modals/askname.modal";
import ShowWord from "@/components/modals/showword.modal";
import NewPlayerTurn from "@/components/modals/newplayerturn.modal";
import PlayerCard from "@/components/card.component";

// ROLES
import RoleService from "@/services/role.service";
import Roles from "@/prototypes/roles.enum";

export default {
  name: "preset",
  components: {
    AskNameModal,
    ShowWord,
    NewPlayerTurn,
    PlayerCard,
  },
  data() {
    return {
      currentCard: undefined,
    };
  },
  computed: {
    ...mapGetters(["players", "nbPlayer", "config", "words"]),
      
      // Permet d'afficher le numéro du joueur qui va s'inscrire
      numPlayer() {
        return this.players.length - this.players.filter(player => player.role == Roles.player).length + 1;
      }
    
  },

  methods: {
    async newPlayer() {
      /**
       * Crée un nouveau joueur en demandant un nom à l'utilisateur
       */

      this.$refs.newPlayerTurn.show();
    },

    // Methodes pour récupérer le nom du joueur
    openAskName(index) {
      this.currentCard = index;
      this.$refs.askNameModal.show();
    },
    async retrieveName(name) {
      /**
       * S'execute après la fermeture du modal "ask-name-modal"
       * Récupère le nom et met à jour le joueur
       */
      let player = this.players[this.currentCard];
      player.name = name;
      player.role = RoleService.getRandomRole(this.players, this.config);
      player.word = this.words[player.role];

      this.$store.dispatch("updatePlayer", {
        player: player,
        index: this.currentCard
      });
      
      this.$refs.showWord.show();
    },

    showWord() {
      /**
       * S'execute après la fermeture du modal "ask-name-modal"
       */
      
      // Fin de l'inscription d'un joueur. Nouvelle inscription si reste joueur sans role
      if (this.players.filter(player => player.role == Roles.player).length > 0) {
        this.newPlayer();
      } else {
        this.endPreset();
      }
    },

    endPreset() {
      this.$router.push('/play');
    } 
  },

  mounted() {
    // Initialisation des joueurs anonymes
    // Permet d'afficher les cartes vides
    const players = [];
    for (let i = 0; i < this.nbPlayer; i++) {
      players.push(new Player());
    }

    this.$store.dispatch("setPlayers", players);

    // Lance le début de l'inscription des joueurs
    this.newPlayer();
  }
};
</script>

<style>
.thumbPlayer {
  width: 100px;
  height: 100px;
  margin: auto;
}
</style>