<template>
  <div>
    <v-row>
      <v-col style="margin: auto;">{{ this.name }}</v-col>
      <v-col class="text-center">
        <v-row>
          <v-col col="4">
            <v-btn v-if="this.nbOfRole > this.min" @click="this.decrease">-</v-btn>
          </v-col>
          <v-col col="4">
            <label>{{ this.nbOfRole }}</label>
          </v-col>
          <v-col col="4">
            <v-btn v-if="this.nbOfRole < this.max" @click="this.increase">+</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nbOfRole: this.nbDefault,
    };
  },
  watch: {
    nbOfRole(newValue) {
      this.$emit("newValue", parseInt(newValue));
    },
    
    // Si le max diminue, diminution du nombre de rôle possible (pas en dessous de 0)
    max(newValue) {
        newValue < this.nbOfRole && newValue > 0 ? this.nbOfRole -= 1 : null
    }
  },
  props: {
    name: {
      type: String,
      default: ""
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 1
    },
    nbDefault: {
      type: Number,
      default: 1
    }
  },
  methods: {
    increase() {
      this.nbOfRole += 1;
    },
    decrease() {
      this.nbOfRole -= 1;
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  border: black solid 1px;
  border-radius: 2px;
  padding: 3px;
}
</style>