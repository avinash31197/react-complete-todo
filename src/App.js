// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import ExpenseItem from './Components/ExpenseItem';
import Expenses from './Components/Expenses/Expenses';
function App() {

 const expenses = [
   {
     id:'e1',
     title:'Toilet Paper',
     amount:94.12,
     date:new Date(23, 4,2022)
   },
   {
     id:'e2',
     title:'New TV',
     amount:100,
     date:new Date(24, 4,2022)
   },
   {
     id:'e3',
     title:'Car Insurance',
     amount:200,
     date:new Date(25, 4,2022)
   },
   {
     id:'e4',
     title:'New Desk(wooden)',
     amount:500,
     date:new Date(26, 4,2022)
   },
 ];

  return (
    <div >
    <h1>let's start learn React</h1>
    <Expenses items ={expenses} />
  
    
   
      
    </div>
  );
}

export default App;
