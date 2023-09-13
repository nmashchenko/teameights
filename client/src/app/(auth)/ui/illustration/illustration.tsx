import { Email } from 'shared/assets';
import { Colors } from 'shared/constant';
import { Button, Typography } from 'shared/ui';
import styles from './illustration.module.scss';
import { FC } from 'react';

interface ConfirmProps {
  mainText: string;
  subText: string;
  buttonText?: string;
  buttonHandler?: () => void;
}

export const IllustrationStatus: FC<ConfirmProps> = props => {
  const { mainText, subText, buttonText, buttonHandler } = props;
  return (
    <div className={styles.container}>
      <Email />
      <div className={styles.info}>
        <Typography size='heading_m'>{mainText}</Typography>
        <Typography size='body_m' color={Colors.GreyNormal}>
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
