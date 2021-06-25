import React, { useState, useEffect } from 'react';
import './App.css';
import { BikeMap } from './tabs/bike-map';
import {
  fetchStationInfo,
  fetchStationStatus,
} from './citybikes-api/citybikes-api';
import { combineStationInfoWithStatus } from './common/station';
import { MainContent } from './tabs/main-content';
import { Container } from '@material-ui/core';

interface AppProps {}

function App({}: AppProps) {
  const [stationStatus, setStationStatus] =
    useState<ApiResponse<StationStatusList> | null>(null);
  /**
   * Maintain a separate state for stationInfo. We may want to update stationStatus on an interval,
   * but stationInformation will probably be more static so we only need to fetch this once.
   */
  const [stationInformation, setStationInformation] =
    useState<ApiResponse<StationInfoList> | null>(null);

  useEffect(() => {
    Promise.all([fetchStationStatus(), fetchStationInfo()]).then(
      ([stationStatus, stationInfo]) => {
        setStationStatus(stationStatus);
        setStationInformation(stationInfo);
      },
    );
  }, []);

  return (
    <div className="App">
      <Container>
        <h1>Oslo bysykkel</h1>
          <p>Her kan du få on oversikt over tilgjengelige bysykler i Oslo kommune. </p>
        {stationInformation && stationInformation ? (
          <MainContent
            stationStatus={stationStatus!}
            stationInfo={stationInformation}
          />
        ) : (
          <h2>Please wait..</h2>
        )}
      </Container>
    </div>
  );
}

export default App;
