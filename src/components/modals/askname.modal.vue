<template>
  <div>
    <modal name="modalaskname" @before-close="this.beforeClose">
      <v-container fluid>
        <v-row class="pa-4">
          <v-col cols="12">
            <v-text-field v-if="this.name == ''" counter="20" maxlength="20" v-model="name" placeholder="Votre nom" type="text"></v-text-field>
            <!-- permet le submit seulement si un nom est rentré -->
            <v-text-field v-else v-model="name" counter="20" maxlength="20"   placeholder="Votre nom" type="text" v-on:keyup.enter="validateName"></v-text-field>
          </v-col>
          <v-col cols="12" class="text-center">
            <v-btn v-if="this.name == ''" color="disabled">Lire mon mot</v-btn>
            <v-btn v-else color="success" @click="validateName">Lire mon mot</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </modal>
  </div>
</template>

<script>
/**
 * Demande un nom à un nouveau joueur durant la phase d'inscription
 */
export default {
  data() {
    return {
        // Le nom que le joueur est en train de fournir
      name: "",
      
    };
  },
  props: {
    beforeClose: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    // Retourne le nom choisi
    validateName() {
      this.$emit("before-close", this.name);
      // Reset de data
      this.name = "";
      this.$modal.hide('modalaskname')
    },
    show() {
      this.$modal.show("modalaskname");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>