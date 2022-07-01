import {
  Grid,
  Box,
  styled,
  Paper,
  alpha,
  InputBase,
  Button,
  Stack,
  createStyles,
} from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect } from "react";

import ReplayIcon from "@mui/icons-material/Replay";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Pagination from "@mui/material/Pagination";
import { IThead, ITbody } from "../data";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: "#00b3fc",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  transition: "all 0.5s",
  "&:nth-of-type(odd)": {
    backgroundColor: "#F4FAFF",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  "&:hover": {
    backgroundColor: "#00b3fc",
  },
}));

const Search = styled("div")(({ theme }) => ({
  width: "400px",
  position: "relative",
  padding: "15px 10px",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#fff",
  "&:hover": {
    backgroundColor: "white",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  right: "0",
  top: "0",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    // vertical padding + font size from searchIcon
    paddingLeft: `${theme.spacing(2)}`,
    transition: theme.transitions.create("width"),
    width: "340px",
    color: "black",
    fontSize: "18px",
  },
}));



const Header: React.FC<{ thead: IThead[]; tbody: ITbody[] }> = ({
  thead,
  tbody,
}) => {

  return (
    <>
      <Stack
        spacing={5}
        sx={{
          padding: "60px 70px",
          overflow:"hidden"
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon
                sx={{
                  width: "35px",
                  height: "35px",
                  color: "#ccc",
                }}
              />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search table item"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box>
            <Button
              variant="outlined"
              sx={{
                padding: "16px",
                boxSizing: "border-box",
                marginRight: "5px",
                borderColor: "#00b3fc",
                color: "#00b3fc",
              }}
            >
              <ReplayIcon
                sx={{
                  height: "30px",
                  width: "30px",
                }}
              />
            </Button>
            <Button
              variant="contained"
              sx={{
                padding: "16px",
                boxSizing: "border-box",
                backgroundColor: "#00b3fc",
              }}
            >
              <FilterAltOutlinedIcon
                sx={{
                  height: "30px",
                  width: "30px",
                  color: "white",
                }}
              />
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            overflow: "scroll",
          }}
        >
          <TableContainer
          className="a"
            component={Paper}
            sx={{
              padding: "30px 20px 90px 20px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "space-between",
              justifyContent: "space-between",
              borderRadius: "20px",
            }}
          >
            <Table sx={{ width: "2000px" }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {thead.map((th: IThead) => (
                    <StyledTableCell
                      key={th.id}
                      sx={{ border: "0" }}
                      align="right"
                    >
                      {th.name}
                    </StyledTableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {tbody.map((tr: ITbody) => (
                 
                  <StyledTableRow
                    key={tr.id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      border: "0",
                    }}
                  >
                    <TableCell>{tr.kys}</TableCell>
                    <TableCell>{tr.tarix}</TableCell>
                    <TableCell sx={{ width: "10% !important" }}>
                      {tr.interval}
                    </TableCell>
                    <TableCell>{tr.hekim}</TableCell>
                    <TableCell>{tr.OTİ}</TableCell>
                    <TableCell>{tr.maşınlar}</TableCell>
                    <TableCell>{tr.seyyar}</TableCell>
                    <TableCell>{tr.barb}</TableCell>
                    <TableCell>{tr.uarb}</TableCell>
                    <TableCell>{tr.nevroloji}</TableCell>
                    <TableCell>{tr.psix}</TableCell>
                    <TableCell>{tr.şüa}</TableCell>
                    <TableCell>{tr.lab}</TableCell>
                    <TableCell>{tr.cerrah}</TableCell>
                    <TableCell>{tr.cerrah1}</TableCell>
                    <TableCell>{tr.cerrah2}</TableCell>
                    <TableCell>{tr.cerrah3}</TableCell>
                    <TableCell>{tr.cerrah4}</TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
              <Pagination
                count={5}
                variant="outlined"
                shape="rounded"
                sx={{
                  position: "fixed",
                  right: "8%",
                  bottom: "25%",
                  ".MuiButtonBase-root,.MuiPaginationItem-sizeMedium ,.MuiPaginationItem-outlined ,.MuiPaginationItem-rounded, .MuiPaginationItem-outlinedPrimary, .Mui-selected, .MuiPaginationItem-page":
                    {
                      backgroundColor: "white",
                      color: "#00b3fc",
                      borderColor: "#00b3fc",
                      "&:hover": {
                        backgroundColor: "#00b3fc",
                        color: "white",
                      },
                      "&:focus": {
                        backgroundColor: "#00b3fc",
                        color: "white",
                      },
                    },
                }}
              /> 
            </Table>
           
          </TableContainer>
        </Box>
      </Stack>
   
    </>
  );
};

export default Header;
