import { Grid , Box, styled, Paper, alpha, InputBase, Button} from '@mui/material'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

import ReplayIcon from '@mui/icons-material/Replay';

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
<Box sx={{
  padding:"60px 70px",
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
    boxSizing:"border-box",
    padding:"20px",
    marginRight:"5px"
   }}>
    <ReplayIcon/>
   </Button>
   <Button variant="outlined" sx={{
    padding:"20px"
   }}>
   <FilterAltOutlinedIcon/>
   </Button>
  
   </Box>
   
 
</Box>


   </>
  )
}

export default Header