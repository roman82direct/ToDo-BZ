import React from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import styles from "./style";

function CreateList(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let listName = '';

    const handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            sendList();
        }
        listName = event.target.value;
    };

    const sendList = () => {
        if (listName) {
            props.addList(listName);
            handleClose();
        }
    };

    return (
        <div className="create-list">
            <Button startIcon={<AddIcon />} onClick={handleClickOpen}>
                Создать список
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Создать список</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Введите название списка
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        type="text"
                        variant="outlined"
                        onKeyUp={ event => handleKeyUp(event) }
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={sendList} variant="outlined">
                        Добавить список
                    </Button>
                    <Button onClick={handleClose} >
                        Отмена
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default (withStyles(styles, { withTheme: true })(CreateList));
