import React, {useState, ChangeEvent} from "react";
import Greeting from "./Greeting";
import { UserType } from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name:string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>(""); // need to fix any
    const [error, setError] = useState<string | null>(null); // need to fix any

    const setNameCallback = (e:ChangeEvent<HTMLInputElement>) => { // need to fix any
         setName(e.currentTarget.value); // need to fix
    };
    const setErrorCallback = (e: string | null) =>{
        setError(e)
    }
    const addUser = () => {
      if(name.trim() === ''){
        setError('enter your name')
        }  
        else {addUserCallback(name);
            setName('')
        alert(`hello, ${name}!`)}
    };

    let totalUsers = users.length; // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            setErrorCallback={setErrorCallback}
            
        />
    );
}

export default GreetingContainer;
