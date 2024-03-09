import { MultiValue } from 'react-select';
import { Action, ActionTypesEnum } from './types';
import { IOptionItem } from '../types';

export const changeFilterValue = (
  filterIndex: number,
  newValue: string | MultiValue<IOptionItem> | [number, number] | null
): Action<ActionTypesEnum.CHANGE_FILTER_VALUE> => ({
  type: ActionTypesEnum.CHANGE_FILTER_VALUE,
  payload: {
    filterIndex,
    newValue,
  },
});

export const clearOneMultipleOption = (
  filterIndex: number,
  optionIndex: number
): Action<ActionTypesEnum.CLEAR_ONE_MULTIPLE_OPTION> => ({
  type: ActionTypesEnum.CLEAR_ONE_MULTIPLE_OPTION,
  payload: { filterIndex, optionIndex },
});

export const clearAllExceptOneMultipleOptions = (
  filterIndex: number
): Action<ActionTypesEnum.CLEAR_ALL_EXCEPT_ONE_MULTIPLE_OPTIONS> => ({
  type: ActionTypesEnum.CLEAR_ALL_EXCEPT_ONE_MULTIPLE_OPTIONS,
  payload: filterIndex,
});

export const clearFilter = (filterIndex: number): Action<ActionTypesEnum.CLEAR_FILTER> => ({
  type: ActionTypesEnum.CLEAR_FILTER,
  payload: filterIndex,
});

export const clearAllFilters = (): Action<ActionTypesEnum.CLEAR_ALL_FILTERS> => ({
  type: ActionTypesEnum.CLEAR_ALL_FILTERS,
});
