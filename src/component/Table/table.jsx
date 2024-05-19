import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

const TableComponentCantainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  width: "1300px",
  height: "600px",
});

export default function TableComponent({ fields, data }) {
  const [searchText, setSearchText] = React.useState("");
  const [rows, setRows] = React.useState(data);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
    const filteredRows = data.filter((row) =>
      fields.some(
        (field) =>
          row[field] &&
          row[field]
            .toString()
            .toLowerCase()
            .includes(event.target.value.toLowerCase())
      )
    );
    setRows(filteredRows);
  };

  const columns = fields
    .filter((field) => field !== "id")
    .map((field) => ({
      field: field,
      headerName: field.charAt(0).toUpperCase() + field.slice(1),
      width: 150,
    }));

  return (
    <TableComponentCantainer>
      <TextField
        value={searchText}
        onChange={handleSearch}
        placeholder="Search…"
        size="small"
        sx={{ width: "300px", margin: "10px" }}
      />
      <DataGrid
        rows={rows} // Use filtered rows here
        columns={columns}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        disableColumnSorting
        disableColumnMenu
        disableAutosize
      />
    </TableComponentCantainer>
  );
}

// import * as React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: "#0089E9",
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

// export default function TableComponent() {
//   return (
//     <TableComponentCantainer>
//         <Search/>
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 700 }} aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell>Dessert (100g serving)</StyledTableCell>
//               <StyledTableCell align="right">Calories</StyledTableCell>
//               <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
//               <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
//               <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row) => (
//               <StyledTableRow key={row.name}>
//                 <StyledTableCell component="th" scope="row">
//                   {row.name}
//                 </StyledTableCell>
//                 <StyledTableCell align="right">{row.calories}</StyledTableCell>
//                 <StyledTableCell align="right">{row.fat}</StyledTableCell>
//                 <StyledTableCell align="right">{row.carbs}</StyledTableCell>
//                 <StyledTableCell align="right">{row.protein}</StyledTableCell>
//               </StyledTableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </TableComponentCantainer>
//   );
// }
