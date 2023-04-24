import React from "react";
import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
import CareScale from "./CareScale";
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
            <CareScale careType="water" scaleValue={plant.water} />
            <CareScale careType="light" scaleValue={plant.light} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
