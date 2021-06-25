import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import type { Station } from '../common/station';
import type { LatLngExpression } from 'leaflet';

export function BikeMap({ stations }: { stations: Station[] }) {
  // probably a good place to travel from..
  const center: LatLngExpression = [59.91307903384525, 10.745471119880676];

  return (
    <>
      <h2>bike map</h2>

      <MapContainer zoom={17} center={center} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {stations.map((s) => {
          return (
            <Marker key={s.station_id} position={[s.lat, s.lon]}>
              <Popup>
                <h3>
                  {s.name} {s.num_bikes_available} / {s.capacity}
                </h3>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </>
  );
}
