import React from 'react'

const Card = ({ info }) => {
    return (
        <div className='data-card'>
            <div className="data">
                <p>IP ADDRESS</p>
                {info ?
                    <p>{info?.ip}</p> :
                    <p>Loading...</p>
                }
            </div>
            <span className="border"></span>
            <div className="data">
                <p>LOCATION</p>
                {info ?
                    <p>
                        {info?.location?.city}, {info?.location?.country}, {info?.location?.postalCode}
                    </p> :
                    <p>Loading...</p>
                }
            </div>
            <span className="border"></span>
            <div className="data">
                <p>TIMEZONE</p>
                {info ?
                    <p>UTC-{info?.location?.timezone}</p> :
                    <p>Loading...</p>
                }
            </div>
            <span className="border"></span>
            <div className="data">
                <p>ISP</p>
                {info ?
                    <p>{info?.isp}</p> :
                    <p>Loading...</p>
                }
            </div>
        </div>
    )
}

export default Card