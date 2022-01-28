import logo from '../images/main_logo.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';import { Link } from '@mui/material';

function Header() {
    return (
        <header>
            <a href="/"><img src={logo} alt='main_logo'></img></a>
            <AccountCircleIcon></AccountCircleIcon>
            <Link href="/api/user/add">
                <PersonAddAltRoundedIcon color="primary"></PersonAddAltRoundedIcon>
            </Link>
        </header>
    );
}

export default Header;