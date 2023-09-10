import { Email } from 'shared/assets/Illustrations/Email';
import { Colors } from 'shared/constant/colors';
import { Typography, TypographySize } from 'shared/ui';
import styles from './styles.module.scss';

interface ConfirmProps {
  mainText: string;
  subText: string;
  // buttonText: string;
  // buttonHandler: () => void;
}

export const IllustrationStatus = ({
  mainText,
  subText // buttonText,
} // buttonHandler
: ConfirmProps) => {
  return (
    <div className={styles.container}>
      <Email />
      <div className={styles.info}>
        <Typography size={TypographySize.Heading_M}>{mainText}</Typography>
        <Typography size={TypographySize.Body_L} color={Colors.GreyNormal}>
          {subText}
        </Typography>
        {/* <div className={styles.buttonWrapper}>
          <Button typeBtn='tertiary' color={Colors.GreenBright} onClick={buttonHandler}>
            {buttonText}
          </Button>
        </div> */}
      </div>
    </div>
  );
};
