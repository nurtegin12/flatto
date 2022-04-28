import * as React from "react";
import Box from "@mui/material/Box";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Button } from "@mui/material";

export default function FormPlay() {
  const [name, setName] = React.useState("Composed TextField");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl variant="standard">
        <InputLabel htmlFor="component-helper">Фамилия</InputLabel>
        <Input
          id="component-helper"
          onChange={handleChange}
          aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text"></FormHelperText>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-helper">Имя</InputLabel>
        <Input
          id="component-helper"
          onChange={handleChange}
          aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text"></FormHelperText>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-helper">Отчество</InputLabel>
        <Input
          id="component-helper"
          onChange={handleChange}
          aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text"></FormHelperText>
      </FormControl>
      <div>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-helper">
            Введите номер карточки
          </InputLabel>
          <Input
            id="component-helper"
            onChange={handleChange}
            aria-describedby="component-helper-text"
          />
          <FormHelperText id="component-helper-text">
            состоит из 16 цифр
          </FormHelperText>
        </FormControl>

        <FormControl variant="standard">
          <InputLabel htmlFor="component-helper">ММ/ГГ</InputLabel>
          <Input
            id="component-helper"
            onChange={handleChange}
            aria-describedby="component-helper-text"
          />
          <FormHelperText id="component-helper-text">Месяц, Год</FormHelperText>
        </FormControl>
      </div>
      <div>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-helper">CVV/CVC</InputLabel>
          <Input
            id="component-helper"
            onChange={handleChange}
            aria-describedby="component-helper-text"
          />
          <FormHelperText id="component-helper-text">
            состоит из 3 букв
          </FormHelperText>
        </FormControl>
      </div>
      <div>
        <Button variant="contained">Оплатить</Button>
      </div>
    </Box>
  );
}
