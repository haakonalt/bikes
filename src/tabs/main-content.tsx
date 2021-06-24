import React, { useState } from 'react';
import { BikeMap } from './bike-map';
import { combineStationInfoWithStatus } from '../common/station';
import { BikeList } from './bike-list';
import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';

interface Props {
  stationStatus: ApiResponse<StationStatusList>;
  stationInfo: ApiResponse<StationInfoList>;
}

/*
 Wrapper function around the main content that  takes care of passing down props after they are loaded

 Could perhaps be replaced with more a more fancy state management regime
 */
export function MainContent(props: Props) {
  const [tab, setTab] = useState('map');

  const tabUpdated = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTab(e.target.value);
  };

  const stations = combineStationInfoWithStatus(
    props.stationStatus,
    props.stationInfo,
  );

  return (
    <>
      <RadioGroup
        row
        aria-label="tab-choice"
        name="tab"
        value={tab}
        onChange={tabUpdated}
      >
        <FormControlLabel value="map" control={<Radio />} label="Kart" />
        <FormControlLabel value="list" control={<Radio />} label="Liste" />
      </RadioGroup>

      {/*quick and dirty routing/tab behaviour..*/}
      {tab == 'map' ? (
        <BikeMap stations={stations} />
      ) : (
        <BikeList stations={stations} />
      )}
    </>
  );
}
