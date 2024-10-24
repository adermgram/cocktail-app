import React, { useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";

function Coctail() {
  const [img, setImage] = useState();
  const [title, setTitle] = useState();
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    try {
      const result = await axios.get("http://localhost:3000");
      const cocktailData = result.data;
      console.log(cocktailData);
      setImage(cocktailData.strDrinkThumb);
      setTitle(cocktailData.strDrink);
      setLoading(false);
    } catch (err) {
      console.log("error fecting data ", err);
      setLoading(false);
    }
  }

  return (
    <div>
      <button onClick={handleClick}>show cocktail</button>
      {loading && <Spinner />}
      <h2 className="title">{title}</h2>
      {img && <img src={img} alt="coctail image" />}
    </div>
  );
}

export default Coctail;
