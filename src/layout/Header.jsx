import logo from '../images/main_logo.png';

function Header() {
    return (
        <header>
            <a href="/"><img src={logo} alt='main_logo'></img></a>
        </header>
    );
}

export default Header;