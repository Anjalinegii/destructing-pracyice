import React from "react";
import ReactDOM from "react-dom";
// import animals from "./data";
import cars from "./practice";
// console.log(animals);
// const [cat,dog]=animals;
// console.log(cat)
// console.log(dog)
// providing names of our own
// const {name:nameofcat,sound:soundofcat}=cat;
// const {name:nameofdog,sound:soundofdog}=dog;
// console.log(nameofdog)
// console.log(soundofdog)
// console.log(nameofcat)
// console.log(soundofcat)
// we can also add default values but these values will be shown only if our data doesnt have name and sound of cat otherwise it will show cat and meaw only
// const {name="fluffy",sound="prrr"}=cat;
// console.log(name)
// console.log(sound)
// as we have added foodrequirements also we will use extensive destructuring
// const {name,sound,feeding:{food,water}}=cat;
// console.log(food)
// console.log(water)
// console.log(name)
// console.log(sound)
const [honda, tesla] = cars;
const {
  model: hondaModel,
  speedStats: { topSpeed: hondaTopSpeed },
  coloursByPopularity: [hondaTopColour]
} = honda;
const {
  model: teslaModel,
  speedStats: { topSpeed: teslaTopSpeed },
  coloursByPopularity: [teslaTopColour]
} = tesla;
ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{hondaModel}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
    <tr>
      <td>{teslaModel}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
