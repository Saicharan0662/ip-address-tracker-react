import React from 'react'

const Card = ({ info }) => {
    return (
        <div className='data-card'>
            <div className="data">
                <p>IP ADDRESS</p>
                <p>{info?.ip}</p>
            </div>
            <span className="border"></span>
            <div className="data">
                <p>LOCATION</p>
                <p>
                    {info?.location?.city}, {info?.location?.country}, {info?.location?.postalCode}
                </p>
            </div>
            <span className="border"></span>
            <div className="data">
                <p>TIMEZONE</p>
                <p>UTC-{info?.location?.timezone}</p>
            </div>
            <span className="border"></span>
            <div className="data">
                <p>ISP</p>
                <p>{info?.isp}</p>
            </div>
        </div>
    )
}

export default Card