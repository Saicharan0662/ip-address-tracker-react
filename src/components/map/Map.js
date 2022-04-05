import React from 'react'
import iconLoc from '../../assets/images/icon-location.svg'
import ReactMapboxGl, { Popup, Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapBox = ReactMapboxGl({
    accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
});

const Map = ({ info }) => {
    // console.log(info)

    return (
        <MapBox
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
                height: '100vh',
                width: '100vw'
            }}
        >
            <Marker
                coordinates={[info.location.lat, info.location.lng]}
                anchor="bottom">
                <img src={iconLoc}
                    width={30}
                    height={30}
                />
            </Marker>
            <Popup
                coordinates={[info.location.lat, info.location.lng]}
                offset={{
                    'bottom-left': [12, -38], 'bottom': [0, -38], 'bottom-right': [-12, -38]
                }}>
                <h1>{info.location.region}</h1>
            </Popup>
        </MapBox>
    )
}

export default Map