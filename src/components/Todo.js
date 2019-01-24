import React,{Fragment} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { toggleTodo ,delItem } from '../actions';

// Toggle todo completed state
const mapDispatchToProps = (dispatch) => {
    return {
        onItemClick: (id) => dispatch(toggleTodo(id)),
        ondelete:(id) =>dispatch(delItem(id))
    }
}


const Item = styled.li`
    padding-left: 1em;
    cursor: pointer;
    overflow-wrap: break-word;
    &:before {
        content: ""
    }
`;

// Individual Todo component, depending on state of completion, styles are applied
const Todo = ({id, text, completed,ondelete, onItemClick}) => {
    return (
        <Fragment>
        <Item 
            className={"padding-small margin-small " + (completed ? 'background-primary' : 'shadow shadow-hover')}
            key={id}
            onClick={e => onItemClick(id)}
            style={completed ? {textDecoration: 'line-through'} : {}}
        >
            {text}
        </Item>
        <button  className="btn-small"  disabled={!completed} onClick={e =>ondelete(id)}>Delete
            </button>
        </Fragment>
       )
}

export default connect(null, mapDispatchToProps)(Todo);