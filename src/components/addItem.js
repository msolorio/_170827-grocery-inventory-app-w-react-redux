import React from 'react';
import {connect} from 'react-redux';
import {
  changeItemName,
  changeItemAmount,
  submitItem,
  toggleView
} from '../actions';

export function AddItem(props) {
  function onSubmit(e) {
    e.preventDefault();

    props.dispatch(submitItem(
      props.itemNameInputVal, props.itemAmountInputVal
    ));

    props.dispatch(changeItemName(''));
    props.dispatch(changeItemAmount(''));

    props.dispatch(toggleView('inventory'));
  }

  return (
    <div className="AddItem">
      <form className="form"
        onSubmit={onSubmit}>
        <h1 className="headline">Add An Item</h1>

        <div className="formGroup">
          <label className="label"
            htmlFor="itemName">Item Name &nbsp;</label>
          <input className="input"
            id="itemName"
            onChange={(e) => props.dispatch(changeItemName(e.target.value))}
            value={props.itemNameInputVal}/>
        </div>

        <div className="formGroup">
          <label className="label"
            htmlFor="itemAmount">Item Amount &nbsp;</label>
          <input className="input"
            id="itemAmount"
            type="number"
            onChange={(e) => props.dispatch(changeItemAmount(parseInt(e.target.value, 10)))}
            value={props.itemAmountInputVal}/>
        </div>

        <button type="submit">Add Item</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps)(AddItem);
