import React, { useState } from "react";

function AddCatForm({ onAddCat }) {
  const [newCat, setNewCat] = useState({
    name: "",
    latinName: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCat((prevCat) => ({
      ...prevCat,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCat(newCat);
    setNewCat({
      name: "",
      latinName: "",
      image: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Cat Name:
        <input
          type="text"
          name="name"
          value={newCat.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Latin Name:
        <input
          type="text"
          name="latinName"
          value={newCat.latinName}
          onChange={handleChange}
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          name="image"
          value={newCat.image}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add Cat</button>
    </form>
  );
}

export default AddCatForm;
