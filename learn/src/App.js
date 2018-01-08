import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class TodoApp extends Component{
  constructor(props){
    super(props);
    this.state={
      todoArray:[],
      task:'',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitData = this.submitData.bind(this);
  }


handleChange(event){
// event.target gives you the native DOMNode
this.setState({
  task: event.target.value
});
}
submitData(event){
  //this line prevent default behaviour
  event.preventDefault();
  if(!this.state.task.length){
    return;
  }
  const newItem = {
    task: this.state.task,
    id: Date.now()
  };
  this.setState(prevState=>({
    todoArray: prevState.todoArray.concat(newItem),
    task:''
  }));
}
  render(){
    return(
      <div>
        <h4>TODO list</h4>
        <TodoList tasks={this.state.todoArray}/>
        <form onSubmit={this.submitData}>
          <input
            onChange={this.handleChange}
            value={this.state.task}
          />
          <button>Add task to TodoList</button>
        </form>
      </div>
    );
  }
}
class TodoList extends Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div>
        <ul>
          {this.props.tasks.map(item=>(
            <li key={item.id}>{item.task}</li>
          ))}
        </ul>
      </div>
    );
  }
}




class App extends Component {
  constructor(props){
    super(props);
    this.state={
      seconds: 0,
    };
    this.tick = this.tick.bind(this);
  }

  tick(){
    this.setState((prevState)=>({
      seconds: prevState.seconds+1
    })
  );
  }
  componentDidMount(){
    this.interval= setInterval(()=>this.tick(),1000);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          seconds: {this.state.seconds}
        </div>
        <TodoApp/>
      </div>
    );
  }
}

export default App;
