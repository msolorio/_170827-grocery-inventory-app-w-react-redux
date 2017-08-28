import React, { Component } from 'react';
import Inventory from './inventory';
import AddItem from './addItem';
import Nav from './nav';
import {connect} from 'react-redux';
import {toggleView} from '../actions';

export class App extends Component {

  constructor(props) {
    super(props);

    this.toggleView = this.toggleView.bind(this);
  }

  toggleView(viewToShow) {

    this.props.dispatch(toggleView(viewToShow));
  }

  renderView() {
    switch(this.props.view) {
      case 'inventory':
        return <Inventory/>;
      case 'addItem':
        return <AddItem/>;
      default:
        return 'no view to show';
    }
  }

  render() {
    return (
      <div className="App">
        <Nav toggleView={this.toggleView}/>
        {this.renderView()}
      </div>
    );
  }
}

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps)(App);
