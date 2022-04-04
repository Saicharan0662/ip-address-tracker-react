import React from 'react'
import arrowIcon from '../../assets/images/icon-arrow.svg'

const CustonInput = ({ searchIP, setSearchIP, getLocation }) => {

    const validateIp = (ip) => {
        const regex =
            /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        if (regex.test(ip)) return true;

        return false;
    };

    const handleSubmit = () => {
        if (validateIp(searchIP)) {
            getLocation(searchIP);
        }
        else alert("Invalid IP Address");
    }

    return (
        <>
            <label htmlFor="ip-address-input">
                <input
                    type="text"
                    id='ip-address-input'
                    placeholder='Search for any IP address or domain'
                    required={true}
                    value={searchIP}
                    onChange={e => setSearchIP(e.target.value)}
                />
                <button className='btn' onClick={() => handleSubmit()}>
                    <img src={arrowIcon} alt="click" />
                </button>
            </label>
        </>
    )
}

export default CustonInput