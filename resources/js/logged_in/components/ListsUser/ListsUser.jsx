import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ListAltIcon from '@material-ui/icons/ListAlt';
import CreateList from "@logged_in/components/CreateList";
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
    withStyles,
    isWidthUp,
    withWidth,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { addList } from '@actions/lists';
import { loadLists } from '@actions/lists';
import { loadTasks } from '@actions/tasks';
import styles from "./style";



class ListsUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentList: '',
        }
    }

    addList = (name) => {
        // Request (name, pattern_id, predefined, user_id)
        this.props.addList(name, 1, 0, this.props.userId);
    }

    getCurrentList(index) {
        return this.state.currentList === index;
    }

    setCurrentList(index) {
        this.setState({
            currentList: index,
        });
    }

    async handleNavigate(listId) {
        this.setCurrentList(listId);
        await this.props.loadTasks(listId);
    }

    componentDidMount() {
        this.props.loadLists('/api/lists/predefined/0');
    }

    render() {
        const { classes } = this.props;
        // console.log('this.props.lists');
        const lists = (this.props.lists) ? this.props.lists.map((elem) => (
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
                        <ListItemText primary={elem.name + ' / id = ' + elem.id} />
                    </ListItem>
                </Tooltip>

            </Link>



        )
        ) : ['Списков задач пока нет...'];

        return (
            <div className="lists-user">
                <List>
                    {lists}
                    <ListItem>
                        <CreateList user={this.props.userId} addList={this.addList} />
                    </ListItem>
                </List>
            </div>
        );
    }
}

const mapState = ({ listsReducer }) => ({
    lists: listsReducer.lists,
});

const mapAction = dispatch => bindActionCreators({ addList, loadLists, loadTasks }, dispatch);

export default connect(mapState, mapAction)(withStyles(styles, { withTheme: true })(ListsUser));


{/* <Link to={`/list/${elem.id}`}
key={ elem.id }
className="lists-user__link"
>
<ListItem
  button
  selected={ this.getCurrentList(elem.id) }
  onClick={ () => this.handleNavigate(elem.id) } >
  <ListItemIcon>
      <ListAltIcon />
  </ListItemIcon>
  <ListItemText primary={ elem.name } />
</ListItem>
</Link> */}