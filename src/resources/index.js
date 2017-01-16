import React from 'react';
import ReactDOM from 'react-dom';
import RowList from 'components/RowList.js';

const spreads = [
  { spread : 2.5, moneyline : {home: -140, away:+120}, ou : 44.5, teams: [{name:"KC",id : 1, home: true},{name:"PIT",id : 2}]},
  { spread : 7.5, moneyline : {home: -310, away:+180}, ou : 55.5, teams: [{name:"ATL",id : 3,home: true},{name:"SEA",id : 54}]},
  { spread : 4, moneyline : {home: -190, away:+120}, ou : 52.5, teams: [{name:"GB",id : 5},{name:"DAL",id : 21,home: true}]},
];

/*function showRows = (spreads) => {
  spreads.forEach((item,index) => {
    React.createElement('div',)
  })
}*/
// Hello World
ReactDOM.render(
  <RowList spread={spreads} />,
  document.getElementById('lineContainer')
);
