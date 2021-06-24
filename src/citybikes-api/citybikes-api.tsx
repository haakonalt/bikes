export const fetchStationStatus = async (): Promise<
  ApiResponse<StationStatusList>
> => {
  const response = await fetch('/station_status.json', {
    headers: {
      'Client-Identifier': 'https://github.com/haakondr/citybikes',
    },
  });

  // TODO: assert status code 200
  // TODO: validate object structure
  const data = await response.json();
  return data;
};

export const fetchStationInfo = async (): Promise<ApiResponse<StationInforList>> => {
  const response = await fetch('/station_information.json', {
    headers: {
      'Client-Identifier': 'https://github.com/haakondr/citybikes',
    },
  });

  // TODO: assert status code 200
  // TODO: validate object structure
  const data = await response.json();
  return data;
};
