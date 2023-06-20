/* eslint-disable react/prop-types */
function DashboardLine({line}) {
    return (
      <div className="dashboard_line">
        <div className="dashboard_cell">{line.height}</div>
        <div className="dashboard_cell">{line.id}</div>
        <div className="dashboard_cell">{line.url}</div>
        <div className="dashboard_cell">{line.width}</div>
      </div>
    )
  }

  export default DashboardLine;