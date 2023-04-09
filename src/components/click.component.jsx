import { useState } from "react";

const  ChangeText = ({getName}) => {
    const [name,setName] = useState('Selasi');

    return ( 
        <div className="name">
            <p>My name is {name}</p>
      
            <button onClick={()=>{
                setName(getName)
                console.log(getName);
            }}> change Name</button>
        </div>
        
     );
}
 
export default ChangeText;