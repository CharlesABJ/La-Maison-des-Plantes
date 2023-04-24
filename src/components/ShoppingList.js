import React from "react";
import { plantList } from "../datas/plantList";
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
      <ul>
        {plantList.map((plant) => (
          <li key={plant.id}>{plant.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
