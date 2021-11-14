export interface Station {
  station_id: string;
  name: string;
  lon: number;
  lat: number;
  num_bikes_available: number;
  num_docks_available: number;
  capacity: number;
}

export const combineStationInfoWithStatus = (
  stationStatus: ApiResponse<StationStatusList>,
  stationInfo: ApiResponse<StationInfoList>,
): Station[] => {
  // build a map of {station_id: StationInfo} to be used to combine the two lists
  const stationInfoMap: { [key: string]: StationInfo } = {};
  stationInfo.data.stations.forEach(
    (info: StationInfo) => (stationInfoMap[info.station_id] = info),
  );

  return stationStatus.data.stations.map((s) => {
    const info = stationInfoMap[s.station_id];
    return {
      station_id: s.station_id,
      name: info.name,
      lon: info.lon,
      lat: info.lat,
      num_bikes_available: s.num_bikes_available,
      num_docks_available: s.num_docks_available,
      capacity: info.capacity,
    };
  });
};
