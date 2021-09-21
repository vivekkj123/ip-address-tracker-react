import React, { useState } from "react";
import "./Header.scss";
import arrowIcon from "./icon-arrow.svg";
import DataBoard from "../DataBoard/DataBoard";
function Header() {
  const [Ipaddr, setIpaddr] = useState("");
  return (
    <>
      <div className="Header">
        <h2>IP Address Tracker</h2>
        <div className="inputBox">
          <input
            value={Ipaddr}
            onChange={() => setIpaddr()}
            type="text"
            placeholder="Search for any IP address or domain"
          />
          <button>
            <img src={arrowIcon} alt="" />
          </button>
        </div>
      </div>
      <DataBoard />
    </>
  );
}

export default Header;
