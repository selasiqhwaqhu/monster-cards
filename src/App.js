import './App.css';
import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';


class App extends React.Component{
    constructor(){
        super();
        this.state ={
            monsters:[],
            searchField:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(Response=>Response.json())
        .then(users=>this.setState({monsters:users}));
    }
    render(){

        const { monsters,searchField } = this.state

        const filteredSearch = monsters.filter(monsters=>monsters.name.toLowerCase().includes(searchField.toLowerCase()))
        
        return (
            <div className="App">
                

                <SearchBox 
                    placeholder='Search Monsters' 
                    handleChange= {e=>this.setState({searchField:e.target.value})}
                />
                
                <CardList listMonsters ={filteredSearch}/>
            </div>
    
            );
    }
   
}
        
            
    

export default App;
