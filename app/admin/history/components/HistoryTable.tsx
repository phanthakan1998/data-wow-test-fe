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
import { IConcertHistoryResponse } from "@/interfaces/concert";
import { HistoryAction } from "@/enums/history";
import dayjs from "@/core/dayjs";

interface IHistoryTableProps {
  rows: IConcertHistoryResponse[];
}

export default function HistoryTable({ rows }: IHistoryTableProps) {
  const mapAction = (action: HistoryAction) => {
    if (action === HistoryAction.RESERVE) return "Reserve";
    if (action === HistoryAction.CANCEL) return "Cancel";
    return "-";
  };

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
              className="border-r border-gray-400"
            >
              Date time
            </TableCell>
            <TableCell
              sx={{ fontWeight: 700 }}
              className="border-r border-gray-400"
            >
              Username
            </TableCell>
            <TableCell
              sx={{ fontWeight: 700 }}
              className="border-r border-gray-400"
            >
              Concert name
            </TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="border-t border-r border-gray-400">
                {dayjs.utc(row.createdAt).format("DD/MM/YYYY HH:mm:ss")}
              </TableCell>
              <TableCell className="border-t border-r border-gray-400">
                {row.userName}
              </TableCell>
              <TableCell className="border-t border-r border-gray-400">
                {row.concertName}
              </TableCell>
              <TableCell className="border-t border-gray-400">
                {mapAction(row.action)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
