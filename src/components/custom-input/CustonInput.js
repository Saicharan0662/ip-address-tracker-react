import React from 'react'
import arrowIcon from '../../assets/images/icon-arrow.svg'

const CustonInput = () => {
    return (
        <>
            <label htmlFor="ip-address-input">
                <input type="text" id='ip-address-input' placeholder='Search for any IP address or domain' />
                <button className='btn'>
                    <img src={arrowIcon} alt="click" />
                </button>
            </label>
        </>
    )
}

export default CustonInput