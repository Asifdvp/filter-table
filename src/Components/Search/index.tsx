import {
    Box,
    styled,
    InputBase,
    Button
  } from "@mui/material";
  import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
  import SearchIcon from "@mui/icons-material/Search";
  import ReplayIcon from "@mui/icons-material/Replay";
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
  
const   index = () => {
  return (
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
  )
}

index.propTypes = {}

export default index