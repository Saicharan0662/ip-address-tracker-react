import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import iconLoc from '../../assets/images/icon-location.svg'

const Map = ({ info }) => {
    console.log(info)
    const iconMarker = new L.Icon({
        iconUrl: iconLoc,
        iconSize: new L.Point(46, 56),
    });
    return (
        <MapContainer
            preferCanvas={true}
            center={[
                info?.location?.lat,
                info?.location?.lng,
            ]}
            zoom={14}
            scrollWheelZoom={false}
            zoomControl={false}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
                position={[
                    info?.location?.lat,
                    info?.location?.lng,
                ]}
                icon={iconMarker}
            >
                <Popup>
                    {info?.location?.city},{" "}
                    {info?.location?.country}
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map