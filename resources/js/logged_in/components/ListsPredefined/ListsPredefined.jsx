import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
    AppBar,
    Toolbar,
    Typography,
    Avatar,
    Drawer,
    List,
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemText,
    Hidden,
    Tooltip,
    Box,
    isWidthUp,
    withWidth,
} from "@material-ui/core";
import ListAltIcon from '@material-ui/icons/ListAlt';
import { Link } from "react-router-dom";
import { loadLists } from '@actions/lists';
import { withStyles } from '@material-ui/core/styles';
import styles from "./style";

class ListsPredefined extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // token: document.head.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            // requestFailed: null,
            // responseStatus: null,
            // isFetch: true,
            lists: [],
            currentList: ''
        }
    }

    setCurrentList(index) {
        this.setState({
            currentList: index,
        });
    }

    getCurrentList(index) {
        return this.state.currentList === index;
    }

    handleNavigate(listId) {
        this.setCurrentList(listId);
    }

    componentDidMount() {
        this.props.loadLists('/api/lists?filter=1');
        // fetch('/api/lists/predefined/1', {
        //     headers: {
        //         "Content-Type": "application/json",
        //         "X-CSRF-TOKEN'": this.state.token,
        //         credentials: "include",
        //     }
        // })
        //     .then((response) =>{
        //         if (response.status === 200){
        //            return response.json()
        //         } else if (response.status === 404){
        //             this.setState({responseStatus: response.status});
        //             throw new Error('Ничего не найдено.')
        //         }
        //             this.setState({requestFailed: true});
        //             this.setState({responseStatus: response.status});
        //             throw new Error('Ошибка сервера. Статус ответа: ' + response.status )
        //     })
        //     .then((data) => {
        //         this.setState({lists: data});
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //         this.setState({isFetch: false});
        //     })
    }

    render() {
        const { classes } = this.props;
        // const requestFailed = this.state.requestFailed;
        // const isFetch = this.state.isFetch;
        // const responseStatus = this.state.responseStatus;
        const lists = (this.props.predefinedLists) ? this.props.predefinedLists.map((elem) => (
            <Link
                to={`/list/${elem.id}`}
                key={elem.id}
                className={classes.menuLink}
            >
                <Tooltip
                    title={elem.name}
                    placement="right"
                    key={elem.name}
                >
                    <ListItem
                        button
                        selected={this.getCurrentList(elem.id)}
                        onClick={() => this.handleNavigate(elem.id)}
                        aria-label={elem.name}
                        className={classes.permanentDrawerListItem}
                    >
                        <ListItemIcon className={classes.justifyCenter}>
                            <ListAltIcon />
                        </ListItemIcon>
                        <ListItemText primary={elem.name} />
                    </ListItem>
                </Tooltip>
            </Link>
        )
        ) : ['Авторизуйтесь, чтобы начать...'];
        return (
            <div className="lists-predefined">
                <List>
                    {lists}
                    {/*{ isFetch ? lists :*/}
                    {/*    !requestFailed ? 'Предопределенных списков пока нет...' :*/}
                    {/*        'Что-то пошло не так. Код ответа сервера: ' + responseStatus}*/}
                </List>
            </div>
        );
    }
}

// export default ListsPredefined;
const mapState = ({ listsReducer }) => ({
    predefinedLists: listsReducer.predefinedLists,
});

const mapAction = dispatch => bindActionCreators({ loadLists }, dispatch);

export default connect(mapState, mapAction)(withStyles(styles, { withTheme: true })(ListsPredefined));


