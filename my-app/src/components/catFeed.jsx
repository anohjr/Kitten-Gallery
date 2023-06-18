import { useEffect, useState } from "react";
const catApiKey = import.meta.env.VITE_APP_CAT_API_TOKEN;
// import CatImage from "./catImage";

function CatFeed() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/images/search?limit=50`, {
      method: "GET",
      headers: {
        "x-api-key": catApiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);
  console.log("data :", data);

  function getCatImages() {
    return (
      <>
        <div>
          <img className="cat_img" src={data[0].url} alt="image of a cat" />
        </div>
        <div>
          <img className="cat_img" src={data[0].url} alt="image of a cat" />
        </div>
        <div>
          <img className="cat_img" src={data[0].url} alt="image of a cat" />
        </div>
        <div>
          <img className="cat_img" src={data[0].url} alt="image of a cat" />
        </div>
        <div>
          <img className="cat_img" src={data[0].url} alt="image of a cat" />
        </div>
        <div>
          <img className="cat_img" src={data[0].url} alt="image of a cat" />
        </div>
      </>
    );
  }

  return <div id="cat_feed_container">{getCatImages()}</div>;
}

export default CatFeed;
