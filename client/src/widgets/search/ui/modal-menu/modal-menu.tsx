import { FC } from 'react';
import { ArrowRightIcon } from '@/shared/assets';
import { Typography } from '@/shared/ui';
import { Flex } from '@/shared/ui';
import { Filter } from '../../types';
import { Tag } from '../tag';
import styles from './modal-menu.module.scss';

interface ModalMenuProps {
  filterArr: Filter[];
  onOpenFilter: (index: number) => void;
}

export const ModalMenu: FC<ModalMenuProps> = ({ filterArr, onOpenFilter }) => {
  const renderTag = (filter: Filter) => {
    switch (filter.type) {
      case 'text':
        if (filter.filterValue.length) {
          return <Tag>@{filter.filterValue}</Tag>;
        }

        break;
      case 'multiple':
      case 'checkbox':
        if (filter.filterValue.length) {
          return <Tag>{filter.filterValue.length}</Tag>;
        }

        break;
      case 'range':
        if (filter.filterValue) {
          return (
            <Tag>
              {filter.filterValue[0]}-{filter.filterValue[1]}
            </Tag>
          );
        }

        break;
    }
  };

  return (
    <ul className={styles.option_list}>
      {filterArr.map((item, index) => (
        <li key={item.value} className={styles.option_item} onClick={() => onOpenFilter(index)}>
          <Flex width='100%' align='center' justify='space-between'>
            <Flex align='center' gap='8px'>
              <Typography variant='p' size='body_m'>
                {item.label}
              </Typography>
              {renderTag(item)}
            </Flex>
            <ArrowRightIcon />
          </Flex>
        </li>
      ))}
    </ul>
  );
};
