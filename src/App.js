import React from 'react';
import './stylesheets/App.scss'
import Header from './components/Header';
import Welcome from './components/Welcome';

class App extends React.Component {
  render() {
    return <div>
      <Header />
      <Welcome />
    </div>
  }
}

export default App;
