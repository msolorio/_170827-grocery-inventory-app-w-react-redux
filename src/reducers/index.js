import * as actions from '../actions';

const initialState = {
  view: 'inventory',
  itemNameInputVal: '',
  itemAmountInputVal: ''
}

export const groceryAppReducer = (state=initialState, action) => {
  if (action.type === actions.TOGGLE_VIEW) {
    return Object.assign({}, state, {
      view: action.view
    });
  }

  if (action.type === actions.CHANGE_ITEM_NAME) {
    return Object.assign({}, state, {
      itemNameInputVal: action.inputVal
    });
  }

  if (action.type === actions.CHANGE_ITEM_AMOUNT) {
    return Object.assign({}, state, {
      itemAmountInputVal: action.inputVal
    });
  }

  return state;
}
