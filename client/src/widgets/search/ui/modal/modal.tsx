import { FC, useState } from 'react';
import { useFilters } from '../../hooks';
import clsx from 'clsx';
import { Modal as ResponsiveModal } from 'react-responsive-modal';
import { ArrowRight, Cross } from '@/shared/assets';
import { Flex, Typography } from '@/shared/ui';
import { Tag } from '../tag';
import { Filter } from '../../types';
import { TagList } from '../tag-list';
import { SearchInput } from '../search-input';
import styles from './modal.module.scss';

interface ModalProps {
  isOpened: boolean;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ isOpened, onClose }) => {
  const { filterArr, setFilterArr, filterIndex, setFilterIndex } = useFilters();
  const currentFilter = filterArr[filterIndex];
  const [isFilterOpened, setIsFilterOpened] = useState(false);

  const handleOpenFilter = (index: number) => {
    setIsFilterOpened(true);
    setFilterIndex(index);
  };

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

  const leftButtonHandler = () => {
    if (isFilterOpened) {
      setFilterArr(prev =>
        prev.map((item, index) => {
          if (index === filterIndex) {
            switch (item.type) {
              case 'text':
                item.filterValue = '';

                return item;

              case 'multiple':
              case 'checkbox':
                item.filterValue = [];

                return item;

              case 'range':
                item.filterValue = null;

                return item;
            }
          }

          return item;
        })
      );
    } else {
      setFilterArr(prev =>
        prev.map(item => {
          switch (item.type) {
            case 'text':
              item.filterValue = '';

              return item;

            case 'multiple':
            case 'checkbox':
              item.filterValue = [];

              return item;

            case 'range':
              item.filterValue = null;

              return item;
          }
        })
      );
    }
  };

  const handleRightButtonClick = () => {
    if (isFilterOpened) {
      setIsFilterOpened(false);
    } else {
      onClose();
    }
  };

  return (
    <ResponsiveModal
      open={isOpened}
      onClose={onClose}
      center
      classNames={{
        modalContainer: styles.modal,
        modal: styles.modal_content,
      }}
      showCloseIcon={false}
    >
      <Flex align='center' justify='space-between'>
        <Typography variant='h2' size='heading_m' className={styles.title}>
          {isFilterOpened ? currentFilter.label : 'Filters'}
        </Typography>
        <button onClick={onClose} className={styles.close}>
          <Cross className={styles.close_icon} />
        </button>
      </Flex>

      <Flex height='100%' direction='column' gap='8'>
        {!isFilterOpened ? (
          <ul className={styles.option_list}>
            {filterArr.map((item, index) => (
              <li
                key={item.value}
                className={styles.option_item}
                onClick={() => handleOpenFilter(index)}
              >
                <Flex width='100%' align='center' justify='space-between'>
                  <Flex align='center' gap='8px'>
                    <Typography variant='p' size='body_m'>
                      {item.label}
                    </Typography>
                    {renderTag(item)}
                  </Flex>
                  <ArrowRight />
                </Flex>
              </li>
            ))}
          </ul>
        ) : (
          <Flex direction='column' gap='16px'>
            <Flex className={styles.searchinput_wrapper}>
              <SearchInput />
            </Flex>
            <TagList />
          </Flex>
        )}

        <Flex margin='auto 0 0 0' gap='8px'>
          <button onClick={leftButtonHandler} className={styles.button}>
            Clear
          </button>
          <button
            onClick={handleRightButtonClick}
            className={clsx(styles.button, {}, [styles.button_outlined])}
          >
            {isFilterOpened ? 'Save' : 'Search'}
          </button>
        </Flex>
      </Flex>
    </ResponsiveModal>
  );
};
