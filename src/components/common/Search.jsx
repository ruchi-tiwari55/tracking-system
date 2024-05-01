import React from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";

const SearchContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  maxWidth: "104%",
  margin: "0 auto", 
  width: "70%",
  marginBottom: 5,
  "@media (max-width: 600px)": {
    marginHorizontal: 0,
    width: "100%",
    marginBottom: 5,
  },
});

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: 25,
    fontWeight:'700',
    fontsize:18
  },
  
});

const SearchBar = () => {
  return (
    <SearchContainer>
      <CustomTextField
        fullWidth
        variant="outlined"
        placeholder="Coming Soon..."
        InputProps={{
          endAdornment: (
            <>
              <IconButton>
                <MicIcon />
              </IconButton>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </>
          ),
        }}
      />
    </SearchContainer>
  );
};

export default SearchBar;
