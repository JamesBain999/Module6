import React, { useState } from "react";
import AddCatForm from "./AddCatForm";
import CatListItem from "./BigCatItem";

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
    let newCats = catList.filter((cat) => cat.latinName.startsWith("Panthera"));
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
          <div key={cat.id}>
            {CatListItem(cat)}
            <button onClick={() => handleDeleteCat(cat.id)}>Delete</button>
          </div>
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