import React, { Component } from 'react';

import Task from './Task';

import PropsTypes from 'prop-types';

class Tasks extends Component {
    render() {
        return this.props.tasks.map(task => 
        <Task task={task} 
        key={task.id} 
        deleteTask={this.props.deleteTask}
        checkDom={this.props.checkDom}/>);
    }
}
Task.PropsTypes = {
    tasks: PropsTypes.array.isRequired
}
export default Tasks; 