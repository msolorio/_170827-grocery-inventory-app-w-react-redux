import React from 'react';
import {connect} from 'react-redux';
import {incrementItem, decrementItem} from '../actions';

export function Inventory(props) {
  const items = props.items.map((item, index) => {
    return (
      <div className="item" key={index}>
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
