import React from 'react';

export default class Row extends React.Component {
  render(){
    return <li>{ this.props.rowData.ou }</li>
  }
}
