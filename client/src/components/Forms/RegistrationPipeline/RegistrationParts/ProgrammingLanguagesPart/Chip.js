import React, {useState} from "react";
import Chip from "@mui/material/Chip";
import TerminalIcon from '@mui/icons-material/Terminal';
import DoneIcon from '@mui/icons-material/Done';



export default function OutlinedChips(props) {
  const [selected, setSelected] = useState(false);

  return (
    <Chip
      onClick={() => setSelected((s) => !s)}
      onDelete={selected && (() => {})}
      color={selected ? "primary" : "default"}
      variant={selected ? "default" : "outlined"}
      deleteIcon={<DoneIcon />}
      label={props.label}
      icon={<TerminalIcon />}
    />
  );
}
