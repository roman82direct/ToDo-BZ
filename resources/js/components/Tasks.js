import React, { Component } from "react";
import TaskItem from "./TaskItem";
import List from '@material-ui/core/List';

class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {       
        return (
            <div className="tasks">
                <p>tasks</p>
                <List component="div">                 
                        <TaskItem user={ this.props.userId } taskId='111'  />                  
                </List>
                
                { !!this.props.listId && (
                    <div>
                        <p>userId - { this.props.userId }</p>
                        <p>listId - { this.props.listId }</p>
                    </div>
                )}
           </div>
        );
    }
}

export default Tasks;