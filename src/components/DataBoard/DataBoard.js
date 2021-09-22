import React from "react";
import "./DataBoard.scss";
import { useStateValue } from "../../StateProvider";

function DataBoard() {
  const [{ data }, dispatch] = useStateValue();
  if (data.length==0){
    data.data = {
      
    }
  }
  console.log(data);
  return (
    <div className="DataBoard">
      <div className="ipAddress">
        <p>IP ADDRESS</p>
        <span>{data.data.ip}</span>
      </div>
      <div className="location">
        <p>LOCATION</p>
        <span>{data.data.location.city},{data.data.location.country}, {data.data.location.postalCode}</span>
      </div>
      <div className="TimeZone">
        <p>TIME ZONE</p>
        <span>GMT {data.data.location.timezone}</span>
      </div>
      <div className="isp">
        <p>ISP</p>
        <span>{data.data.isp}</span>
      </div>
    </div>
  );
}

export default DataBoard;
