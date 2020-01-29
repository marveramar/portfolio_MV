import React from 'react';
import './stylesheets/App.scss'
import Header from './components/Header';
import Welcome from './components/Welcome';
import AboutMe from './components/AboutMe';
import Works from './components/Works';

class App extends React.Component {
  render() {
    return <div>
      <Header />
      <Welcome />
      <AboutMe />
      <Works />
    </div>
  }
}

export default App;
