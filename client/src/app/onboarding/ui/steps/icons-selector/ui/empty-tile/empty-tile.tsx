import styles from './empty-tile.module.scss';
import { FC } from 'react';

interface EmptyTileProps {
  type?: 'text' | 'icon';
}
export const EmptyTile: FC<EmptyTileProps> = ({ type = 'icon' }) => {
  switch (type) {
    case 'icon':
      return <div className={styles.empty_tile_icon}></div>;
    case 'text':
      return <div className={styles.empty_tile_text}></div>;
  }
};
