import axios from "axios";
import Joke from "@/model/joke";
export default class IssuesApi {
  //TODO: move to contsants"
  public static API_URL =
    "https://sv443.net/jokeapi/v2/joke/Miscellaneous?blacklistFlags=nsfw,sexist";
  async getJoke(): Promise<Joke> {
    console.log("something is wrong");
    return axios
      .get(IssuesApi.API_URL)
      .then(response => {
        return Joke.fromResponse(response);
      })
      .catch(e => {
        console.log(e);
        return new Joke(undefined, undefined, undefined);
      });
  }
}
