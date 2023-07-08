import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
    let myStyle={            // way to add style(css) in react (by making object), can also make different file for css and then import it here
        margin: "50px auto",
        minHeight: "45.3vh"
    }

  return (
    <div className="container" style={myStyle}>       
        <h3 className='my-3'>Todos List</h3>
        {props.todos.length===0? "No Todos to display":      
        props.todos.map(function(todo){     
            return(      
                <TodoItem todo={todo} onDelete={props.onDelete} key={todo.sno}/>     
            )
        })
        }        
    </div>
  )
}

export default Todos
