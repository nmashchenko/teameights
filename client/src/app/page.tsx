'use client';

import { useState } from 'react';
import { Plus } from 'shared/assets/Icons/Plus';
import concentrations from 'shared/constant/concentrations';
import { Button } from 'shared/ui/Button/Button';
import { Checkbox } from 'shared/ui/Fields/Checkbox/Checkbox';
import { Input } from 'shared/ui/Fields/Input/Input';
import { Select } from 'shared/ui/Fields/Select/Select';
import { TextArea } from 'shared/ui/Fields/TextArea/TextArea';
import {
  Typography,
  TypographySize,
  TypographyVariants,
} from 'shared/ui/Typography/Typography';

export default function Home() {
  const [value, setValue] = useState('strign');
  const [checked, setChecked] = useState(true);
  // const [selectV, setSelectV] = useState([concentrations[0]]);

  // console.log(selectV);

  return (
    <>
      <Typography size={TypographySize.Body_XL} variant={TypographyVariants.h6}>
        Hello everyone!
      </Typography>

      <Typography size={TypographySize.Body_L}>Hello everyone!</Typography>
      <Typography size={TypographySize.Body_M}>Hello everyone!</Typography>
      <Button typeBtn="primary" content="icon_button" size="l">
        <Plus />
      </Button>
      <div>
        <Checkbox
          name="123"
          label="123"
          checked={checked}
          onChange={() => setChecked((prev) => !prev)}
        />
      </div>

      <div>
        <Checkbox
          name="123"
          width="16px"
          height="16px"
          checked={checked}
          onChange={() => setChecked((prev) => !prev)}
        />
      </div>

      <Input
        name="123"
        error="test error"
        maxWidth="200px"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <TextArea
        name="1232"
        label="Description"
        counterPosition="bottom"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxWidth="300px"
      />
      <div style={{ width: '400px' }}>
        <Select
          options={concentrations}
          // value={selectV}
          // onChange={(selections: any) => setSelectV(selections)}
          isCheckbox
          isMulti
        />
      </div>
    </>
  );
}
