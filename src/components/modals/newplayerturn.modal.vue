
<template>
  <div>
    <modal name="modalnewplayer" @before-close="this.beforeClose">
      <v-container fluid>
        <v-row class="pa-4">
          <v-col cols="12" class="text-center">
              Joueur {{ this.currentTurn }}
          </v-col>
          <v-col cols="12" class="text-center">
              Choisis une carte
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
 * Previent qu'un nouveau joueur doit rentrer son nom pendant la phase d'inscription
 */
export default {
  
  props: {
    beforeClose: {
      type: Function,
      default: () => {}
    },
    
    // Montre le numéro du joueur (3 si c'est le troisième à s'inscrire)
    currentTurn: {
      type: Number,
      default: {},
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