import React, { Component } from 'react';
import './players.css';


class Players extends Component {
  constructor(){
    super();
    this.state ={
      players:[]
    }
  }  

  componentDidMount() {
    fetch('/aliens',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    })
       .then(res => res.json())
       .then(players=> this.setState({players},() => console.log('Players fetched ',players)));
  }

 
  
  
  
  render(){
    return (
    <div>
        
         <ul>
           {
             this.state.players.map(player=>
             <li key={player.id}>{player.name}         {player.team}</li>)
           }
         </ul>
         
    </div>
  );
}
}
export default Players;
