<template>
  <span>
    <v-touch v-on:tap="onTap">
      <span v-for="i in this.bubbleCount" v-bind:key="i">
        <Bubble :pos="pos(i)" :colorScheme="colorScheme"></Bubble>
      </span>
    </v-touch>

    <Modal v-show="isModalVisible" @close="closeModal">
      <template v-slot:content>
        <JokeView v-bind:joke="joke" v-bind:loading="loading"></JokeView>
      </template>
    </Modal>
  </span>
</template>

<script>
// @ is an alias to /src
import Bubble from "@/components/Bubble.vue";
import JokeView from "@/components/JokeView.vue";
import { Vue } from "vue-property-decorator";
import VueTouch from "vue-touch";
import Modal from "@/components/Modal.vue";
import Joke from "../model/joke";
import JokesAPI from "../services/jokesapi";

Vue.use(VueTouch, { name: "v-touch" });

export default {
  name: "Home",
  components: {
    Bubble,
    Modal,
    JokeView
  },
  props: {
    bubbleCount: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      pos: i => {
        return (i / this.bubbleCount) * 100;
      },
      isModalVisible: false,
      joke: new Joke(undefined, undefined, undefined),
      jokesApi: new JokesAPI(),
      loading: true,
      colorScheme: 'grayscale'
    };
  },
  created() {
    window.addEventListener('keypress', this.onKeyPress);
  },
  destroyed() {
    window.removeEventListener('keypress', this.onKeyPress);
  },
  methods: {
    mounted() {
      this.resetJoke();
    },
    onTap() {
      console.log("Tapped");
      this.showModal();
      this.$store.commit('clickBubble');
      console.log('number of bubblesClicked',this.$store.state.bubblesClicked)
    },
    onKeyPress(e) {
      if (e.keyCode == 109) this.toggleColorScheme('multicolor');
      if (e.keyCode == 98) this.toggleColorScheme('blue');
    },
    toggleColorScheme(scheme) {
      this.colorScheme = this.colorScheme == scheme ? 'grayscale' : scheme;
    },
    showModal() {
      this.resetJoke();
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      this.resetJoke();
    },
    async resetJoke() {
      // const vm = this;
      console.log("waiting");
      this.loading = true;
      this.joke = await this.jokesApi.getJoke();
      this.loading = false;
    }
  }
};
</script>

<style>
body {
  background-color: black;
  z-index: -1;
  overflow: hidden;
}
</style>
