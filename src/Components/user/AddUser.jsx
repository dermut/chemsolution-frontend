import { useState } from 'react';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import { Box } from "@mui/system";
import { Button, IconButton, Modal, TextField, Typography } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    color: 'black',
    bgcolor: 'white',
    border: '2px solid #000',
    p: 4,
};

function AddUser() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box
            className="userArea"
            alignSelf="center"
        >
            <IconButton onClick={handleOpen} size="large">
                <PersonAddAltRoundedIcon/>
            </IconButton>
            <form action="/api/user/add">
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box
                        component="form"
                        sx={style}
                    >
                        <Typography variant="h5">
                            Join Member
                        </Typography>
                        <TextField
                            id="username"
                            label="username"
                            variant="outlined"
                        ></TextField>
                        <TextField
                            id="password"
                            label="password"
                            type="password"
                        ></TextField>
                        <Button
                            variant="contained"
                            color="success"
                            type="submit"
                        >
                            JOIN
                        </Button>
                    </Box>
                </Modal>
            </form>
        </Box>
    )
}

export default AddUser;