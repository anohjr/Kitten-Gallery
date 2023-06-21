import { useState } from "react";

import CatFeed from "../components/cat_feed/CatFeed";
import CatFilter from "../components/cat_filter/CatFilter";

function Gallery() {
  const [breed, setBreed] = useState([{ value: "", label: "None" }]);
  const [type, setType] = useState({ value: "jpg,png", label: "IMG" });
  return (
    <div id="content_container">
      <CatFilter
        breed={breed}
        setBreed={setBreed}
        type={type}
        setType={setType}
      />
      <CatFeed breed={breed} setBreed={setBreed} type={type} />
    </div>
  );
}

export default Gallery;
