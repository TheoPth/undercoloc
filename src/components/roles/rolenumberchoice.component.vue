<template>
  <div>
    <v-card-text v-if="player">
      <v-row class="mb-4" justify="space-between">
        <v-col class="text-left">
          <span class="display-3 font-weight-light" v-text="nbOfRole"></span>
          <span class="subheading font-weight-light mr-1">{{ this.name }}</span>
        </v-col>
      </v-row>

      <v-slider v-model="nbOfRole" track-color="grey" always-dirty :min="min" :max="max">
        <template v-slot:prepend>
          <v-icon @click="decrease">mdi-minus</v-icon>
        </template>

        <template v-slot:append>
          <v-icon @click="increase">mdi-plus</v-icon>
        </template>
      </v-slider>
    </v-card-text>

    <v-row v-else>
      <v-col class="text-center">
        <v-icon @click="decrease" class="mr-3">mdi-minus</v-icon>
        <span class="display-3 font-weight-light mr-3" v-text="nbOfRole"></span>
        <span class="subheading font-weight-light mr-3">{{ this.name }}</span>
        <v-icon @click="increase" class="ml-3">mdi-plus</v-icon>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nbOfRole: this.nbDefault
    };
  },
  watch: {
    nbOfRole(newValue) {
      this.$emit("newValue", parseInt(newValue));
    },

    // Si le max diminue, diminution du nombre de rôle possible (pas en dessous de 0)
    max(newValue) {
      newValue < this.nbOfRole && newValue > 0 ? (this.nbOfRole -= 1) : null;
    }
  },
  props: {
    name: {
      type: String,
      default: ""
    },
    player: {
      type: Boolean,
      default: true
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
      if (this.nbOfRole < this.max) {
        this.nbOfRole += 1;
      }
    },
    decrease() {
      if (this.nbOfRole > this.min) {
        this.nbOfRole -= 1;
      }
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
div {
  -webkit-touch-callout: none !important;
  -webkit-user-select: none !important;
  -khtml-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  -o-user-select: none !important;
  user-select: none !important;
}

i {
    -webkit-border-radius: 0px;
    -moz-border-radius: 0px;
    -ms-border-radius: 0px;
    -o-border-radius: 0px;
    border-radius: 0px;
    outline: none;
    border: none;

}
i:active {
  border-style: outset;
  border: none;
}
</style>