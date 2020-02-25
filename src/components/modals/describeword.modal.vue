
<template>
  <div>
    <modal name="modalnewplayer" @before-close="this.beforeClose">
      <v-container fluid>
        <v-row class="pa-4">
          <v-col cols="12" class="text-center">
              Décrivez votre mot
          </v-col>
          <v-col cols="12" class="text-center">
              {{ this.player.name }} commence
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
 * Previent quel joueur commence à décrire son mot
 */
import { Player } from '@/prototypes/player.prototype';

export default {  
  props: {
    beforeClose: {
      type: Function,
      default: () => undefined,
    },
    
    // Affiche le nom du joueur qui commence à décrire son mot
    player: {
      type: Object,
      default: () => new Player(),
    },
  },
  methods: {
    hide() {
      this.$emit("before-close");
      this.$modal.hide("modalnewplayer");
    },
    show() {
      this.$modal.show("modalnewplayer");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>