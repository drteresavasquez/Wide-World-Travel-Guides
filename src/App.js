import React, { Component } from 'react';
import './App.css';
import prettyImg from './images/prettyImg.jpg';
import Header from './Header.js';
import Body from './Body.js';
import DestinationList from './Footer.js';
import FooterTwo from './FooterToo.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Wide World Travel, Inc"/>
        <Body img={prettyImg}/>
        <h5>Footer ONE</h5>
          <DestinationList />
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
