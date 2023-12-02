import { FC, useState } from 'react';
import { useFilters } from '../../hooks';
import clsx from 'clsx';
import { Modal as ResponsiveModal } from 'react-responsive-modal';
import { Cross } from '@/shared/assets';
import { Flex, Typography } from '@/shared/ui';
import { FilterMenu } from '../filter-menu';
import { ModalMenu } from '../modal-menu';
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
          <ModalMenu filterArr={filterArr} onOpenFilter={handleOpenFilter} />
        ) : (
          <FilterMenu />
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
