import React, { Component } from 'react';
import './App.css';
import prettyImg from './images/prettyImg.jpg';
import Header from './Header.js';
import Body from './Body.js';
import DestinationList from './Footer.js';
import FooterTwo from './FooterToo.js';

class App extends Component {
  state = {
    destinations:[
       {
           id: 1,
           name:"place1", 
           link:"#"
       },
       {
           id: 2,
           name:"place2", 
           link:"#"
       },
       {
           id: 3,
           name:"place3", 
           link:"#"
       },
       {
           id: 4,
           name:"place4", 
           link:"#"
       },
   ]
}
  render() {
    return (
      <div className="App">
        <Header title="Wide World Travel, Inc"/>
        <Body img={prettyImg}/>
        <h5>Footer ONE</h5>
          <DestinationList destinations={this.state.destinations} />
        <hr />
        <h5>Footer TWO</h5>
          <FooterTwo name="FooterTwo 1" link="#" />
          <FooterTwo name="FooterTwo 2" link="#" />
          <FooterTwo name="FooterTwo 3" link="#" />
          <FooterTwo name="FooterTwo 4" link="#" />
      </div>
    );
  }
}

export default App;
