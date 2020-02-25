<template>
  <v-row class="justify-center">
    <v-col cols="12" sm="6" md="6">
      <v-card flat>
        <v-row>
          <v-col
            v-for="(player, index) in this.players"
            :key="index"
            class="d-flex child-flex"
            cols="3"
          >
            <player-card :player="player" @click="clickCard(index)"></player-card>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import PlayerCard from "@/components/card.component";

export default {
  name: "GridPlayer",
  components: {
    PlayerCard
  },
  props: {
    players: {
      type: Array,
      default: []
    }
  },
  methods: {
    clickCard(index) {
      this.$emit("clickCard", index);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>