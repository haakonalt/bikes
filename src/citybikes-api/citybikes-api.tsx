export const fetchStationStatus = async (): Promise<
  ApiResponse<StationStatusList>
> => {
  const response = await fetch(
    'https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json',
    {
      headers: {
        'Client-Identifier': 'https://github.com/haakonalt/citybikes',
      },
    },
  );

  // TODO: assert status code 200
  // TODO: validate object structure
  const data = await response.json();
  return data;
};

export const fetchStationInfo = async (): Promise<
  ApiResponse<StationInfoList>
> => {
  const response = await fetch(
    'https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json',
    {
      headers: {
        'Client-Identifier': 'https://github.com/haakonalt/citybikes',
      },
    },
  );

  // TODO: assert status code 200
  // TODO: validate object structure
  const data = await response.json();
  return data;
};
