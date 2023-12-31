import { BadgeText } from '@/shared/ui';
import styles from './text-layout.module.scss';
import { FC } from 'react';
import { Nullable } from '@teameights/types';

interface TextLayout {
  additionalTools?: Nullable<string[]>;
}

export const TextLayout: FC<TextLayout> = ({ additionalTools }) => {
  return (
    <>
      {additionalTools && (
        <div className={styles.grid_container}>
          {additionalTools?.map((framework, index) => <BadgeText data={framework} key={index} />)}
        </div>
      )}
    </>
  );
};
