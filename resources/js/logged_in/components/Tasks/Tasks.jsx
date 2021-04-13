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
    };
    // {/* <Link to={`/task/${elem.id}`}
    //                   key={ elem.id }
    //                   className="tasks-user__link"
    //             >
    //                 <h5>List_id: {elem.list_id}</h5>
    //                 <p>Task_id: {elem.id}</p>
    //                 <h6>Name: {elem.name}</h6>
    //                 <i>Description: {elem.description}</i>
    //                 <h6>favorites: {elem.favorites}</h6>
    //                 {/*<p>term_id: {elem.term_id}</p>*/}
    //                 {/*<p>repeat_id: {elem.repeat_id}</p>*/}
    //                 <i>Cron: {elem.cronTime}</i>
    //                 <hr/>
    //                 {/*<TaskItem  key={ elem.id } taskId={ elem.id } taskName={ elem.name } />*/}
    //             </Link>
    //             ) */}

    render() {
        const { classes } = this.props;
        const { tasks } = this.props;
        const Tasks = (tasks) ? tasks.map((elem) => (
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>{elem.name}</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.dBlock}>
                    <List disablePadding>
                        <Bordered disableVerticalPadding disableBorderRadius>

                            <ListItem
                                key={elem.id}
                                divider={elem.id !== tasks.length - 1}
                                className="listItemLeftPadding"
                            >
                                <ListItemText>
                                    <Typography variant="body2">
                                        {elem.description}
                                        {elem.description && <HelpIcon title={elem.description} />}
                                    </Typography>
                                </ListItemText>
                                <ListItemSecondaryAction>
                                    <FormControl variant="outlined">
                                        <Checkbox
                                            value="option4"
                                            color="primary"


                                        />
                                    </FormControl>
                                </ListItemSecondaryAction>
                            </ListItem>

                        </Bordered>
                    </List>
                </AccordionDetails>
                <AccordionDetails className={classes.AccordionDetails}>
                    <Box mr={1}>
                        <Button


                        >
                            Default {false && <ButtonCircularProgress />}
                        </Button>
                    </Box>
                    <Button
                        variant="contained"
                        color="secondary"

                    >
                        Save {false && <ButtonCircularProgress />}
                    </Button>
                </AccordionDetails>
            </Accordion>
        )) : ['Задач пока нет...'];
        return (
            <Fragment>
                <Box mt={4}>
                    <Typography variant="subtitle1" gutterBottom>
                        listId  - {this.props.listId}
                    </Typography>
                </Box>
                { Tasks}
                <List component="div">
                    <TaskItem user={this.props.userId} taskId='111' />
                </List>

                <div>
                    <p>userId - {this.props.userId}</p>
                    <p>listId - {this.props.listId}</p>
                </div>

            </Fragment>
        );
    }
}

// export default Tasks;

const mapState = ({ tasksReducer }) => ({
    tasks: tasksReducer.tasks,
});

const mapAction = dispatch => bindActionCreators({ addTask, loadTasks }, dispatch);

export default connect(mapState, mapAction)(withStyles(styles, { withTheme: true })(Tasks));
