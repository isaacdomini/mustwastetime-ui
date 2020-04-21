<template>
  <div class="modal-mask" v-show="show" transition="modal">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header">default header</slot>
        </div>

        <div class="modal-body">
          <slot name="body">default body</slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button class="modal-button" @click="close">Close</button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Bubble extends Vue {
  // @Prop() private bubbleCount!: number;
  @Prop() private pos!: number;

  get styles() {
    return {
      position: "absolute",
      "list-style": "none",
      display: "block",
      "background-color": `#${this.bgColor}`,
      /* biggest bubble */
      bottom: "-100px",
      animation: `${this.animationStyle} 20s infinite`,
      "transition-timing-function": "linear",
      "animation-timing-function": "linear",
      /* bubble size for width/height */
      width: `${this.size}px`,
      height: `${this.size}px`,
      "border-radius": `${this.size}px`,
      /* bubbleCount/100 percent (+/- random 5) */
      left: `${this.pos}%`,
      /* random second 0 for immediate */
      "animation-delay": `${this.delay}s`,
      /* bubble speed */
      "animation-duration": `${this.duration}s`
    };
  }

  // private size = -1;

  private get animationStyle(): string {
    return [
      "verticalup",
      "verticaldown",
      "diagonalupright",
      "diagonalupleft",
      "diagonaldownleft",
      "diagonalupright"
    ][this.randomInt(6)];
  }

  private get bgColor() {
    // console.log(this.animationStyle)
    return this.randomInt(50, 255)
      .toString(16)
      .padStart(2, "0")
      .repeat(3);
  }

  private get position() {
    return this.pos + 5;
  }

  private get delay() {
    return this.randomNumber(0, 15);
  }

  private get duration() {
    return this.randomNumber(10, 25);
  }

  // TODO: move to shared class?
  private randomInt = (max: number, min = 0): number => {
    return Math.floor(Math.random() * Math.floor(max - min)) + min;
  };

  private randomNumber = (max: number, min = 0): number => {
    return Math.random() * (max - min) + min;
  };

  private get size(): number {
    // if (this.size === -1) this.size = this.randomInt(100, 20);
    // console.log(this.size)
    // size = size === -1 ? this.randomInt(100) : size
    return this.randomInt(100, 20);
    // return this.size;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@keyframes verticalup {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-110vh);
  }
}
@keyframes verticaldown {
  0% {
    transform: translateY(-110vh);
  }
  100% {
    transform: translateY(110vh);
  }
}
@keyframes diagonalupright {
  0% {
    transform: translateY(-110vh);
  }
  100% {
    transform: translateY(110vh) translateX(110vw);
  }
}
@keyframes diagonalupleft {
  0% {
    transform: translateY(-110vh);
  }
  100% {
    transform: translateY(110vh) translateX(-110vw);
  }
}
@keyframes diagonaldownright {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-110vh) translateX(110vw);
  }
}
@keyframes diagonaldownleft {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-110vh) translateX(-110vw);
  }
}
</style>
