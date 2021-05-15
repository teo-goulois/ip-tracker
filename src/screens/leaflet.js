import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import icon from '../images/icon-location.svg'
import L from 'leaflet';

const Leaflet = props => {

    let markerIcon = L.icon({
        iconUrl: icon,
        iconRetinaUrl: icon,
      });

    function MyComponent() {
        const map = useMap()
        if(props.location[0] === "lat") {
            map.setView([48.864716, 2.349])
        } else {
            map.setView([props.location[0], props.location[1]])
        }
        return null
      }

    
    
    return(
        <div className="map__container">
            <MapContainer 
            center={props.location[0] === 'lat' ?
                    [48.864716, 2.349] : [props.location[0], props.location[1]]} 
            
            zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker 
                position={ props.location[0] === 'lat' ?
                    [48.864716, 2.349] : [props.location[0], props.location[1]]
                    }
                icon={markerIcon}>
                <Popup>
                Where your ip address are.
                </Popup>
            </Marker>
            
            <MyComponent />
            </MapContainer>
            
                    
        </div>
    )

}

export default Leaflet;