import React, { Component } from "react";
import ListsComponent from "./ListsComponent";

class MainPage extends Component {
     constructor(props) {
         super(props);
         this.state = {
             userId: user.user_id,
             userName: user.user_name,
             userEmail: user.user_email,
         }
     }

    render() {
        const mainStyles = {
            height: '80vh',
            backgroundColor: '#f1efef',
            padding: '1rem',
        }
        return (

            <div>
                <div style={mainStyles}>
                    <h3>Hello, {this.state.userName}</h3>
                    <ListsComponent />
                </div>
            </div>
        );
    }
}

export default MainPage;
