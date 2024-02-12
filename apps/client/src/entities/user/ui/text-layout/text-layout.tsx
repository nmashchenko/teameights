import styles from '../user-card/user-card.module.scss';
import { BadgeText } from '@/shared/ui';
import { textLayoutConfig } from './text-layout-config';
import { FC } from 'react';

type TextProps = {
  texts: string[];
};

export const TextLayout: FC<TextProps> = ({ texts }) => {
  const layout = textLayoutConfig[texts.length] || textLayoutConfig.default;

  const isOneText = texts.length === 1;

  return (
    <div className={styles.text_container}>
      {layout.map((size, index) => (
        <BadgeText
          className={styles[size]}
          data={size === 'extra' ? `+${texts.length - 3}` : texts[isOneText ? 0 : index]}
          key={index}
        />
      ))}
    </div>
  );
};
