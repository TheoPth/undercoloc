<template>


</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  components: {},
  name: "Homepage",
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["nameOfGetter"])
  },
  methods: {
    play() {
      this.$router.push("/play");
    }
  }
};
</script>

<style lang="scss" scoped>

</style>