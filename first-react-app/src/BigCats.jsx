function BigCatsDisplay(){
  const cats = [
    { id: 1, name: "Cheetah", latinName: "Acinonyx jubatus", image: "" },
    { id: 2, name: "Cougar", latinName: "Puma concolor", image: "" },
    { id: 3, name: "Jaguar", latinName: "Panthera onca", image: "" },
    { id: 4, name: "Leopard", latinName: "Panthera pardus", image: "" },
    { id: 5, name: "Lion", latinName: "Panthera leo", image: "" },
    { id: 6, name: "Snow leopard", latinName: "Panthera uncia", image: "" },
    { id: 7, name: "Tiger", latinName: "Panthera tigris", image: "" },
  ];

  return (
    <div className="BigCatsDisplay componentBox">
      <ul>
        {cats.map((cat) => (
          <li key={cat.id}>
            <span>Cats name : {cat.name};</span>
            <span>Cats latin name : {cat.latinName}; </span>
            Image of cat : <img src={cat.image} alt={`${cat.name} Image`} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BigCatsDisplay