import React from 'react';
import logo from './logo.svg';
import './App.css';
import Plan from './components/Plan';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      to : '',
      from : '',
      goingDate : '',
      returnDate : '',
      action : ''

    }
    this.setAction = this.setAction.bind(this);
  }
  setAction(e){
    this.setState({action : e.target.value})
    
  };
  debugger;
  render(){
  
  return (
    <div className="App">
      <header className="App-header">
      
        
      </header>
      <div className="card">
  <div className="card-header">
    
  <button className="btn btn-link"  value="one-way" onClick = {this.setAction}>ONE WAY
  {/* {this.state.action ? <Plan/> : console.log('hello')} */}
  </button>
  <button className="btn btn-link" value="round-trip" onClick = {this.setAction}>ROUND TRIP</button>
  <button className="btn btn-link"  value="multi-city" onClick = {this.setAction}>MULTI CITY</button>
  <button className="btn btn-link"  >PACKAGE</button>
  </div>
    
</div>
  
    </div>
   
  );
}
}
export default App;
