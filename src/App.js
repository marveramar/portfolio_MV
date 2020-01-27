import React from 'react';
import './stylesheets/App.scss'
import Header from './components/Header';
import Welcome from './components/Welcome';
import AboutMe from './components/AboutMe';

class App extends React.Component {
  render() {
    return <div>
      <Header />
      <Welcome />
      <AboutMe />
    </div>
  }
}

export default App;
