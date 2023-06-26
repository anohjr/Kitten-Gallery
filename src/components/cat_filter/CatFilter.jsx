/* eslint-disable react/prop-types */
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "./CatFilter.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectBreed, setBreed } from "../cat_filter/catFilterSlice";
import { useEffect } from "react";

const animatedComponents = makeAnimated();
const catApiKey = import.meta.env.VITE_APP_CAT_API_TOKEN;

const selectBreedOptions = [];

const selectTypeOptions = [
  { value: "gif", label: "GIF" },
  { value: "jpg,png", label: "IMG" },
];

function extractBreedData (data) {
data.map((breed) => selectBreedOptions.push({ value: breed.id, label: breed.name}))
}

function fecthBreedOptions() {
  fetch(`https://api.thecatapi.com/v1/breeds`, {
    method: "GET",
    headers: {
      "x-api-key": catApiKey,
    },
  })
    .then((response) => response.json())
    .then((data) => extractBreedData(data))
    .catch((err) => console.error(err));
}

function CatFilter({ setType }) {

  useEffect(() => {
    fecthBreedOptions()
  }, []);

  const breed = useSelector(selectBreed);
  const dispatch = useDispatch();
  console.log(breed);
  return (
    <>
      <div id="all_select_container">
        <div id="select_breed_container">
          <p>Sort by breed :</p>
          <Select
            options={selectBreedOptions}
            onChange={(selectedValues) => {
              dispatch(setBreed(selectedValues));
            }}
            components={animatedComponents}
            placeholder="Select... (3 max.)"
            isOptionDisabled={() => breed.length >= 3}
            isMulti
          />
        </div>
        <div id="select_type_container">
          <p>Type :</p>
          <Select
            options={selectTypeOptions}
            onChange={setType}
            defaultValue={{ value: "jpg,png", label: "IMG" }}
          />
        </div>
      </div>
    </>
  );
}

export default CatFilter;
