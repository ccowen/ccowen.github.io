import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

import songData from '../../../data/pages/woven-time/songData';

function SongDataTable(props) {

    const songInfo = songData['records']['sample_songs'][props.songId]
    const songSamples = songData['records']['sample_songs'][props.songId]['samples']

    function createRowData(songId) {
        let rows = []
        Object.keys(songSamples).map((key, index) => (
            rows.push(songSamples[key])
          ))
        return rows
    }

    const rows = createRowData(props.songId)

  return (
    <TableContainer >
        <Table padding='none' sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Song Source</TableCell>
                    {Object.keys(rows[0]).map((key, index) => (
                        (props.columns.includes(key) ? <TableCell key={key}>{key}</TableCell> : null)
                    ))}
                </TableRow>
            </TableHead>

            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.sample_song_start}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        {songInfo.name} by {songInfo.artist}
                    </TableCell>
                    {Object.keys(row).map((key, index) => (
                        (props.columns.includes(key) ? <TableCell key={key}>{row[key]}</TableCell> : null)
                    ))}
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
  );
}

export default SongDataTable;
