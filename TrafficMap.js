import React, { useEffect, useState } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const TrafficMap = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/api/traffic')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <div>
            <h2>Traffic Map</h2>
            <Map center={[51.505, -0.09]} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {data.map((item, index) => (
                    <Marker key={index} position={[item.lat, item.lng]}>
                        <Popup>
                            {item.vehicle_type}: {item.count}
                        </Popup>
                    </Marker>
                ))}
            </Map>
        </div>
    );
};

export default TrafficMap;
