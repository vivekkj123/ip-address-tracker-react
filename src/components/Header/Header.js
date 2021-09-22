import React, { useState } from "react";
import "./Header.scss";
import arrowIcon from "./icon-arrow.svg";
import DataBoard from "../DataBoard/DataBoard";
import { useStateValue } from "../../StateProvider";
import axios from "../../Axios";
function Header() {
  /* eslint-disable no-unused-vars */
  const [{ data }, dispatch] = useStateValue();
  const [Ipaddr, setIpaddr] = useState("");
  const handleClick = async () => {
    let res =
      await axios.get(`api/v1?apiKey=${process.env.REACT_APP_IPIFY_APIKEY}&ipAddress=${Ipaddr}
    `);
    dispatch({ type: "SET_DATA", data: res });
  };
  return (
    <>
      <div className="Header">
        <h2>IP Address Tracker</h2>
        <div className="inputBox">
          <input
            value={Ipaddr}
            onChange={(e) => setIpaddr(e.target.value)}
            type="text"
            placeholder="Search for any IP address or domain"
          />
          <button onClick={handleClick}>
            <img src={arrowIcon} alt="" />
          </button>
        </div>
      </div>
      <DataBoard />
    </>
  );
}

export default Header;
