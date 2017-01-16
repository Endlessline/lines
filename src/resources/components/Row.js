import React from 'react';

export default class Row extends React.Component {
  render(){
    return <li><span>{ this.props.rowData.teams[0].name }</span>{ this.props.rowData.ou }</li>
  }
}
