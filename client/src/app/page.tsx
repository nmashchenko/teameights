import { Plus } from 'shared/assets/Icons/Plus';
import { Button } from 'shared/ui/Button/Button';
import { Typography, TypographySize } from 'shared/ui/Typography/Typography';

export default function Home() {
  return (
    <>
      <Typography size={TypographySize.Body_XL}>Hello everyone!</Typography>
      <Button typeBtn="primary" content="icon_button" size="l">
        <Plus />
      </Button>
    </>
  );
}
