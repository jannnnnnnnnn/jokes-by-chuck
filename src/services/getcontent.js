export function getContent() {
  console.log("i am in getting content function");
  const endpoint = "https://api.chucknorris.io/jokes/random";

  return fetch(endpoint).then((res) => res.json());
}
