import React from 'react';
import {connect} from 'react-redux';

export function Inventory(props) {
  const items = props.items.map((item, index) => {
    return (
      <div className="item" key={index}>
        <p className="itemName">{item.itemName}</p>
        <p className="itemAmount">{item.itemAmount}</p>
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
