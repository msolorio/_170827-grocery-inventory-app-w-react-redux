import React from 'react';
import {changeItemName, changeItemAmount} from '../actions';
import {connect} from 'react-redux';

export function AddItem(props) {
  return (
    <div className="AddItem">
      <form className="form">
        <h1 className="headline">Add An Item</h1>

        <div className="formGroup">
          <label className="label"
            for="itemName">Item Name &nbsp;</label>
          <input className="input"
            id="itemName"
            onChange={(e) => props.dispatch(changeItemName(e.target.value))}
            value={props.itemNameInputVal}/>
        </div>

        <div className="formGroup">
          <label className="label"
            for="itemAmount">Item Amount &nbsp;</label>
          <input className="input"
            id="itemAmount"
            onChange={(e) => props.dispatch(changeItemAmount(e.target.value))}
            value={props.itemAmountInputVal}/>
        </div>

        <button type="submit">Add Item</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps)(AddItem);
