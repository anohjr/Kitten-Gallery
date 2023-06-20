/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
const catApiKey = import.meta.env.VITE_APP_CAT_API_TOKEN;
import CatImage from "./catImage";

function CatFeed({ breed, type }) {
  const [catData, setCatData] = useState([]);
  const [catPageData, setCatPageData] = useState(0);

  function getBreedFilter() {
    if (breed.length === 0) return "";
    else return breed.map((e) => e.value).join(",");
  }

  useEffect(() => {
    fetch(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${getBreedFilter()}&order=RANDOM&mime_types=${
        type.value
      }&limit=20`,
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
  }, [breed, type]);
  // console.log("data :", catData);
  // console.log("breed:", breed);
  console.log("type :", type.value);

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
