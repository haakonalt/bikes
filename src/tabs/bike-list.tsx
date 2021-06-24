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
    <TableContainer component={Paper}>
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
            <TableRow key={s.station_id}>
              <TableCell>{s.name}</TableCell>
              <TableCell>{s.num_bikes_available}</TableCell>
              <TableCell>{s.num_docks_available}</TableCell>
              <TableCell>{s.capacity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
