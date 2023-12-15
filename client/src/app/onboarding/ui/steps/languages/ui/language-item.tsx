import { BadgeIcon, Flex, Typography } from '@/shared/ui';
import styles from './language-item.module.scss';

interface LanguageItemProps {
  language: string;
  onClick: () => void;
  isActive?: boolean;
}
export const LanguageItem = ({ language, onClick, isActive }: LanguageItemProps) => {
  return (
    <div onClick={() => onClick()} className={styles.language_item}>
      <Flex gap='8px' align='center'>
        <BadgeIcon isActive={isActive} data={language} />
        <Typography className={styles.language_text} size='body_s'>
          {language}
        </Typography>
      </Flex>
    </div>
  );
};
