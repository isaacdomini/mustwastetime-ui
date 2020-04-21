<script lang="ts">
import Joke from "@/model/joke";
import { Component, Vue, Prop } from "vue-property-decorator";
import JokesAPI from '../services/jokesapi';

@Component
export default class JokeView extends Vue {
  @Prop() private joke!: any;
  @Prop() private loading!: boolean;
}
</script>

<template>
  <div class="joke-content">
    <div v-if="this.loading">
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
    <div v-else>
      {{joke.toString()}}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.joke-content {
  margin: 20px;
}
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #500;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>