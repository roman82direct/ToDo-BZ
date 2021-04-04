import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ListsComponent extends Component {
    constructor() {
        super();
        this.state = {
            lists: [],
            currentList: null
        }
    }

    componentDidMount() {
        fetch('/api/lists', {
        })
            .then(response => {
                return response.json();
            })
            .then(lists => {
                this.setState({ lists });
            });
        }

    renderLists() {
        if (this.state.lists.length > 0) {
            return this.state.lists.map(list => {
                return (
                    <li key={list.id}>
                        <a href="#" onClick={
                            () => this.handleClick(list)}>
                            id: {list.id} / {list.name} / pattern_id - {list.pattern_id}
                        </a>
                    </li>
                );
            })
        } else {
            return ('Списков пока нет')
        }
    }

    handleClick(list) {
        //handleClick is used to set the state
        this.setState({currentList:list});
    }

    render() {
        if (this.state.lists.length > 0) {
            return (
                <div>
                    <div>
                        <ul>
                            {this.renderLists()}
                        </ul>
                    </div>
                    <TestList list={this.state.currentList}/>
                </div>
            );
        }
        return(
            <h4>Списков пока нет</h4>
        );
    }
}

export default ListsComponent;

