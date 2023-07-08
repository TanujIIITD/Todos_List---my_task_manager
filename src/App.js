import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";     // imported Header component
import Footer from "./MyComponents/Footer";     // imported Footer component
import Todos from './MyComponents/Todos';       // imported Todos component 
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
                          
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));  // A common use of JSON is to exchange data to/from a web server. When receiving data from a web server, the data is always a string. Parse the data with JSON.parse(), and the data becomes a JavaScript object.
  }

  function onDelete(todo) {
    // to delete todo on click of delete button
    setTodos(todos.filter(function (e) {
      return e !== todo;
    }));
  }

  function addTodo(title, desc) {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const mytodo = { sno: sno, title: title, desc: desc };
    setTodos([...todos, mytodo]);   // to add new todo in todos list
  }

  const [todos, setTodos] = useState(initTodo);         // list of object of my todos, initially blank

  useEffect(function () {
    localStorage.setItem("todos", JSON.stringify(todos));   
  }, [todos])                // whenever my [todos] change(add or delete), it will update local storage to save my todos list 


  return (    // this language written here is JSX-JAVASCRIPT SYNTAX EXTENSION, (mixture of html & js), [The process of using HTML in react is known as JSX]
    <div>
      <Router>  {/*wrapping our app in router*/}
        <Header title="My Todos List" searchBar={false} />      {/* Header component used here */}

        <Routes>
          <Route exact path="/" element={<> <AddTodo addTodo={addTodo}/> <Todos todos={todos} onDelete={onDelete}/> </>}>
          </Route>
          <Route exact path="/about" element={<About />}>    {/*if this path matches, then call file containing in element, and same for above*/}
          </Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
