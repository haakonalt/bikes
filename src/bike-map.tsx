import React, { useEffect, useState } from 'react';
import Leaflet from 'leaflet';
import {
  GeoJSON,
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import type { LatLngExpression } from 'leaflet';

export function BikeMap({ stations }: { stations: StationInfo[] }) {
  const position: LatLngExpression = [51.505, -0.09];
  const geojson = {
    type: 'FeatureCollection',
    features: stations.map((s) => {
      return {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [s.lat, s.lon],
        },
        properties: {
          ...s,
        },
      };
    }),
  };

  const center = [stations[0].lat, stations[1].lon];

  return (
    <>
      <h2>bike map</h2>

      <MapContainer zoom={13} center={center} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {stations.map((s) => {
          return (
            <Marker key={s.station_id} position={[s.lat, s.lon]}>
              <Popup>
                <h3>
                  {s.name} {s.capacity}
                </h3>
              </Popup>
            </Marker>
          );
        })}
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>

      <ul>
        {/*{data?.stations?.map(s => <li key={s.station_id}>{s.name}</li>)}*/}
      </ul>
    </>
  );
}
