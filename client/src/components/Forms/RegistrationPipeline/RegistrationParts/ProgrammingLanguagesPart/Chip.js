import React, {useState} from "react";
import {Option} from "./Programming.styles";
import TerminalIcon from '@mui/icons-material/Terminal';
import DoneIcon from '@mui/icons-material/Done';


export default function OutlinedChips(props) {
  const [selected, setSelected] = useState(false);

  return (
    <Option
      onClick={() => {
        setSelected((s) => !s)
        props.handleAddRemove(props.label);
        }
      }
      onDelete={selected && (() => {})}
      color={selected ? "primary" : "default"}
      variant={selected ? "default" : "outlined"}
      deleteIcon={<DoneIcon />}
      label={props.label}
      icon={<TerminalIcon />}
    />
  );
}
