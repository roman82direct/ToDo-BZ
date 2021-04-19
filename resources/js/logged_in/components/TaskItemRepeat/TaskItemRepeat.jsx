import React, { Component, Fragment  } from "react";

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
import { withStyles } from '@material-ui/core/styles';
import styles from "./style";


class TaskItemRepeat extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { classes } = this.props;
        // console.log(`TaskItem - ${this.props.task}`);
        const { task, repeat, repeats} = this.props;
        const Task = (task) ?  (
           
                
                    <List disablePadding>
                        <Bordered disableVerticalPadding disableBorderRadius>
                            <ListItem
                                key={task.id}
                                divider={task.id !== task.length - 1}
                                className="listItemLeftPadding"
                            >
                                <ListItemText>
                                    <Typography variant="body2">
                                        {task.description}
                                        {task.description && <HelpIcon title={task.description} />}
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
               
                
        ) : ['Задача не загружена...'];
        return (
            <AccordionDetails className={classes.dBlock}>
                 { Task }
               
            </AccordionDetails>
        );
    }
}

export default (withStyles(styles, { withTheme: true })(TaskItemRepeat));
