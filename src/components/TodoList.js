import React,{Fragment} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Todo from './Todo';
import Filter from './Filter';
import { FILTER_ALL, FILTER_COMPLETED, FILTER_ACTIVE } from '../constants/filters';

// Filter todos based on selected filter
const filteredTodos = (todos, filter) => {
    switch(filter) {
        case FILTER_ALL:
            return todos;
        case FILTER_COMPLETED:
            return todos.filter(todo => todo.completed);
        case FILTER_ACTIVE:
            return todos.filter(todo => !todo.completed);
        default:
            return todos;
    }
}

// Get todos from state
const mapStateToProps = (state) => {
    return {
        todos1: filteredTodos(state.todos, state.filter),
        filter1: state.filter
    }
}



const List = styled.ul`
    padding-left: 0
`;

// Component to display todolist, also wraps Filter component
const TodoList = ({todos1, filter1}) => {
    //sconsole.log(todos);
    console.log(filter1);
    // Display message if no todos
    let message;
    if(todos1.length === 0) {
        let text;
        switch(filter1) {
            case FILTER_COMPLETED: text = 'Nothing completed yet.'; break;
            case FILTER_ACTIVE: text = 'Nothing to be completed.'; break;
            default: text = 'No Tasks'; break;
        }
        message = (<div className="row flex-center margin-top-large">{text}</div>);
    }       

    return (
        <Fragment>
        <div className="col-lg-5 text-center">
            {message}
            <div align="left">
            <List className="child-borders">
                {todos1.map(todo =>
                    <Todo
                        key={todo.id}
                        {...todo} 
                    />
                )}
            </List>
            </div>
            <Filter todosLength={todos1.length} filter={filter1}/>
            </div> 
             </Fragment>
    );
}

export default connect(mapStateToProps)(TodoList);