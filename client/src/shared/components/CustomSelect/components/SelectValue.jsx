import React from 'react';
import {SelectValueWrapper} from "./SelectValue.styles";
import Chip from "@mui/material/Chip";
import CodeIcon from "@mui/icons-material/Code";

const SelectValue = ({selected}) => {
    const value = Array.isArray(selected) ? selected : [selected]
    return (
        <SelectValueWrapper>
            {
                value
                    .slice(0, 3)
                    .map((item, index) => (
                        <Chip
                            icon={index < 2 ? <CodeIcon/> : <></>}
                            key={item}
                            label={index < 2 ? item : `+${selected.length - 2} more`}
                            sx={{
                                background: '#2E3239',
                                color: 'white',
                                borderRadius: '5px',
                                marginRight: '5px',
                                height: '30px',
                            }}
                        />
                    ))
            }
        </SelectValueWrapper>
    );
};

export default SelectValue;
