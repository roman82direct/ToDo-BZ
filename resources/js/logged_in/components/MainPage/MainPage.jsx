import React, { Component, Fragment } from "react";
import ListsPredefined from "@logged_in/components/ListsPredefined";
import ListsUser from "@logged_in/components/ListsUser";
import Tasks from "@logged_in/components/Tasks";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core";
import NavBar from "@logged_in/components/navigation/NavBar";
import styles from "./style";


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
        const { classes } = this.props;


        return (
            <Fragment>

                <NavBar
                    userId={this.state.userId}
                // selectedTab={selectedTab}
                // messages={messages}
                // openAddBalanceDialog={openAddBalanceDialog}
                />

                <main className={classNames(classes.main)}>
                    <Tasks userId={this.state.userId} listId={this.props.listId} />
                </main>
            </Fragment>
        );
    }
}

export default withStyles(styles, { withTheme: true })(MainPage);


