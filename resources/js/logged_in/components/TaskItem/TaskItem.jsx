import React, { Component } from "react";
import TaskPredefined from "@logged_in/components/TaskPredefined";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import styles from "./style";

class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        // console.log(!!this.props.listId);
        return (
            <ListItem className="tasks">
                <ListItemText primary={`${this.props.taskId} test Task` } />
                <TaskPredefined />
            </ListItem>
        );
    }
}

export default (withStyles(styles, { withTheme: true })(TaskItem));
