interface ApiResponse<T> {
  last_updated: number;
  ttl: 10;
  data: T;
}

// {"station_id": "2309", "name": "Ulven Torg", "address": "Ulvenveien 89", "lat": 59.924959978447504, "lon": 10.812061140924698, "capacity": 30}
interface StationInfo {
  station_id: string;
  name: string;
  address: string;
  lat: number;
  lon: number;
  capacity: number;
}

interface StationInforList {
  stations: StationInfo[];
}

interface StationStatus {
  station_id: string;
  is_installed: number;
  is_renting: number;
  last_reported: number;
  num_bikes_available: number;
  num_docks_available: number;
}

// {"station_id": "2309", "is_installed": 1, "is_renting": 1, "is_returning": 1, "last_reported": 1624535310, "num_bikes_available": 16, "num_docks_available": 13}
interface StationStatusList {
  stations: StationStatus[];
}
