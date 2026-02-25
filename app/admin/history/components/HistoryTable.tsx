"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const rows = [
  {
    datetime: "12/09/2024 15:00:00",
    username: "Sara John",
    concert: "The festival Int 2024",
    action: "Cancel",
  },
  {
    datetime: "12/09/2024 10:39:20",
    username: "Sara John",
    concert: "The festival Int 2024",
    action: "Reserve",
  },
];

export default function HistoryTable() {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      className="bg-white rounded-md border border-gray-400 overflow-hidden"
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ fontWeight: 700 }}
              className="border-r border-gray-400 text-black"
            >
              Date time
            </TableCell>
            <TableCell
              sx={{ fontWeight: 700 }}
              className="border-r border-gray-400 text-black"
            >
              Username
            </TableCell>
            <TableCell
              sx={{ fontWeight: 700 }}
              className="border-r border-gray-400 text-black"
            >
              Concert name
            </TableCell>
            <TableCell sx={{ fontWeight: 700 }} className="text-black">
              Action
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell className="border-t border-r border-gray-400">
                {row.datetime}
              </TableCell>
              <TableCell className="border-t border-r border-gray-400">
                {row.username}
              </TableCell>
              <TableCell className="border-t border-r border-gray-400">
                {row.concert}
              </TableCell>
              <TableCell className="border-t border-gray-400">
                {row.action}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
