export default class Joke {
  constructor(
    joke: string | undefined,
    setup: string | undefined,
    delivery: string | undefined
  ) {
    this.joke = joke;
    this.delivery = delivery;
    this.setup = setup;
  }

  private joke: string | undefined;
  private setup: string | undefined;
  private delivery: string | undefined;
  private type: string | undefined;

  static fromResponse(response: import("axios").AxiosResponse<any>): Joke {

    console.log(response);
    if (response.data.error == false) {
      if (response.data.type == "twopart") {
        const joke = new Joke(undefined, response.data.setup, response.data.delivery);
        joke.type = "twopart";
        return joke
      } else if (response.data.type == "single") {
        const joke = new Joke(response.data.joke, undefined, undefined);
        joke.type = "single";
        return joke;
      }
    }
    // throw new Error("Stupid system can't even get a joke! smh.");
    const joke = new Joke("Stupid system can't even get a joke! smh.", undefined, undefined);
    joke.type = "single";
    return joke;
  }

  public toString(): string{
    if(this.type === "twopart"){
      return `${this.setup}
      ...
      ${this.delivery}\n`
    }else {
      return `${this.joke}\n`
    }
  }
}
