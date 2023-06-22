import { useEffect, useState } from "react";
import "./BreedsDashboard.scss";
import BreedsDashboardLines from "./BreedsDashboardLines";

const catApiKey = import.meta.env.VITE_APP_CAT_API_TOKEN;

function BreedsDashboard() {
  const [breedData, setBreedData] = useState([]);

  function fetchBreeds() {
    fetch("https://api.thecatapi.com/v1/breeds/", {
      method: "GET",
      headers: {
        "x-api-key": catApiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data), setBreedData(data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetchBreeds();
  }, []);

//   console.log("weight:", breedData[0]?.image.url);
  
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Breed</th>
            <th>Origin</th>
            <th>Description</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          {breedData.map((line) => (
            <BreedsDashboardLines line={line} key={line.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BreedsDashboard;
