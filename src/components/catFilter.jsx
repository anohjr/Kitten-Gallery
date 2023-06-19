function CatFilter() {
  return (
    <>
      <label id="breed_label" htmlFor="breed_select">Choose breeds</label>
      <select name="breeds" id="breed_select">
        <option value="">None</option>
      </select>
    </>
  );
}

export default CatFilter;
