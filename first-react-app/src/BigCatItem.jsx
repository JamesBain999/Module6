function CatListItem(cat){
  return (
    <li key={cat.id}>
      <span>Cats name : {cat.name};</span>
      <span>Cats latin name : {cat.latinName}; </span>
      Image of cat : <img src={cat.image} alt={`${cat.name} Image`} />
    </li>
  );
}

export default CatListItem