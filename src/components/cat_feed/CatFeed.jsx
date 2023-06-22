/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
const catApiKey = import.meta.env.VITE_APP_CAT_API_TOKEN;
import "./CatFeed.scss";
import CatImage from "../cat_image/CatImage";
import PawsLoader from "../paws_loader/PawsLoader";

import { useSelector } from "react-redux";
import { selectBreed } from "../cat_filter/catFilterSlice";

function CatFeed({ type }) {
  const breed = useSelector(selectBreed);

  // const listInnerRef = useRef();
  const [catData, setCatData] = useState([]);
  // const [catPage, setCatPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  function getBreedFilter() {
    if (breed.length === 0) return "";
    else return breed.map((e) => e.value).join(",");
  }

  useEffect(() => {
    setFetching(true);
    fetch(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${getBreedFilter()}&order=RANDOM&mime_types=${
        type.value
      }&limit=25`,
      {
        method: "GET",
        headers: {
          "x-api-key": catApiKey,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setCatData(data))
      .finally(() => setFetching(false))
      .catch((error) => console.log(error));
  }, [breed, type]);
  // console.log("data :", catData);
  // console.log("breed:", breed);
  // console.log("type :", type.value);
  // console.log("fetching:", fetching)
  // console.log("cat page :", catPage);

  // const onScroll = () => {
  //   if (listInnerRef.current) {
  //     const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
  //     if (scrollTop + clientHeight === scrollHeight) {
  //       setCatPage(catPage + 1);
  //     }
  //   }
  // };

  function getCatImages() {
    return (
      <>
        {catData.map((e, i) => (
          <CatImage elementCat={e} key={i} />
        ))}
      </>
    );
  }

  if (fetching) return <PawsLoader />;
  return <div id="cat_feed_container">{getCatImages()}</div>;
}

export default CatFeed;
