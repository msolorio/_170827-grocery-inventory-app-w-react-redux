import * as actions from '../actions';

const initialState = {
  view: 'inventory',
  itemNameInputVal: '',
  itemAmountInputVal: '',
  items: [
    {
      itemName: 'spinach',
      itemAmount: 2
    }
  ]
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

  if (action.type === actions.SUBMIT_ITEM) {
    return Object.assign({}, state, {
      items: [
        ...state.items, {
          itemName: action.itemName,
          itemAmount: action.itemAmount
        }
      ]
    });
  }

  if (action.type === actions.INCREMENT_ITEM) {
    const currentItems = state.items;
    currentItems[action.itemIndex].itemAmount++;

    return Object.assign({}, state, {
      items: [
        ...currentItems
      ]
    });
  }

  if (action.type === actions.DECREMENT_ITEM) {
    const currentItems = state.items;

    if (currentItems[action.itemIndex].itemAmount !== 0) {
      currentItems[action.itemIndex].itemAmount--;
      return Object.assign({}, state, {
        items: [
          ...currentItems
        ]
      });
    }

  }

  return state;
}
