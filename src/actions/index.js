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

export const SUBMIT_ITEM = 'SUBMIT_ITEM';
export const submitItem = (itemName, itemAmount) => ({
  type: SUBMIT_ITEM,
  itemName,
  itemAmount
});

export const INCREMENT_ITEM = 'INCREMENT_ITEM';
export const incrementItem = (itemIndex) => ({
  type: INCREMENT_ITEM,
  itemIndex
});

export const DECREMENT_ITEM = 'DECREMENT_ITEM';
export const decrementItem = (itemIndex) => ({
  type: DECREMENT_ITEM,
  itemIndex
});

export const REMOVE_ITEM = 'REMOVE_ITEM';
export const removeItem = (itemIndex) => ({
  type: REMOVE_ITEM,
  itemIndex
});
