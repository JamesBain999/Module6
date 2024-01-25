import { useState } from "react";

const cats = [
  { id: 1, name: "Cheetah", latinName: "Acinonyx jubatus", image: "" },
  { id: 2, name: "Cougar", latinName: "Puma concolor", image: "" },
  { id: 3, name: "Jaguar", latinName: "Panthera onca", image: "" },
  { id: 4, name: "Leopard", latinName: "Panthera pardus", image: "" },
  { id: 5, name: "Lion", latinName: "Panthera leo", image: "" },
  { id: 6, name: "Snow leopard", latinName: "Panthera uncia", image: "" },
  { id: 7, name: "Tiger", latinName: "Panthera tigris", image: "" },
];

function BigCatsDisplay(){
  const [catList, setCatList] = useState(cats)

  const handleReverseSort = () => {
    let newCats = [...catList];
    newCats.reverse();
    setCatList(newCats)
  }

  const handleAlphabeticalSorting = () => {
    let newCats = [...catList];
    newCats.sort(function(cat1, cat2){
      if (cat1.name > cat2.name) {
        return 1
        };
      if (cat1.name < cat2.name) {
        return -1
        };
      return 0;
    })
    setCatList(newCats)
  }

  const handleFilterPanthera = () => {
    let newCats = catList.filter((cat) => cat.latinName.startsWith("Panthera"))
    setCatList(newCats)
    }

  const handleResetCats = () => {
    setCatList(cats)
  } 

  return (
    <div className="BigCatsDisplay componentBox">
      <ul>
        {catList.map((cat) => (
          <li key={cat.id}>
            <span>Cats name : {cat.name};</span>
            <span>Cats latin name : {cat.latinName}; </span>
            Image of cat : <img src={cat.image} alt={`${cat.name} Image`} />
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

export default BigCatsDisplay