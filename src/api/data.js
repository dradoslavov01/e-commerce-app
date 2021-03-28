import * as api from "./api.js";

api.settings.host = "http://localhost:3030";

const moviesHost = "https://imdb8.p.rapidapi.com/auto-complete?";
const movieName = {
  first: encodeURI("q=" + "home"),
  second: encodeURI("q=" + "movies"),
  third: encodeURI("q=" + "fast"),
};

const options = {
  headers: {
    "x-rapidapi-key": "6ddacadffemsh3f7c41a84ac428dp104bf5jsnc0be7264a640",
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
  },
};

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getMovies() {
  const [collOne, collTwo, collThree] = await Promise.all([
    api.get(moviesHost + movieName.first, options),
    api.get(moviesHost + movieName.second, options),
    api.get(moviesHost + movieName.third, options),
  ]);

  const data = [];

  collOne.forEach((element) => data.push(element));
  collTwo.forEach((element) => data.push(element));
  collThree.forEach((element) => data.push(element));

  return data;
}
