/* eslint-disable react/prop-types */
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

let selectBreedOptions = [
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

function CatFilter({ breed, setBreed }) {
  return (
    <div id="select_container">
      <p>Choose breed :</p>
      <Select
        options={selectBreedOptions}
        onChange={setBreed}
        components={animatedComponents}
        placeholder='Select... (3 max.)'
        isOptionDisabled={() => breed.length >= 3}
        isMulti
      />
    </div>
  );
}

export default CatFilter;
