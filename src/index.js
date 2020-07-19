import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
let a = [10,20,30];
//let ele = <div id='1' title='1'>{a}</div>
// ReactDOM.render(a.map(x=><li>{x}</li>),
//     document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

function ShowArray(prop) {
    let i = [];
    prop.arr.forEach(x=>(
        i.push(<li>{x}</li>)
    ))
    return i;
}

ReactDOM.render(<div><ShowArray arr={a} /></div>,
    document.getElementById('root'))

//
//reverse String