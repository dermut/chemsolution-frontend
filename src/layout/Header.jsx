import { useState } from 'react';
import logo from '../images/main_logo.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import { Button, IconButton, Link, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

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

function Header() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <Box 
            display="grid"
            alignItems="center"
            gridTemplateColumns="repeat(6, 1fr)"
            paddingTop="10px"
        >
            <Box classNameName="emptyBox"></Box>
            <Link href="/"><img src={logo} alt='main_logo'></img></Link>
            <Box className="emptyBox"></Box>
            <Box className="emptyBox"></Box>
            <Box className="emptyBox"></Box>
            <Box
                className="userArea"
                alignSelf="center"
            >
                <AccountCircleIcon fontSize="large"></AccountCircleIcon>
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
        </Box>
    );
}

export default Header;