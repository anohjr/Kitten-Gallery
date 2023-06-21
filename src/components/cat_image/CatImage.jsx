/* eslint-disable react/prop-types */
import "./CatImage.scss";

function CatImage({ elementCat }) {
  return (
    <div>
      <img className="cat_img" src={elementCat.url} alt="image of a cat" />
    </div>
  );
}

export default CatImage;
