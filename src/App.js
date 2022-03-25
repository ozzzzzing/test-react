import React, { Component } from 'react';
import Todo from './Todo'; //확장자는 안 적고 이름만

export default class App extends Component {
  render() {
    return (
    <Todo 
    name="sunrise" 
    age={23} user="sunrise" 
    done={true} 
    description="cleaning my room on weekends"></Todo>
    )
    //<Person></Person> or <Person/>이라고 적으면 됨. 
  }
}

// export default App; 여기에 써도 되고 위로 4번 줄처럼 올려서 써도 됨.