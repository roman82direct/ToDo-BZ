import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Button,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    FormControl,
    Select,
    OutlinedInput,
    MenuItem,
    Checkbox,
    Box,

} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HelpIcon from "@shared/components/HelpIcon";
import Bordered from "@shared/components/Bordered";
import ButtonCircularProgress from "@shared/components/ButtonCircularProgress";
import TaskItem from "@logged_in/components/TaskItem";
import { loadTasks, addTask } from '@actions/tasks';
import { loadTerms } from '@actions/terms';
import { loadRepeats } from '@actions/repeats';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import styles from "./style";

class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    async componentDidMount() {
        await this.props.loadTasks(this.props.listId);
        await this.props.loadTerms();
        await this.props.loadRepeats();
    };

    render() {
        const { classes } = this.props;
        const { tasks, terms, repeats } = this.props;
        const Tasks = (tasks) ? tasks.map((task,i) => (
            <TaskItem  key={i} task={task} terms={terms} repeats={repeats} taskId={ task.id } taskName={ task.name } />
        )) : ['Задач пока нет...'];
        return (
            <Fragment>
                <Box mt={4}>
                    <Typography variant="subtitle1" gutterBottom>
                        listId  - {this.props.listId}
                    </Typography>
                </Box>
                { Tasks }
            </Fragment>
        );
    }
}



const mapState = ({ tasksReducer, termsReducer, repeatsReducer }) => ({
    tasks: tasksReducer.tasks,
    terms: termsReducer.terms,
    repeats: repeatsReducer.repeats,
});

const mapAction = dispatch => bindActionCreators({ addTask, loadTasks, loadTerms, loadRepeats }, dispatch);

export default connect(mapState, mapAction)(withStyles(styles, { withTheme: true })(Tasks));
