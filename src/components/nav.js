import React from 'react';

function Nav(props) {
  return (
    <div className="Nav">
      <button className="button"
        onClick={() => props.toggleView('addItem')}>Add Item</button>
      <button className="button"
        onClick={() => props.toggleView('inventory')}>View Inventory</button>
    </div>
  )
}

export default Nav;
