import { Grid , Box, styled, Paper, alpha, InputBase, Button,Stack} from '@mui/material'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

import ReplayIcon from '@mui/icons-material/Replay';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';






function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
  
    color:"#1565C0",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#124595",
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));







const Search = styled('div')(({ theme }) => ({
  width:"400px",
  position: 'relative',
  padding:"15px 10px",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#fff",
  '&:hover': {
    backgroundColor: "white",
  },
 
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  right:'0',
  top:"0",
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    
    // vertical padding + font size from searchIcon
    paddingLeft: `${theme.spacing(2)}`,
    transition: theme.transitions.create('width'),
    width:"340px",
    color:"#ccc",
    fontSize:"18px"
  },

}));
const Header = () => {
  return (
   <>
   <Stack spacing={5} sx={{
     padding:"60px 70px",
   }}>
   <Box sx={{
 
  display:"flex",
  justifyContent:"space-between"
 
}}>
  <Search>
            <SearchIconWrapper >
              <SearchIcon sx={{
                width:"35px",
                height:"35px",
                color:"#ccc"
              }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search table item"
              inputProps={{ 'aria-label': 'search' }}
            />
   </Search>
   <Box>
   <Button variant="outlined" sx={{
    padding:"16px",
    boxSizing:"border-box",
    marginRight:"5px"
   }}>
    <ReplayIcon sx={{
      height:"30px",
      width:"30px"
    }}/>
   </Button>
   <Button variant="contained" sx={{
      padding:"16px",
      boxSizing:"border-box",
   }}>
   <FilterAltOutlinedIcon  sx={{
      height:"30px",
      width:"30px"
    }}/>
   </Button>
  
   </Box>
</Box>
<Box>
<TableContainer component={Paper} sx={{padding:"40px 20px"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell  sx={{border:"0"}}>Dessert (100g serving)</TableCell> */}
            <StyledTableCell  sx={{border:"0"}} align="right">Calories</StyledTableCell>
            <StyledTableCell  sx={{border:"0"}} align="right">Calories</StyledTableCell>
            <StyledTableCell  sx={{border:"0"}} align="right">Calories</StyledTableCell>
            <StyledTableCell  sx={{border:"0"}} align="right">Calories</StyledTableCell>
            <StyledTableCell  sx={{border:"0"}} align="right">Calories</StyledTableCell>
            <StyledTableCell  sx={{border:"0"}} align="right">Calories</StyledTableCell>
            <StyledTableCell  sx={{border:"0"}} align="right">Calories</StyledTableCell>
            <StyledTableCell  sx={{border:"0"}} align="right">Calories</StyledTableCell>
            <StyledTableCell  sx={{border:"0"}} align="right">Calories</StyledTableCell>
            <StyledTableCell  sx={{border:"0"}} align="right">Calories</StyledTableCell>
            <StyledTableCell  sx={{border:"0"}} align="right">Calories</StyledTableCell>
            <StyledTableCell  sx={{border:"0"}} align="right">Calories</StyledTableCell>
            <StyledTableCell  sx={{border:"0"}} align="right">Calories</StyledTableCell>
            <StyledTableCell  sx={{border:"0"}} align="right">Calories</StyledTableCell>
            <StyledTableCell  sx={{border:"0"}} align="right">Calories</StyledTableCell>
            <StyledTableCell  sx={{border:"0"}} align="right">Calories</StyledTableCell>
            <StyledTableCell  sx={{border:"0"}} align="right">Calories</StyledTableCell>
            <StyledTableCell  sx={{border:"0"}} align="right">Calories</StyledTableCell>
            <StyledTableCell  sx={{border:"0"}} align="right">Calories</StyledTableCell>
            <StyledTableCell  sx={{border:"0"}} align="right">Calories</StyledTableCell>
            <StyledTableCell  sx={{border:"0"}} align="right">Calories</StyledTableCell>
            <StyledTableCell  sx={{border:"0"}} align="right">Calories</StyledTableCell>
            <StyledTableCell  sx={{border:"0"}} align="right">Calories</StyledTableCell>
            
   
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow 
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } , border:"0"}}
            >
              {/* <TableCell component="th" scope="row" sx={{border:"0"}}>
                {row.name}
              </TableCell> */}
              <TableCell  >{row.calories}</TableCell>
              <TableCell  >{row.calories}</TableCell>
              <TableCell  >{row.calories}</TableCell>
              <TableCell  >{row.calories}</TableCell>
              <TableCell  >{row.calories}</TableCell>
              <TableCell  >{row.calories}</TableCell>
              <TableCell  >{row.calories}</TableCell>
              <TableCell  >{row.calories}</TableCell>
              <TableCell  >{row.calories}</TableCell>
              <TableCell  >{row.calories}</TableCell>
              <TableCell  >{row.calories}</TableCell>
              <TableCell  >{row.calories}</TableCell>
              <TableCell  >{row.calories}</TableCell>
              <TableCell  >{row.calories}</TableCell>
              <TableCell  >{row.calories}</TableCell>
              <TableCell  >{row.calories}</TableCell>
              <TableCell  >{row.calories}</TableCell>
              <TableCell  >{row.calories}</TableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</Box>
   </Stack>



   </>
  )
}

export default Header