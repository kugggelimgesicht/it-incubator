import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: (name:string) => void // need to fix any
    error:  string | null// need to fix any
    totalUsers: number // need to fix any
    setErrorCallback:(e:string | null) => void
    
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, setErrorCallback, error, totalUsers} // деструктуризация пропсов
) => { 
    let inputClass;
     inputClass = error? s.error : s.userInput // need to fix with (?:)
    const onKeyPressCallback = (e:KeyboardEvent<HTMLInputElement>) => {
        setErrorCallback(null)
        if (e.charCode === 13) {
            addUser(name)
    
          }
         
       
    }
    const addUserCallback = () => {
        addUser(name)
    }
    return (
        <div>
            <input value={name} onChange={(e)=>{setNameCallback(e)}} onKeyPress={onKeyPressCallback} className={inputClass}/>
            <button className={s.addBtn} onClick={addUserCallback}>ADD</button>
            <span>{totalUsers}</span> 
            {error && <div className={s.infoDiv}>{error}</div>}
        </div>
    );
}

export default Greeting;
