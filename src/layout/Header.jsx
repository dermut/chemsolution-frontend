import logo from '../images/main_logo.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import { Link } from '@mui/material';
import { Box } from '@mui/system';

function Header() {
    return (
        <Box 
            display="grid"
            alignItems="center"
            gridTemplateColumns="repeat(6, 1fr)"
        >
            <Box class="emptyBox"></Box>
            <Link href="/"><img src={logo} alt='main_logo'></img></Link>
            <Box class="emptyBox"></Box>
            <Box class="emptyBox"></Box>
            <Box class="emptyBox"></Box>
            <Box
                class="userArea"
                alignSelf="center"
            >
                <AccountCircleIcon fontSize="large"></AccountCircleIcon>
                <Link href="/api/user/add">
                    <PersonAddAltRoundedIcon fontSize="large"></PersonAddAltRoundedIcon>
                </Link>
            </Box>
        </Box>
    );
}

export default Header;