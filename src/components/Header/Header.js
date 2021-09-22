import React, { useState } from "react";
import "./Header.scss";
import arrowIcon from "./icon-arrow.svg";
import DataBoard from "../DataBoard/DataBoard";
import { useStateValue } from "../../StateProvider";
import axios from "../../Axios";
import validator from "validator";

function Header() {
  /* eslint-disable no-unused-vars */
  const [{ data }, dispatch] = useStateValue();
  const [Ipaddr, setIpaddr] = useState("");
  const handleClick = async () => {
    if (validator.isIP(Ipaddr)) {
      let res =
        axios.get(`api/v1?apiKey=${process.env.REACT_APP_IPIFY_APIKEY}&ipAddress=${Ipaddr}
    `);
    }
    let res = await axios.get(
      `api/v1?apiKey=${process.env.REACT_APP_IPIFY_APIKEY}&domain=${Ipaddr}`
    );

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
