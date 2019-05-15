import { DATA_RECEIVED } from "../actions";

export function bottleReducer(state = {}, action) {
  switch (action.type) {
    case DATA_RECEIVED: return {...state, data: action.apiResponse}
    default:
      return state;
  }
}
