import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import React from "react";


function DataTableExtendedSamples(props) {

    const data = props.data
    const headers = []

    function createRowData(songId) {
        let rows = []
        function pushData (data, key) {
            rows.push(data[key])
            headers.push(key)
        }
        Object.keys(data).map((key, index) => (
            pushData(data, key)
        ))
        return rows
    }

    const rows = createRowData()
    console.log(rows)

  return (
    <TableContainer >
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Song Source</TableCell>
                    {Object.keys(rows[0]).map((key, index) => (
                        <TableCell key={key}>{key}</TableCell>
                    ))}
                </TableRow>
            </TableHead>

            <TableBody>
            {rows.map((row, inx) => (
                <TableRow
                key={Math.random()}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        {headers[inx]}
                    </TableCell>

                    {Object.keys(row).map((key, index) => (

                            <TableCell key={key}>{row[key]}</TableCell>

                    ))}
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
  );
}

export default DataTableExtendedSamples;
