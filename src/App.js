import { useState } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import SearchBox  from './components/search-box/search-box.component';
import { useEffect } from 'react';



function App() {

    const [monsters,setMonsters] = useState([])
    const [searchField, setSearchField]  = useState('')      
        


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data)=>setMonsters(data))
            console.log('monsters');
    
    },[])
   
    

        const filteredSearch = monsters.filter(monsters=>monsters.name.toLowerCase().includes(searchField.toLowerCase()))
        
        return (
            <div className="App">
                
            
                <SearchBox 
                    placeholder='Search Monsters' 
                    handleChange= {e=>setSearchField(e.target.value)}
                />
                
                 <CardList listMonsters ={filteredSearch}/>
            </div>
    
            );
    
   
}
        
            
    

export default App;
