import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import  NavBarComponent  from "./Components/NavBarComponent";
import  HomePageComponent  from "./Components/HomePageComponent";
export class App extends Component{
  styles = {
    fontStyle : "bold",
    color: "red"
  }

  render(){
    return (
      <div className = "App">
        <NavBarComponent/>
        <HomePageComponent/>
      </div>
    )
  }
}

export default App;
