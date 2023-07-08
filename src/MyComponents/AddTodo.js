import React, {useState} from 'react'

const AddTodo = (props) => {
    const [title, setTitle] = useState('');   // initially, title and desc is empty
    const [desc, setDesc] = useState('');

    function submit(e){
        e.preventDefault();            // stops page from reloading
        if(!title || !desc){
            alert("Title or Description can not be empty");
        }
        else{
            props.addTodo(title, desc);
        }
        setTitle("");
        setDesc("");
    }

    return (
        <div className='container my-3'>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={function(e) {setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
                                       {/* since, title is initially empty, so we need to use onchange attribute to set value */}
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={function(e) {setDesc(e.target.value)}} className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
