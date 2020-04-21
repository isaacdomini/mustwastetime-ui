<template>
  <v-touch v-on:tap="onTap">
    <span v-for="i in this.bubbleCount" v-bind:key="i" >
      <Bubble :pos="pos(i)"></Bubble>
    </span>
  </v-touch>
</template>

<script>
// @ is an alias to /src
import Bubble from "@/components/Bubble.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import VueTouch  from 'vue-touch';

Vue.use(VueTouch, {name: 'v-touch'})

export default {
  name: "Home",
  components: {
    Bubble
  },
  props: {
    bubbleCount: {
      type: Number,
      default: 100,
    }
  },
  data() {
    return {
      pos: (i) => {
        return (i/this.bubbleCount)*100
      }
    }
  },
  methods: {
    onTap() {
      console.log("Tapped");
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