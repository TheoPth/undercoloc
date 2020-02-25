<template>
  <div>
    <v-card
      @click="click"
      raised
      class="d-flex playercard"
      height="100%"
      v-if="this.player.role == 'player'"
    >
      <v-img src="../assets/unknowplayer.png" class="grey lighten-2"></v-img>
    </v-card>

    <v-card v-else raised :color="stringToHslColor(this.player.name)" height="100%" dark>
      <v-card-title class="headline justify-center">{{this.computeShortname(this.player.name)}}</v-card-title>
      <v-card-text class="text-center display-1 font-weight-bold">{{ this.player.name }}</v-card-text>
    </v-card>

  </div>
</template>

<script>
import { Player } from "@/prototypes/player.prototype";

export default {
  name: "playerCard",
  props: {
    // Le joueur à afficher
    player: {
      type: Object,
      default: () => new Player()
    }
  },
  methods: {
    click() {
      this.$emit("click");
    },
    computeShortname(name) {
      var initials = name.split(" ").map(word => word.split("")[0]);
      if (initials.length > 1) {
        return initials[0] + initials[1];
      } else {
        return initials[0];
      }
    },
    stringToHslColor(str) {
      var hash = 0;
      for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      var h = hash % 360;
      return "hsl(" + h + ", " + 50 + "%, " + 80 + "%)";
    }
  }
};
</script>

<style lang="scss" scoped>
.playercard:hover {
  transform: scale(1.15);
}
</style>
