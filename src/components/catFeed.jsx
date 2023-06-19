/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
const catApiKey = import.meta.env.VITE_APP_CAT_API_TOKEN;
import CatImage from "./catImage";

function CatFeed() {
  const [catData, setCatData] = useState([]);
  const [catPageData, setCatPageData] = useState(0);
  useEffect(() => {
    fetch(
      `https://api.thecatapi.com/v1/images/search?limit=20&page=${catPageData}`,
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
  }, []);
  console.log("data :", catData);

  function getCatImages() {
    return (
      <>
        {catData.map((e) => (
          <CatImage elementCat={e} />
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
