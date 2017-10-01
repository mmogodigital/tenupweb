import * as types from './constants';

export default function (state={}, action) {
  switch (action.type) {
    case types.CREATE_EVENT:
      state = Object.assign({}, state, {});
    break;
  }
  return state;
}
