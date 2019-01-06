import React, {Component} from 'react';
import Content from './components/Content';
import Footer from "./components/Footer";
import Header from "./components/Header";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <Content/> */}
      <Header/>
      </div>
    );
  }
}

export default App;
