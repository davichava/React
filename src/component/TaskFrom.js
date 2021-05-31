import React, { Component } from 'react';

export default class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    onSubmit = e => { 
        this.props.addTask(this.state.title, this.props.description)
        e.preventDefault();
    }
    onChange = e => { 
       this.setState({
           [e.target.name]: e.target.value
       })
    }

    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <input 
                    name="title"
                    onChange={this.onChange} 
                    value={this.state.title} type="text"                    
                    placeholder="write task">                     
                 </input>
                <br/>
                <br/>
                <textarea 
                    name="description"
                    onChange={this.onChange} 
                    value={this.state.description}
                    placeholder="escribe la tarea">                    
                </textarea>
                <input type="submit"/>
            </form>
        )
    }
}