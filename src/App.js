import React from 'react';
import logo from './logo.svg';
import './App.css';
import Plan from './components/Plan';
import { Button, Container, Card, Image,ButtonToolbar, Row } from 'react-bootstrap';

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
    <Container className = "App" fluid >
      
      <Card className="card" >
      <Card.Body>
      <ButtonToolbar className="optionsButton"  data-toggle="modal" data-target="#bookModal" onClick = {this.setAction}>
  
  
  <Button className="optionsButton" value="ONE WAY"  >ONE WAY
  
  </Button>
  <Button className="optionsButton" value="ROUND TRIP" onClick = {this.setAction}>ROUND TRIP</Button>
  <Button  className="optionsButton" value="MULTI CITY" onClick = {this.setAction}>MULTI CITY</Button>
  <Button   >PACKAGE</Button>
  </ButtonToolbar>
  </Card.Body>
  </Card>


<div>
{this.state.action? <Plan action={this.state.action}/> : ''} 
{console.log(this.state.action)}
</div>
  
    </Container>
   
  );
}
}
export default App;
