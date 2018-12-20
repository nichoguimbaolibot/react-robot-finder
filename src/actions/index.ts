import { CHANGE_SEARCH_FIELD } from './types'

export const changeSearchField = (text: string) => {
  return {
    type: CHANGE_SEARCH_FIELD,
    searchField: text,
  }
}