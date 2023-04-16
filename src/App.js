import {  useState } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import SearchBox  from './components/search-box/search-box.component';
import useFetch from './customHooks/useFetch';




function App() {
    
   const {data:Monsters,loadPending, errorMsg} = useFetch('https://jsonplaceholder.typicode.com/users')
    
   const [searchField, setSearchField]  = useState('') 

        const filteredSearch = Monsters.filter(monsters=>monsters.name.toLowerCase().includes(searchField.toLowerCase()))

        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox 
                    placeholder='Search Monsters' 
                    handleChange= {e=>setSearchField(e.target.value)}
                />
                {loadPending && <p>loading ...</p>}
                {errorMsg!==null && <p>{errorMsg} ...</p>}
                {Monsters!==null && <CardList listMonsters ={filteredSearch}/>}
            </div>
            );
    
   
}
        
            
    

export default App;
