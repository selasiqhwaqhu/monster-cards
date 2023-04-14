import {  useState } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import SearchBox  from './components/search-box/search-box.component';
import { useEffect } from 'react';



function App() {

    const [monsters,setMonsters] = useState([])
    const [searchField, setSearchField]  = useState('') 
    const [loadPending,setLoadPending]= useState(null)
    const [errorMsg,setErrorMsg] = useState(null)
        


    useEffect(()=>{
        setLoadPending(true)
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/user')
                .then((res) => {
                    if (!res.ok){
                        throw Error('Could not fetch data for that resource');
                    }
                    
                    return res.json()
                })
                .then((data)=>{
                    setMonsters(data)
                    setLoadPending(false)
                    setErrorMsg(null) 
                })
                .catch((err)=>{
                    setErrorMsg(err.message) 
                    setLoadPending(false) 
                    setMonsters([])
                })
                
                    
        }, 1000);
            
            
    
    },[errorMsg])
   
    

        const filteredSearch = monsters.filter(monsters=>monsters.name.toLowerCase().includes(searchField.toLowerCase()))
        
        return (
            <div className="App">
                
            
                <SearchBox 
                    placeholder='Search Monsters' 
                    handleChange= {e=>setSearchField(e.target.value)}
                />
                {loadPending && <p>loading ...</p>}
                {errorMsg!==null && <p>{errorMsg} ...</p>}
                 {monsters!==null && <CardList listMonsters ={filteredSearch}/>}
            </div>
    
            );
    
   
}
        
            
    

export default App;
