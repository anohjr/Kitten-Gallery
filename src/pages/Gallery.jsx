import { useState } from "react";

import CatFeed from "../components/catFeed";
import CatFilter from "../components/catFilter";

function Gallery() {
  const [breed, setBreed] = useState([{ value: "", label: "None" }]);
  return (
    <div id="content_container">
      <CatFilter breed={breed} setBreed={setBreed} />
      <CatFeed breed={breed} />
    </div>
  );
}

export default Gallery;
