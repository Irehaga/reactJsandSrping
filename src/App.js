import logo from './logo.svg';
import './App.css';
import TodoRowItems from './components/TodoRowItem';
import TodoTable from './components/TodoTable';

function App() {


  const todo = [
    {rowNumber: 1, rowDescription: 'Feed dog', rowAssigned: 'User one'},
    {rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'User two'},
    {rowNumber: 3, rowDescription: 'cook dinner', rowAssigned: 'User one'},
    {rowNumber: 4, rowDescription: 'charge phone', rowAssigned: 'User one'},

  ]







  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your todo's
        </div>
        <div className='card-body'>
         <TodoTable todo = {todo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
