import { useReducer } from 'react';
import { Filter, IFilterState } from '../types';
import { ActionTypesEnum, Action } from '../actions';

const reducer = (state: IFilterState, action: Action<ActionTypesEnum>) => {
  switch (action.type) {
    case ActionTypesEnum.CLEAR_ONE_MULTIPLE_OPTION: {
      const { filterIndex, optionIndex } = action.payload;
      const filter = state.filterArr[filterIndex];

      if (filter.type === 'checkbox' || filter.type === 'multiple') {
        const newFilterValue = filter.filterValue.filter((item, i) => i !== optionIndex);

        return {
          isTimerDisabled: false,
          filterArr: state.filterArr.map((item, i) => {
            if (filterIndex === i) {
              item.filterValue = newFilterValue;
            }

            return item;
          }),
        };
      }

      return state;
    }

    case ActionTypesEnum.CLEAR_ALL_EXCEPT_ONE_MULTIPLE_OPTIONS: {
      const filterIndex = action.payload;
      const filter = state.filterArr[filterIndex];

      if (filter.type === 'checkbox' || filter.type === 'multiple') {
        const newFilterValue = [filter.filterValue[0]];

        return {
          isTimerDisabled: true,
          filterArr: state.filterArr.map((item, i) => {
            if (filterIndex === i) {
              item.filterValue = newFilterValue;
            }

            return item;
          }),
        };
      }

      return state;
    }

    case ActionTypesEnum.CHANGE_FILTER_VALUE: {
      const { filterIndex, newValue } = action.payload;

      return {
        isTimerDisabled: false,
        filterArr: state.filterArr.map((item, i) => {
          if (filterIndex === i) {
            item.filterValue = newValue;
          }

          return item;
        }),
      };
    }

    case ActionTypesEnum.CLEAR_FILTER: {
      const filterIndex = action.payload;

      return {
        isTimerDisabled: false,
        filterArr: state.filterArr.map((item, index) => {
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
        }),
      };
    }

    case ActionTypesEnum.CLEAR_ALL_FILTERS: {
      return {
        isTimerDisabled: false,
        filterArr: state.filterArr.map(item => {
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
        }),
      };
    }

    default:
      return state;
  }
};

export const useFilterReducer = (initialState: Filter[]) => {
  return useReducer(reducer, {
    isTimerDisabled: false,
    filterArr: initialState,
  });
};
