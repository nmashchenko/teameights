import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import "./SelectField.css";
import ArrowDown from '../../../../assets/Arrows/ArrowDown'

import { Item, PlaceholderText, CustomSelect } from "./SelectField.styles";

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: "400px",
      background: "white",
      boxSizing: "border-box",
      padding: "5px",
      margin: "10px 0",
      borderRadius: "0.75em",
      color: "black",
      overflow: "auto",
      outline: "0px",
    },
  },
};

export default function MultipleSelect(props) {
  return (
    <div>
      <FormControl sx={{ m: 1, width: 130 }}>
        <CustomSelect
          IconComponent = {ArrowDown}
          multiple
          displayEmpty
          value={props.data}
          onChange={props.handleChange}
          input={<OutlinedInput />}
          variant="standard"
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <PlaceholderText>{props.inputName}</PlaceholderText>;
            }
            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          sx={{
            borderRadius: "0.75em",
            background: "none",
            height: "45px",
          }}
        >
          <Item disabled value="">
            <em>Select 1 or more</em>
          </Item>
          {props.options.map(({ label, value }) => (
            <Item key={label} value={label}>
              {label}
            </Item>
          ))}
        </CustomSelect>
      </FormControl>
    </div>
  );
}
