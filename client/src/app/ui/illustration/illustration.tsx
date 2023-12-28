import { ArrowLeftIcon, EmailIllustration } from '@/shared/assets';
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
      <EmailIllustration />
      <Flex direction='column' gap={24} className={styles.text_align}>
        <Flex justify='center' align='center' direction='column' gap={8}>
          <Typography size='heading_m'>{mainText}</Typography>
          <Typography size='body_m' color='greyNormal'>
            {subText}
          </Typography>
        </Flex>
        {buttonText && (
          <Flex align='center' justify='center'>
            <Button
              onClick={buttonHandler}
              width='136px'
              size='m'
              typeBtn='secondary'
              type='button'
            >
              <ArrowLeftIcon />
              {buttonText}
            </Button>
          </Flex>
        )}
      </Flex>
    </div>
  );
};
