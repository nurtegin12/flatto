import {
  Container,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React from "react";

const SearchFilterBlock = () => {
  return (
    <div className="search-filter-block">
      <TextField color="success" label="Поиск..." variant="standard" />
      {/* <FormControl variant="standard">
          <InputLabel id="color-select-label">Фильтровать по цвету</InputLabel>
          <Select id="color-select-label" label="Фильтровать по цвету">
            <MenuItem value="black">Чёрный</MenuItem>
            <MenuItem value="white">Белый</MenuItem>
            <MenuItem value="grey">Серый</MenuItem>
            <MenuItem value="dark-blue">Тёмно-синий</MenuItem>
          </Select>
        </FormControl> */}
    </div>
  );
};

export default SearchFilterBlock;
