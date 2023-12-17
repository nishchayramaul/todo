import { useState } from 'react';
import './App.css';
import { Todoinput } from './Components/Todoinput';
import { Todo } from './Components/Todo';


function App() {
const [todo,setTodo] = useState([]);

let addTodo = (inputText) =>{ 
  inputText!=='' ?
  setTodo([...todo,inputText]):
  alert("Input can't be empty")
}
const deleteList = (key) =>{
  let newlist = [...todo]
  newlist.splice(key,1)
  setTodo([...newlist])
}
  return (
    <div className="App">
      
      <div className='layout'>
      <h1>Here's  Your To Do Application</h1>
     <Todoinput addTodo = {addTodo}/>
     {todo.map((listitem,i)=>{
      return(<Todo key ={i} index={i}  item={listitem} delete = {deleteList}/> )
     })}
    </div>
    </div>
  );
}

export default App;
