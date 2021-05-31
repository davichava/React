import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router , Route, Link } from 'react-router-dom';

import tasks from './example/tasks.json';
//component
import Tasks from './component/Tasks'

import TaskForm from './component/TaskFrom';
import Post from './component/Post'


class App extends Component {

  state = {
    tasks: tasks
  }

 addTask = (title, description) => {
   const newTask = {
     title: title,
     description: description,
     id: this.state.tasks.length
   }
   this.setState({
     tasks: [...this.state.tasks, newTask]
   })
 }

 deleteTask = (id) =>{
    const newTasks = this.state.tasks.filter(task => task.id !== id)
    this.setState({tasks:newTasks}) 
  }

 checkDom = (id) => {
  const newTask = this.state.tasks.map(task => {
    if (task.id === id) {
      task.done = !task.done
    }
    return task;
  });
  this.setState({tasks: newTask})
 }

  
  
  render() {
    return <div>
      <Router>  

        <Link to="/">Home</Link>
        <br/>
        <Link to="/post">Post</Link>
        <Route exact path="/" render={() => {
            return <div>
              <TaskForm addTask={this.addTask}/>
              <Tasks tasks={this.state.tasks} 
                deleteTask={this.deleteTask}
                checkDom={this.checkDom}/>
            </div>
          }}>
        </Route>

        <Route path="/post" component={Post} />
      </Router>
      
      
        <Post/>
    </div> 
  }  
}


export default App;

// // function Helloworld(props){ 
// //   return(
// //     <div id="hello">
// //       <h3>{props.subtitle}</h3>
// //       {props.mytext}
// //     </div>
// //   );
// // }

// class Helloworld extends React.Component {
// state = {
//   show: true
// }

// toggleShow = () =>  {
//   this.setState({show: !this.state.show})
// }

//   render() {
//     if (this.state.show){
//       return( 
//         <div id="hello">
//            <h3>{this.props.subtitle}</h3>
//             {this.props.mytext}
//             <button onClick={this.toggleShow}>Toggle Show</button>
//         </div>)
//     } else {
//       return <h1>There Are Not Elments
//         <button onClick={this.toggleShow}>toggleShow</button>
//       </h1>
//     }
    
//   }
// }

// function App () {
//   return (
//     <div>This is my component: <Helloworld mytext="hola mundo" subtitle="lorem ispum"/> <Helloworld mytext="hello david" subtitle="pepito"/> <Helloworld mytext="hola" subtitle="perez"/></div>
//   );
// }

