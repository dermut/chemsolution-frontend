import style from "../../css/lnb.module.css";
import Box from "@mui/material/Box";

function ProductNavbar() {
  return (
    <Box>
      <Box className={style.sub_visual} alt="sub_image"></Box>
      <Box className={style.container}>
        <Box className={style.empty_space}></Box>
        <Box className={style.lnb}>
          <div id="ln_area">
            <h2 className={style.h2_label}>Products</h2>
            <ul className={style.lnb_ul}>
              <li className={style.current}>
                <a href="/product">Products</a>
              </li>
              <li>
                <a href=".">AROMATIC SOLVENT</a>
              </li>
              <li>
                <a href=".">ALIPHATIC HYDROCARBON</a>
              </li>
              <li>
                <a href=".">PETROLEUM SOLVENT</a>
              </li>
              <li>
                <a href=".">LUBE BASE OIL</a>
              </li>
              <li>
                <a href=".">SYNTHETIC RESIN</a>
              </li>
              <li>
                <a href=".">ADDITIVE</a>
              </li>
              <li>
                <a href=".">LUBRICANT ADDITIVE</a>
              </li>
              <li>
                <a href=".">ELECTRONIC SOLVENT</a>
              </li>
              <li>
                <a href=".">ABBRASIVE</a>
              </li>
            </ul>
          </div>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductNavbar;
