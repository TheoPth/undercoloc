<template>
  <v-container fluid>
    <v-row>
      <v-col class="text-center">
        <role-number-choice
          name="Joueurs :"
          :nbDefault="3"
          @newValue="newNbPlayer"
          :player="true"
          :min="3"
          :max="20"
        ></role-number-choice>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="text-center">
        <role-number-choice
          name="Undercover"
          @newValue="setNbUndercover"
          :player="false"
          :min="this.minRole"
          :max="this.maxUndercover"
          :nbDefault="this.nbUndercover"
        ></role-number-choice>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="text-center">
        <role-number-choice
          name="Mister White"
          @newValue="setNbWhite"
          :player="false"
          :min="this.minRole"
          :max="this.maxWhite"
          :nbDefault="this.nbWhite"
        ></role-number-choice>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="text-center">
        <span class="display-3 font-weight-light" v-text="this.nbCivil"></span>
        <span class="subheading font-weight-light mr-1">Civils</span>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="text-center">
        <v-btn @click="this.play">PLAY</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import RoleNumberChoice from "@/components/roles/rolenumberchoice.component";

export default {
  components: {
    RoleNumberChoice
  },
  name: "HelloWorld",
  props: {},
  data() {
    return {
      nbPlayers: 3,
      nbUndercover: 1,
      nbWhite: 0
    };
  },
  computed: {
    ...mapGetters(["nameOfGetter"]),
    nbCivil: function() {
      return this.nbPlayers - this.nbWhite - this.nbUndercover;
    },
    maxUndercover: function() {
      return this.maxRole - this.nbWhite;
    },
    maxWhite: function() {
      return this.maxRole - this.nbUndercover;
    },
    minRole: function() {
      return this.nbUndercover + this.nbWhite > 1 ? 0 : 1;
    },
    maxRole: function() {
      return Math.trunc(this.nbPlayers / 2);
    },
    nbRole: function() {
      return this.nbUndercover + this.nbWhite;
    }
  },
  methods: {
    newNbPlayer(nb) {
      this.nbPlayers = nb;
    },
    setNbUndercover(nb) {
      this.nbUndercover = nb;
    },
    setNbWhite(nb) {
      this.nbWhite = nb;
    },
    play() {
      // set final config
      this.$store.dispatch("setConfig", {
        civil: this.nbCivil,
        undercover: this.nbUndercover,
        white: this.nbWhite
      });

      this.$router.push("/preset");
    }
  }
};
</script>
