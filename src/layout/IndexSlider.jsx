import main_visu1 from '../images/main_visu1.jpg';
import main_visu2 from '../images/main_visu2.jpg';
import main_visu3 from '../images/main_visu3.jpg';
import { Box } from "@mui/system";

function IndexSlider() {
    
    return (
        <Box>
            <img src={main_visu1} alt="main_visu1"></img>
            <img src={main_visu2} alt="main_visu2"></img>
            <img src={main_visu3} alt="main_visu3"></img>
        </Box>
    );
}

export default IndexSlider;