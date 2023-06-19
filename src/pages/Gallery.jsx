import CatFeed from "../components/catFeed";
import CatFilter from "../components/catFilter";

function Gallery () {
    return (
        <div id="content_container">
            <CatFilter />
            <CatFeed/>
        </div>
    )
}

export default Gallery;