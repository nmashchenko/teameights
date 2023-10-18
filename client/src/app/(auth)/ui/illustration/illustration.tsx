import { Email } from '@/shared/assets';
import { Button, Flex, Typography } from '@/shared/ui';
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
      <Flex justify='center' align='center' direction='column' gap='8px'>
        <Typography size='heading_m'>{mainText}</Typography>
        <Typography size='body_m' color='greyNormal'>
          {subText}
        </Typography>
      </Flex>
      {buttonText && (
        <Flex align='center' justify='center'>
          <Button onClick={buttonHandler} width='136px' typeBtn='tertiary' color='greenBright'>
            {buttonText}
          </Button>
        </Flex>
      )}
    </div>
  );
};
