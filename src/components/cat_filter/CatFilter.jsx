/* eslint-disable react/prop-types */
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "./CatFilter.scss";

import { useSelector, useDispatch } from "react-redux";
import { selectBreed, setBreed } from "../cat_filter/catFilterSlice";

const animatedComponents = makeAnimated();

const selectBreedOptions = [
  { value: "", label: "None" },
  { value: "abys", label: "Abyssinian" },
  { value: "aege", label: "Aegean" },
  { value: "abob", label: "American Bobtail" },
  { value: "acur", label: "American Curl" },
  { value: "asho", label: "American Shorthair" },
  { value: "awir", label: "American Wirehair" },
  { value: "amau", label: "Arabian Mau" },
  { value: "amis", label: "Australian Mist" },
];

const selectTypeOptions = [
  { value: "gif", label: "GIF" },
  { value: "jpg,png", label: "IMG" },
];

function CatFilter({ setType }) {
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
            onChange={(selectedValues) => {dispatch(setBreed(selectedValues))}}
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
