<template>
  <div :style="styles"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { functions } from "../helpers/shared";

@Component
export default class Bubble extends Vue {
  // @Prop() private bubbleCount!: number;
  @Prop() private pos!: number;
  @Prop() private colorScheme!: string;

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
    ][functions.randomInt(6)];
  }

  private get bgColor() {
    switch(this.colorScheme) {
      case 'blue':
        return this.randomColor() + 'FFFF';
      case 'multicolor':
        return [...Array(3)].map(x => this.randomColor()).join('');
      default:
        return this.randomColor().repeat(3);
    }
  }

  private randomColor = () => functions.randomInt(50, 255).toString(16).padStart(2, "0");

  private get position() {
    return this.pos + 5;
  }

  private get delay() {
    return functions.randomNumber(0, 15);
  }

  private get duration() {
    return functions.randomNumber(10, 25);
  }

  private get size(): number {
    // if (this.size === -1) this.size = functions.randomInt(100, 20);
    // console.log(this.size)
    // size = size === -1 ? functions.randomInt(100) : size
    return functions.randomInt(100, 50);
    // return this.size;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@keyframes verticalup {
  0% {
    transform: translateY(20);
  }
  100% {
    transform: translateY(-130vh);
  }
}
@keyframes verticaldown {
  0% {
    transform: translateY(-130vh);
  }
  100% {
    transform: translateY(130vh);
  }
}
@keyframes diagonalupright {
  0% {
    transform: translateY(-130vh);
  }
  100% {
    transform: translateY(130vh) translateX(130vw);
  }
}
@keyframes diagonalupleft {
  0% {
    transform: translateY(-130vh);
  }
  100% {
    transform: translateY(130vh) translateX(-130vw);
  }
}
@keyframes diagonaldownright {
  0% {
    transform: translateY(20);
  }
  100% {
    transform: translateY(-130vh) translateX(130vw);
  }
}
@keyframes diagonaldownleft {
  0% {
    transform: translateY(20);
  }
  100% {
    transform: translateY(-130vh) translateX(-130vw);
  }
}
</style>
