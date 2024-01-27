import React, { useState } from "react";
import AddCatForm from "./AddCatForm";

const cats = [
  { id: 1, name: "Cheetah", latinName: "Acinonyx jubatus", image: "" },
  { id: 2, name: "Cougar", latinName: "Puma concolor", image: "" },
  { id: 3, name: "Jaguar", latinName: "Panthera onca", image: "" },
  { id: 4, name: "Leopard", latinName: "Panthera pardus", image: "" },
  { id: 5, name: "Lion", latinName: "Panthera leo", image: "" },
  { id: 6, name: "Snow leopard", latinName: "Panthera uncia", image: "" },
  { id: 7, name: "Tiger", latinName: "Panthera tigris", image: "" },
];

  function BigCatsDisplay() {
  const [catList, setCatList] = useState(cats);

  const handleReverseSort = () => {
    let newCats = [...catList];
    newCats.reverse();
    setCatList(newCats);
  };

  const handleAlphabeticalSorting = () => {
    let newCats = [...catList];
    newCats.sort((cat1, cat2) => cat1.name.localeCompare(cat2.name));
    setCatList(newCats);
  };

  const handleFilterPanthera = () => {
    let newCats = cats.filter((cat) => cat.latinName.startsWith("Panthera"));
    setCatList(newCats);
  };

  const handleResetCats = () => {
    setCatList(cats);
  };

  const handleAddCat = (newCat) => {
    setCatList((prevCats) => [...prevCats, { id: prevCats.length + 1, ...newCat }]);
  };

  const handleDeleteCat = (catId) => {
    setCatList((prevCats) => prevCats.filter((cat) => cat.id !== catId));
  };

  return (
    <div className="BigCatsDisplay componentBox">
      <AddCatForm onAddCat={handleAddCat} />
      <ul>
        {catList.map((cat) => (
          <li key={cat.id}>
            <span>Cats name : {cat.name};</span>
            <span>Cats latin name : {cat.latinName}; </span>
            Image of cat : <img src={cat.image} alt={`${cat.name} Image`} />
            <button onClick={() => handleDeleteCat(cat.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={handleReverseSort}>Reverse</button>
      <button onClick={handleAlphabeticalSorting}>Alphabetical</button>
      <button onClick={handleFilterPanthera}>Panthera Filter</button>
      <button onClick={handleResetCats}>Reset Cats</button>
    </div>
  );
}

export default BigCatsDisplay;