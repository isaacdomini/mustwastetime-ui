<template>
  <span>
    <h1>This is the suggestion page</h1>

    <input type = "text" v-model="name" placeholder="Name Here">
    <br/>
    <input type = "text" v-model="email" placeholder="Email Here">
    <br/>
    <textarea v-model="suggestArea" placeholder="Shitty suggestions here"></textarea>
    <button v-on:click="submit(name, email, suggestArea, $event)">Submit</button>
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { functions } from "../helpers/shared";

@Component
export default class Suggestion extends Vue {

  name = ''
  email = ''
  suggestArea = ''

  submit() {
    console.log("Hwllo")
    //todo call issue-api post with parameters if successful return herpderp200
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>



