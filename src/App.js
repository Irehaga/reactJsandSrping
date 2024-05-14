import logo from './logo.svg';
import './App.css';
import TodoTable from './components/TodoTable';
import React, {useState} from 'react';
import NewTodoForm from './components/NewTodoForm';

function App() {


  const [showAddTodoForm, setShowTodoForm] = useState(false);


  const [todo, setTodo] = useState([
    {rowNumber: 1, rowDescription: 'Feed dog', rowAssigned: 'User one'},
    {rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'User two'},
    {rowNumber: 3, rowDescription: 'cook dinner', rowAssigned: 'User one'},
    {rowNumber: 4, rowDescription: 'charge phone', rowAssigned: 'User one'},
    ]
  )
  const addTodo = (description, assigned) => {

    let rowNumber = 0;
    if (todo.length > 0) {
      rowNumber = todo[todo.length - 1].rowNumber + 1;
    }else{
        rowNumber = 1;
       
    }
      const newTodo = {
        rowNumber: rowNumber,
        rowDescription: description, 
        rowAssigned: assigned
      };

      setTodo(todo => [...todo, newTodo])
      
    }


    const deleteTodo = (deleteTodoRowNumber) => {

      let filtered = todo.filter(function (value) {

        return value.rowNumber !== deleteTodoRowNumber;
      });

      setTodo(filtered);
    }

  

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your todo's
        </div>
        <div className='card-body'>
         <TodoTable todo = {todo}    deleteTodo={deleteTodo}/>
         <button onClick={() => setShowTodoForm(!showAddTodoForm)} className='btn btn-primary'> 
             {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
          </button>
          {showAddTodoForm &&
           <NewTodoForm  addTodo={addTodo}/>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
