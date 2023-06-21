/* eslint-disable react-hooks/exhaustive-deps */
import DashboardLine from "./dashboardLine";
import { useEffect, useState } from "react";
import "./Dashboard.scss";

function Dashboard() {
  const catApiKey = import.meta.env.VITE_APP_CAT_API_TOKEN;
  const [dashboardData, setDashboardData] = useState([]);
  const [optionFetch, setOptionFetch] = useState({
    page: 0,
    limit: 10,
    order: "ASC",
  });

  let urlParams = "";
  let arrayParams = [];

  for (let key in optionFetch) {
    arrayParams.push(`${key}=${optionFetch[key]}`);
  }

  urlParams = arrayParams.join("&");

  if (urlParams.length > 0) urlParams = "?" + urlParams;

  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/images/search${urlParams}`, {
      method: "GET",
      headers: {
        "x-api-key": catApiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => setDashboardData(data))
      .finally(() => console.log("data:", dashboardData))
      .catch((err) => console.error(err));
  }, []);

  const incrementPage = () => {
    setOptionFetch((optionFetch) => ({
      ...optionFetch,
      page: optionFetch.page + 1,
    }));
  };

  const decrementPage = () => {
    if (optionFetch.page > 0) {
      setOptionFetch((optionFetch) => ({
        ...optionFetch,
        page: optionFetch.page - 1,
      }));
    }
  };
  return (
    <>
      <div id="dashboard">
        <div id="dashboard_headers">
          <div className="header">Height</div>
          <div className="header">ID</div>
          <div className="header">URL</div>
          <div className="header">Width</div>
        </div>
        <div id="dashboard_body">
          {dashboardData.map((line) => (
            <DashboardLine line={line} key={line.id} />
          ))}
        </div>
      </div>
      <div id="button_container">
        <button id="button_left" onClick={() => decrementPage()}>
          ⬅️
        </button>
        <div>{optionFetch.page}</div>
        <button id="button_right" onClick={() => incrementPage()}>
          ➡️
        </button>
      </div>
    </>
  );
}

export default Dashboard;
