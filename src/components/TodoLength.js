import React  from 'react';
import {connect} from 'react-redux';

const mapStatetoProps=(state)=>{
    return {
   todos: state.todos,
   filter :state.filter
    }
}

function TodoLength(props)
{
    return (
        <div>
        <h3 className="navbar-brand ">
        All: {props.todos.length}
            </h3>
  
        <h3 className="navbar-brand ">
        Completed: {props.todos.filter(todo => todo.completed).length}
            </h3>
        <h3 className="navbar-brand ">
        Active: {props.todos.filter(todo => !todo.completed).length}
            </h3>
            </div>
    )
}

export default connect(mapStatetoProps)(TodoLength);