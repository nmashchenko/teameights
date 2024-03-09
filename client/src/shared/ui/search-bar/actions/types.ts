import { MultiValue } from 'react-select';
import { IOptionItem } from '../types';

export enum ActionTypesEnum {
  CHANGE_FILTER_VALUE = 'CHANGE_FILTER_VALUE',
  CLEAR_ONE_MULTIPLE_OPTION = 'CLEAR_ONE_MULTIPLE_OPTION',
  CLEAR_ALL_EXCEPT_ONE_MULTIPLE_OPTIONS = 'CLEAR_ALL_EXCEPT_ONE_MULTIPLE_OPTIONS',
  CLEAR_FILTER = 'CLEAR_FILTER',
  CLEAR_ALL_FILTERS = 'CLEAR_ALL_FILTERS',
}

type ActionsWithoutPayload = ActionTypesEnum.CLEAR_ALL_FILTERS;

interface ActionWithoutPayload {
  type: ActionsWithoutPayload;
}

export interface ActionWithPayload<T extends ActionTypesEnum> {
  type: T;
  payload: ActionsPayloads[T];
}

interface ActionsPayloads {
  [ActionTypesEnum.CHANGE_FILTER_VALUE]: {
    filterIndex: number;
    newValue: string | MultiValue<IOptionItem> | [number, number] | null;
  };
  [ActionTypesEnum.CLEAR_ONE_MULTIPLE_OPTION]: {
    filterIndex: number;
    optionIndex: number;
  };
  [ActionTypesEnum.CLEAR_ALL_EXCEPT_ONE_MULTIPLE_OPTIONS]: number;
  [ActionTypesEnum.CLEAR_FILTER]: number;
  [ActionTypesEnum.CLEAR_ALL_FILTERS]: never;
}

export type Action<T extends ActionTypesEnum> = T extends ActionsWithoutPayload
  ? ActionWithoutPayload
  : ActionWithPayload<T>;
