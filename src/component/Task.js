import React, { Component } from 'react';
import './Task.css'
import PropsTypes from 'prop-types';

class Task extends Component {


   
    StyleCompleted() {
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'black' : 'blue',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
    
        }
    }
    
    render() {
        const {task} = this.props;

        
        return <div style={this.StyleCompleted()}>
                    {task.title} - 
                    {task.description} - 
                    {task.done} - 
                    {task.id}
                    <input type="checkbox" onChange={this.props.checkDom.bind(this,task.id)}/>
                    <button  style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)}>
                        x
                    </button>
                </div> 
                //tambien se puede llamar el style the button con el className:red
    }
}

Task.PropsTypes = {
    task: PropsTypes.object.isRequired
}
const btnDelete = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor:'pointer'

}
export default Task;