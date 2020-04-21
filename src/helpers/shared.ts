export const functions = {
  randomInt: (max: number, min = 0): number => {
    return Math.floor(Math.random() * Math.floor(max - min)) + min;
  },
  randomNumber: (max: number, min = 0): number => {
    return Math.random() * (max - min) + min;
  }
};
