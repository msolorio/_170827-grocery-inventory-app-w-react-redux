import React from 'react';
import {connect} from 'react-redux';
import {toggleView} from '../actions';

export function Nav(props) {
  return (
    <div className="Nav">
      <button className="button"
        onClick={() => props.dispatch(toggleView('addItem'))}>
        Add Item
      </button>
      <button className="button"
        onClick={() => props.dispatch(toggleView('inventory'))}>
        View Inventory
      </button>
    </div>
  )
}

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps)(Nav);
