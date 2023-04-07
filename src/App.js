import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component{
    constructor(){
        super();
        this.state ={
            monsters:[]
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(Response=>Response.json())
        .then(users=>this.setState({monsters:users})).then(users=>console.log(users));
    }
    render(){
        return (
            <div className="App">
                {this.state.monsters.map(monster=>(<h1 key={monster.id}>{monster.name}</h1>))}
            </div>
    
            );
    }
   
}
        
            
    

export default App;
