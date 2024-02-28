import { animals } from "./animals";
import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

const displayFact = (e) => {
  const animal = e.target.alt;
  const randNum = Math.floor(Math.random() * animals[animal].facts.length);
  const funFact = animals[animal].facts[randNum];
  // add fun fact to screen
  document.getElementById("fact").innerHTML(funFact);
};

const title = "";
const background = (
  <img className="background" alt="ocean" src="/images/ocean.jpg" />
);

// create array of images tp be displayed
const images = [];
for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
    />
  );
}
const animalFacts = (
  <div>
    <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>;
    {background}
    <div className="animals">{images}</div>
    <p id="fact"></p>
  </div>
);

root.render(animalFacts);
