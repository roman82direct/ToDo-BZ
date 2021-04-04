import React, { Component } from "react";

class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        console.log(!!this.props.listId);
        return (
            <div className="tasks">
                <p>tasks</p>
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
