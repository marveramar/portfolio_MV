import React from 'react';
import './stylesheets/App.scss'
import Header from './components/Header';
import Welcome from './components/Welcome';
import AboutMe from './components/AboutMe';
import Works from './components/Works';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return <div>
      <Header />
      <Welcome />
      <AboutMe />
      <Works />
      <Footer />
    </div>
  }
}

export default App;
