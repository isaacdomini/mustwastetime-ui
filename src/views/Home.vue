<template>
  <span>
    <v-touch v-on:tap="onTap">
      <span v-for="i in this.bubbleCount" v-bind:key="i">
        <Bubble :pos="pos(i)"></Bubble>
      </span>
    </v-touch>

    <Modal v-show="isModalVisible" @close="closeModal" />
  </span>
</template>

<script>
// @ is an alias to /src
import Bubble from "@/components/Bubble.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import VueTouch from "vue-touch";
import Modal from "@/components/Modal.vue";

Vue.use(VueTouch, { name: "v-touch" });

export default {
  name: "Home",
  components: {
    Bubble,
    Modal
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
      isModalVisible: false
    };
  },
  methods: {
    onTap() {
      console.log("Tapped");
      this.showModal();
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
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
