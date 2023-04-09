import { useState } from "react";

const  ChangeText = ({getName,getAge}) => {
    const [name, setName] = useState('Selasi');
    const [age, setAge]= useState('20');
    return ( 
        <div className="name">
            <p>My name is {name} and I am {age}</p>
      
            <button onClick={()=>{
                setName(getName);
                setAge(getAge)
                console.log(getAge);
            }}> change Name</button>
        </div>
        
     );
}
 
export default ChangeText;