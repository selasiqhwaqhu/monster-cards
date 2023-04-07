import logo from './logo.svg';
import './App.css';
import React,{ Component } from 'react';


class App extends Component{
    constructor(){
        super();
        this.state ={
            string:"Hello ",
            end:"World"
        }
    }

    render(){
        return (
            <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                God is the Greatest. Do you know that?
                {this.state.string} {this.state.end}
                </p>
                <button onClick={()=>this.setState({string:'Hi ', end:'Universe'})}>Change Text</button>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
            </header>
            </div>
    
            );
    }
   
}
        
            
    

export default App;
