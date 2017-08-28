import React from 'react';
import {connect} from 'react-redux';
import {
  incrementItem,
  decrementItem,
  removeItem
} from '../actions';

export function Inventory(props) {
  const items = props.items.map((item, index) => {
    return (
      <div className="item" key={index}>
        <span className="cross"
          onClick={() => props.dispatch(removeItem(index))}>&#9587;</span>
        <p className="itemName">{item.itemName}</p>
        <div className="amountChanger">
          <span className="incrementor"
            onClick={() => props.dispatch(decrementItem(index))}>
            {`<`}
          </span>
          &nbsp;&nbsp;

          <span className="itemAmount">{item.itemAmount}</span>
          &nbsp;&nbsp;

          <span className="decrementor"
            onClick={() => props.dispatch(incrementItem(index))}>
            {`>`}
          </span>

        </div>
      </div>
    );
  });

  return (
    <div className="Inventory">
      <ul className="items">
        {items}
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps)(Inventory);
