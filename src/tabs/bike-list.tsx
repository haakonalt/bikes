import React from 'react';
import type { Station } from '../common/station';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

export const BikeList = ({ stations }: { stations: Station[] }) => {
  const stationsSorted = stations.sort(
    (a, b) => b.num_bikes_available - a.num_bikes_available,
  );
  return (
    <TableContainer component={Paper} data-testid="bike-list">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Navn</TableCell>
            <TableCell>Ledige sykler</TableCell>
            <TableCell>Ledige låser</TableCell>
            <TableCell>Total kapasitet</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stationsSorted.map((s) => (
            <TableRow key={s.station_id} data-testid="bike-list-row">
              <TableCell data-testid="station-name">{s.name}</TableCell>
              <TableCell data-testid="station-bikes-available">
                {s.num_bikes_available}
              </TableCell>
              <TableCell data-testid="station-docks-available">
                {s.num_docks_available}
              </TableCell>
              <TableCell data-testid="station-capacity">{s.capacity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
