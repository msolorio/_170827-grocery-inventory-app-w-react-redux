import * as actions from '../actions';

const initialState = {
  view: 'inventory'
}

export const groceryAppReducer = (state=initialState, action) => {
  if (action.type === actions.TOGGLE_VIEW) {
    return Object.assign({}, state, {
      view: action.view
    });
  }

  return state;
}
