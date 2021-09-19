import React from 'react'
import './DataBoard.scss'

function DataBoard() {
    return (
        <div className="DataBoard">
            <div className="ipAddress">
                <p>IP ADDRESS</p>
                <span>192.168.1.1</span>
            </div>
            <div className="location">
            <p>LOCATION</p>
                <span>Kodakara</span>
            </div>
            <div className="TimeZone">
            <p>TIME ZONE</p>
                <span>GMT +5:30</span>
            </div>
            <div className="isp">
            <p>ISP</p>
                <span>BSNL</span>
            </div>
        </div>
    )
}

export default DataBoard
