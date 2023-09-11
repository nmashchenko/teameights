import { Email } from 'shared/assets';
import { Colors } from 'shared/constant';
import { Button, Typography, TypographySize } from 'shared/ui';
import styles from './illustration.module.scss';

interface ConfirmProps {
  mainText: string;
  subText: string;
  buttonText?: string;
  buttonHandler?: () => void;
}

export const IllustrationStatus = ({
  mainText,
  subText,
  buttonText,
  buttonHandler,
}: ConfirmProps) => {
  return (
    <div className={styles.container}>
      <Email />
      <div className={styles.info}>
        <Typography size={TypographySize.Heading_M}>{mainText}</Typography>
        <Typography size={TypographySize.Body_L} color={Colors.GreyNormal}>
          {subText}
        </Typography>
      </div>
      {buttonText && (
        <div className={styles.buttonWrapper}>
          <Button onClick={buttonHandler} width='136px'>
            {buttonText}
          </Button>
        </div>
      )}
    </div>
  );
};