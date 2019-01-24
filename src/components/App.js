import React, { Component } from 'react';
import styled from 'styled-components';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import TodoLength from './TodoLength';
 import Filter from './Filter';
const Container = styled.div`
  background-color: #f1f1f1;
  margin: 0;
  min-height: 100vh;
`;



// Main app structure
class App extends Component {
  render() {
    return (
      <Container>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark static-top">
          <h3 className="navbar-brand">TodoList</h3>
          <TodoLength/>
          </nav>
          <div className="container">
          <AddTodo />
          <TodoList />
          </div>
      </Container>      
    );
  }
}

export default App;
