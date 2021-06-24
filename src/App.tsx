import React, { useState, useEffect } from 'react';
import './App.css';
import { BikeMap } from './bike-map';
import {fetchStationInfo, fetchStationStatus} from './citybikes-api/citybikes-api'

interface AppProps {}

function App({}: AppProps) {
  const [stationStatus, setStationStatus] =
    useState<ApiResponse<StationStatusList> | null>(null);
    /**
     * Maintain a separate state for stationInfo. We may want to update stationStatus on an interval,
     * but stationInformation will probably be more static so we only need to fetch this once.
     */
  const [stationInformation, setStationInformation] =
    useState<ApiResponse<StationInforList> | null>(null);

  useEffect(() => {
    Promise.all([fetchStationStatus(), fetchStationInfo()]).then(
      ([stationStatus, stationInfo]) => {
        setStationStatus(stationStatus);
        setStationInformation(stationInfo);
      },
    );
  }, []);

  // TODO: combine station status with the name from station info
  //   const stations = combineStationInfoWithStatus()


  return (
    <div className="App">
      <header className="App-header"></header>

      <h1>hello</h1>
      {!stationInformation ? (
        <h2>Please wait..</h2>
      ) : (
        <BikeMap stations={stationInformation.data.stations!}></BikeMap>
      )}
    </div>
  );
}

export default App;
