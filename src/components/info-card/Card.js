import React from 'react'

const Card = ({ info }) => {
    return (
        <div className='data-card'>
            <div className="data">
                <p>IP ADDRESS</p>
                <p>192.212.174.101</p>
            </div>
            <span className="border"></span>
            <div className="data">
                <p>LOCATION</p>
                <p>Brooklyn, NY, 10001</p>
            </div>
            <span className="border"></span>
            <div className="data">
                <p>TIMEZONE</p>
                <p>UTC-05:00</p>
            </div>
            <span className="border"></span>
            <div className="data">
                <p>ISP</p>
                <p>SpaceX Starlink</p>
            </div>
        </div>
    )
}

export default Card