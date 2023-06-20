/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
const catApiKey = import.meta.env.VITE_APP_CAT_API_TOKEN;
import CatImage from "./catImage";

function CatFeed({ breed }) {
  const [catData, setCatData] = useState([]);
  const [catPageData, setCatPageData] = useState(0);

  function getBreedFilter() {
    if (breed.length === 0) return "";
    if (breed.length === 1) return breed[0].value;
    if (breed.length === 2) return `${breed[0].value},${breed[1].value}`;
    if (breed.length === 3)
      return `${breed[0].value},${breed[1].value},${breed[2].value}`;
  }

  useEffect(() => {
    fetch(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${getBreedFilter()}&limit=20`,
      {
        method: "GET",
        headers: {
          "x-api-key": catApiKey,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setCatData(data))
      .catch((error) => console.log(error));
  }, [breed]);
  // console.log("data :", catData);
  console.log("breed:", breed);

  function getCatImages() {
    return (
      <>
        {catData.map((e, i) => (
          <CatImage elementCat={e} key={i} />
        ))}
      </>
    );
  }

  function onScrollCatImg() {}

  return (
    <div id="cat_feed_container" onScroll={onScrollCatImg}>
      {getCatImages()}
    </div>
  );
}

export default CatFeed;
