import React, { Component } from 'react';
import './App.css';
import Picks from './components/players/picks'
import Ticks from './components/players1/ticks'
class App extends Component {
  render(){
  return (
    <div>
    <div class="mydiv">
      <h1>Fantasy11 Recommender</h1>
    </div>
    <div class="grid-container">
    <div class="grid-child purple">
      
      <h2>Team1</h2>
      <p><Picks />

          
      </p>
    
  
  </div>
  
  
    <div class="grid-child green">
     
      <h2>Team2</h2>
      <p><Ticks /></p>
    </div>
  </div>
  <div class="mydiv1">

  <h3>Description List</h3>

<dl>
  <dt>Must Have Players</dt>
  <dd>- <p>these players have performed throughout the season and almost all fantasy players will be having them in their teams. If you are entering a smaller contest these players are very important to your sucess.</p></dd>
  <dt>Safe Bets</dt>
  <dd>- <p>these players have performed in patches, these players will also be present in many fantasy teams. To stand out from the rest of the fantasy players you need to make one of them captain in your team.</p></dd>
  <dt>High Risk High Reward</dt>
  <dd>-<p>these players have not performed well but are proven match winners and can perform well at any moment. These players performing well can stand you in good stead to win the bigger contest competing with many fantasy players </p></dd>




</dl>
<div class="mydiv2">
<p>This classification is based on the average of fantasy points the players have accumalated throughout the season, the idea is to create a eleven which comprises of all these categories and choosing captain is based on which kind of contest you are taking part in.</p>
  </div>


  
</div>

  









  </div>
  );
  }
}

export default App;
