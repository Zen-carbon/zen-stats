export interface DeviceDetail {
  co2_ppm: number;
  deviceId: string;
  humidity_pct: number;
  temperature_c: number;
  server_timestamp: string;
}

export interface ChartUpdateData {
  tempValues: number[];
  co2Values: number[];
  humidityValues: number[];
  labels: string[];
}
