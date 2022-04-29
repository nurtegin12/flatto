import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SearchFilterBlock = ({ getProducts }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const filter = new URLSearchParams(location.search);
  const [searchValue, setSearchValue] = useState(filter.get("q") || "");
  const [colorValue, setColorValue] = useState(filter.get("color") || "");

  const handleFilters = (key, value) => {
    filter.set(key, value);
    navigate(`${location.pathname}?${filter.toString()}`);
    setSearchValue(filter.get("q") || "");
    setColorValue(filter.get("color") || "");
    getProducts();
  };

  const resetFilter = () => {
    setSearchValue("");
    setColorValue("");
    navigate("/");
    getProducts();
  };

  return (
    <div className="filters-block">
      <TextField
        color="success"
        variant="standard"
        value={searchValue}
        onChange={(e) => handleFilters("q", e.target.value)}
        type="search"
        label="Поиск..."
      />
      <FormControl variant="standard">
        <InputLabel color="success" id="color-label">
          Фильтровать по цвету
        </InputLabel>
        <Select
          color="success"
          value={colorValue}
          onChange={(e) => handleFilters("color", e.target.value)}
          label="Фильтровать по цвету"
          labelId="color-label"
        >
          <MenuItem value="black">Чёрный</MenuItem>
          <MenuItem value="white">Белый</MenuItem>
          <MenuItem value="grey">Серый</MenuItem>
          <MenuItem value="dark-blue">Тёмно-синий</MenuItem>
        </Select>
      </FormControl>
      <Button color="success" variant="outlined" onClick={resetFilter}>
        Сбросить
      </Button>
    </div>
  );
};

export default SearchFilterBlock;
