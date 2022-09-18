import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";


function DataTable(props) {

    const data = props.data

    function createRowData() {
        let rows = []
        Object.keys(data).map((key, index) => (
            rows.push({key: key, value: data[key]})
          ))
        return rows
    }

    const rows = createRowData()

  return (
    <TableContainer >
        <Table padding='none' aria-label="simple table">

            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.key}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    {Object.keys(row).map((key, index) => (
                        <TableCell key={key}>{Array.isArray(row[key]) ? row[key].join(', '): row[key]}</TableCell>
                    ))}
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
  );
}

export default DataTable;
