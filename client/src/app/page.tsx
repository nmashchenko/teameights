import { Plus } from 'shared/assets/Icons/Plus';
import { Button } from 'shared/ui/Button/Button';
import { Checkbox } from 'shared/ui/Fields/Checkbox/Checkbox';
import {
  Typography,
  TypographySize,
  TypographyVariants,
} from 'shared/ui/Typography/Typography';

export default function Home() {
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
      <Checkbox name="123" label="123" />
      <Checkbox name="123" width="16px" height="16px" />
    </>
  );
}
