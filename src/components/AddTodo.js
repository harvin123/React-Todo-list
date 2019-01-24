import React from 'react';
import { connect } from 'react-redux';

// UUID is a library for generating a unique id
import uuidv1 from "uuid";

import { addTodo } from '../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitValues: (todo) =>  {console.log(todo); dispatch(addTodo(todo))}
    }
}

// Form component for adding new todo, dispatches addTodo with a todo object
const AddTodo = ({onSubmitValues}) => {
    let input;

    return (
        <div className="col-lg-4 text-left">
            <form 
                onSubmit={e => { 
                        e.preventDefault();
                        console.log(input.placeholder);
                        const id = uuidv1();
                        if(input.value.trim()) {
                            onSubmitValues({
                                id,
                                text: input.value,
                                completed: false
                            });
                            input.value = '';
                        } 
                    }}
                className="row"
            >
                <div className="col padding-right-small">
                    <input type="text" placeholder="New Todo" ref={value => { input = value }} />
                </div>
                <div className="col padding-left-small">
                    <input type="submit" value="Add to list" className="paper-btn btn-small" />
                </div>
            </form>
        </div>
    )
}

//console.log(AddTodo);
export default connect(null, mapDispatchToProps)(AddTodo);