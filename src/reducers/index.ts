import { CHANGE_SEARCH_FIELD } from '../actions/types'

interface IInitialState {
  searchfield: string,
}

interface IAction {
  payload: string,
  type: string,
}

export const getSearchField = (state: IInitialState, action: IAction) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return {
        ...state,
        searchField: action.payload
      }
    default:
    return state;
  }
}