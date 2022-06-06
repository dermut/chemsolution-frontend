import logo from "../images/main_logo.png";
import { Link } from "@mui/material";
import { Box } from "@mui/system";
import AddUser from "../Components/user/AddUser";

function Header() {
  return (
    <Box
      display="grid"
      alignItems="center"
      gridTemplateColumns="repeat(6, 1fr)"
      paddingTop="10px"
    >
      <Box classNameName="emptyBox"></Box>
      <Link href={process.env.PUBLIC_URL}>
        <img src={logo} alt="main_logo"></img>
      </Link>
      <Box className="emptyBox"></Box>
      <Box className="emptyBox"></Box>
      <Box className="emptyBox"></Box>
      <AddUser />
    </Box>
  );
}

export default Header;
