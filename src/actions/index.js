export const TOGGLE_VIEW = 'TOGGLE_VIEW';
export const toggleView = view => ({
  type: TOGGLE_VIEW,
  view
});

export const CHANGE_ITEM_NAME = 'CHANGE_ITEM_NAME';
export const changeItemName = (inputVal) => ({
  type: CHANGE_ITEM_NAME,
  inputVal
});

export const CHANGE_ITEM_AMOUNT = 'CHANGE_ITEM_AMOUNT';
export const changeItemAmount = (inputVal) => ({
  type: CHANGE_ITEM_AMOUNT,
  inputVal
});
