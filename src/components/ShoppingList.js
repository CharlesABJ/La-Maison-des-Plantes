import React from "react";
import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
function ShoppingList() {
  const plantCategories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );
  return (
    <div>
      <ul>
        {plantCategories.map((cat, index) => (
          <li key={`${cat}-${index}`}>{cat}</li>
        ))}
      </ul>
      <ul className="plant-items-zone">
        {plantList.map((plant) => (
          <li className="plant-items" key={plant.id}>
            {plant.name}
            {plant.isSpecialOffer ? <div className="sales">Soldes</div> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
