import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Index';
import reportWebVitals from './reportWebVitals';

class App extends React.Component{
  render(){
    return(
      <div>
        <h1> Please enter something</h1>
        <MyInput/>
      </div>
    );
  }
}

const root = document.getElementById("root");
ReactDOM.render(<App/>,root);
export default App;