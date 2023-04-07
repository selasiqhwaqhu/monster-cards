import logo from './logo.svg';
import './App.css';
import React,{ Component } from 'react';


class App extends Component{
    constructor(){
        super();
        this.state ={
            monsters:[
                {
                    id:'eir',
                    name:'Dracula'
                },
                {
                    id:'idn',
                    name:'Frankenstein'
                },
                {
                    id:'eig',
                    name:'Zombie'
                },
            ]
        }
    }

    render(){
        return (
            <div className="App">
                {this.state.monsters.map(monster=><h1 key={monster.id}>{monster.name}</h1>)}
            </div>
    
            );
    }
   
}
        
            
    

export default App;
