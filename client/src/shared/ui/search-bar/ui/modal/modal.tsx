import { FC } from 'react';
import { useFilters } from '../../hooks';
import clsx from 'clsx';
import { CrossIcon } from '@/shared/assets';
import { Drawer, Flex, Typography } from '@/shared/ui';
import { FilterMenu } from '../filter-menu';
import { ModalMenu } from '../modal-menu';
import styles from './modal.module.scss';
import { clearAllFilters, clearFilter } from '../../actions';

interface ModalProps {
  isOpened: boolean;
  onClose: () => void;
  isFilterOpened: boolean;
  onOpenFilter: () => void;
  onCloseFilter: () => void;
}

export const Modal: FC<ModalProps> = ({
  isOpened,
  onClose,
  isFilterOpened,
  onOpenFilter,
  onCloseFilter,
}) => {
  const { filterArr, dispatch, filterIndex, setFilterIndex } = useFilters();
  const currentFilter = filterArr[filterIndex];

  const handleOpenFilter = (index: number) => {
    onOpenFilter();
    setFilterIndex(index);
  };

  const leftButtonHandler = () => {
    if (isFilterOpened) {
      dispatch(clearFilter(filterIndex));
    } else {
      dispatch(clearAllFilters());
    }
  };

  const handleRightButtonClick = () => {
    if (isFilterOpened) {
      onCloseFilter();
    } else {
      onClose();
    }
  };

  return (
    <Drawer
      open={isOpened}
      onClose={onClose}
      isFullHeight
      className={styles.modal_content}
      overlayClassName={styles.modal}
    >
      <Flex align='center' justify='space-between'>
        <Typography variant='h2' size='heading_m' className={styles.title}>
          {isFilterOpened ? currentFilter.label : 'Filters'}
        </Typography>
        <button onClick={onClose} className={styles.close}>
          <CrossIcon className={styles.close_icon} />
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
    </Drawer>
  );
};
