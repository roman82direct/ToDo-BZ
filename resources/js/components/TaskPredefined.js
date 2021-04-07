import React, { Component } from "react";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import StarBorder from '@material-ui/icons/StarBorder';
class TaskPredefined extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {        
        return (
            <ListItemIcon>
                        <StarBorder />
            </ListItemIcon>
        );
    }
}

export default TaskPredefined;
