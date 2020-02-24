<template>
  <div>
    <modal name="modalshowword" @before-close="this.beforeClose">
      <v-container fluid>
        <v-row class="pa-4">
          <v-col cols="12" class="text-center">
              {{ this.player.name }}
          </v-col>
          <v-col cols="12" class="text-center">
              Ton mot est :
          </v-col>
          <v-col cols="12" class="text-center">
              {{ this.player.word }}
          </v-col>
          <v-col cols="12" class="text-center">
              <v-btn color="success" @click="this.hide">OK</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </modal>
  </div>
</template>

<script>
/**
 * Montre le mot à un joueur (attention à ne pas le montrer aux autres)
 */

import { Player } from '@/prototypes/player.prototype';
export default {
  data() {
    return {
      name: ""
    };
  },
  props: {
    // Permet d'afficher le nom du joueur qui doit voir le mot du joueur à afficher
    player: {
      type: Object,
      default: () => new Player(),
    },

    // Le mot secret du joueur
    word: {
        type: String,
        default: "No word",
    },

    beforeClose: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    hide() {
      this.$emit("before-close");
      this.$modal.hide("modalshowword");
    },
    show() {
      this.$modal.show("modalshowword");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>