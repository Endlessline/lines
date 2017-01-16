import React from 'react';
import Row from 'components/Row.js';


export default class RowList extends React.Component {
  render() {
    let rows = this.props.spread.map((spreadData,index) => {
      return <Row key={index} rowData={spreadData} />
    });
    return (<div>{rows}</div>);
  };
}
