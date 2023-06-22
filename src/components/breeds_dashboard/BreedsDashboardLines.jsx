/* eslint-disable react/prop-types */
function BreedsDashboardLines({ line }) {
  return (
    <tr>
      <td>{line.name}</td>
      <td>{line.origin}</td>
      <td>{line.description}</td>
      <td>
        <a href={line.wikipedia_url} target="_blank" rel="noreferrer">
          <img src={line.image?.url}></img>
        </a>
      </td>
    </tr>
  );
}

export default BreedsDashboardLines;
