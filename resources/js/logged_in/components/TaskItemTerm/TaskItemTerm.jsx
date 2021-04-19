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


class TaskItemTerm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { classes } = this.props;
        
        const { nameTitle, termId, terms} = this.props;
        const currTerm = terms.filter(el => {el.id === termId}); 
        // const termsSel = (terms) ?  (         
                    
            
                            
               
                
        // ) : ['Свойство не загружено...'];
        return (
            <ListItem
                key={termId}
               
                className="listItemLeftPadding"
            >
                <ListItemText>
                  <Typography variant="body2">{nameTitle}</Typography>
                </ListItemText>
                <FormControl variant="outlined">
                  <ListItemSecondaryAction
                    className={classes.ListItemSecondaryAction}
                  >
                    <Select
                     value={`term${termId}`}
                    
                      input={
                        <OutlinedInput
                          name='taskTerm'
                          labelWidth={0}
                          className={classes.numberInput}
                          classes={{ input: classes.numberInputInput }}
                          value={`term${termId}`}
                        />
                      }
                      MenuProps={{ disableScrollLock: true }}
                    >
                      {terms.map((innerElement) => (
                        <MenuItem value={`term${innerElement.id}`} key={innerElement.id}>
                          {innerElement.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </ListItemSecondaryAction>
                </FormControl>
               
            </ListItem>
                 
               
            
        );
    }
}

export default (withStyles(styles, { withTheme: true })(TaskItemTerm));
