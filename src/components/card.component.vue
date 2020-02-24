<template>
  <div>
    <v-img
      v-if="this.player.role == 'player'"
      :src="require('@/assets/unknowplayer.png')"
      aspect-ratio="1"
      @click='click'
    ></v-img>
    <v-img v-else aspect-ratio="1" :src="require('@/assets/man.png')"></v-img>
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
      default: () => new Player(),
      
    }
  },
  methods: {
      click() {
        this.$emit('click');
      }
  },
};
</script>

<style lang="scss" scoped>
</style>