import axios from "axios";
import fetch from "node-fetch";

const response = await axios.get(
  "http://api.weatherstack.com/current?access_key=eb3fe111717de49f1f06f08674fbf4ea&query=New%20York"
);

console.log(response.data.current.temperature);

await fetch(
  "http://api.weatherstack.com/current?access_key=eb3fe111717de49f1f06f08674fbf4ea&query=New%20York"
)
  .then((response) => response.json())
  .then((r) => console.log(r));
