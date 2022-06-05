import Box from "@mui/material/Box";
import ProductNavbar from "./ProductNavbar";

function Product() {
  return (
    <Box>
      <ProductNavbar />
      <div id="sub_cnt">
        <div className="feedback">
          <h3 className="h3_label">TOLUENE, XYLENE, #100, #150</h3>
          <div className="process">
            <span className="home">HOME</span>
            <span className="arrow">
              <img
                src="http://chemsolution.net/theme/chemsolution/images/sub/arrow.png"
                alt=""
              />
            </span>
            <span className="path">PRODUCTS</span>

            <span className="arrow">
              <img
                src="http://chemsolution.net/theme/chemsolution/images/sub/arrow.png"
                alt=""
              />
            </span>
            <span className="path">AROMATIC SOLVENT</span>
            <span className="arrow">
              <img
                src="http://chemsolution.net/theme/chemsolution/images/sub/arrow.png"
                alt=""
              />
            </span>
            <span className="path">TOLUENE, XYLENE, #100, #150</span>
          </div>
        </div>
        <article className="s0201 clear">
          <div id="s0201_top">
            <p>
              CHEMSOL <b>Toluene</b> is a colorless transparent volatile liquid
              with aromatic odor and has a methyl group attached to benzene.
              <br />
              CHEMSOL <b>Xylene</b> is a colorless transparent volatile liquid
              with a directional odor and has two methyl groups attached to
              benzene. Xylene has three isomers, olso-, meta- and para-xylene,
              depending on the position of the methylene group
            </p>
          </div>
          <div className="s0201_name">
            <ul>
              <li>Typical Value</li>
              <li></li>
            </ul>
          </div>
          <table className="table_2_1">
            <thead>
              <tr>
                <td className="bg">Properties</td>
                <td>Toluene</td>
                <td>Xylene</td>
                <td>#100</td>
                <td>#150</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bg">Appearance</td>
                <td>Liquid</td>
                <td>Liquid</td>
                <td>Liquid</td>
                <td>Liquid</td>
              </tr>
              <tr>
                <td className="bg">Odor</td>
                <td>benzene odor</td>
                <td>unique odorr</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td className="bg">
                  Melting point /<br />
                  Freezing point
                </td>
                <td>-95℃</td>
                <td>-42℃</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td className="bg">
                  Initial Boiling Point /<br />
                  Boiling Ranges
                </td>
                <td>110.6 ℃</td>
                <td>137 ℃ ~ 143 ℃</td>
                <td>155 ℃ ~ 180 ℃</td>
                <td>170 ℃ ~ 210 ℃</td>
              </tr>
              <tr>
                <td className="bg">Flash point</td>
                <td>4 ℃ (c.c.)</td>
                <td>
                  32℃(o-), 27℃(m-),27℃(p-),
                  <br />
                  Ethylbenzene 18℃
                </td>
                <td>44.5℃</td>
                <td>62℃</td>
              </tr>
              <tr>
                <td className="bg">Evaporation rate</td>
                <td>2.24</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td className="bg">
                  Specific graviti
                  <br />
                  (Relative dnesity)
                </td>
                <td>0.866~0.873</td>
                <td>0.865~0.875 @15.56℃</td>
                <td>0.86~0.88</td>
                <td>0.89</td>
              </tr>
              <tr>
                <td className="bg">Density</td>
                <td>3.18</td>
                <td>3.7</td>
                <td>&gt;1.0</td>
                <td>-</td>
              </tr>
              <tr>
                <td className="bg">Viscosity</td>
                <td>0.56</td>
                <td>0.67</td>
                <td>0.94</td>
                <td>1.14</td>
              </tr>
            </tbody>
          </table>

          <div className="features">
            <div className="feat_t">
              <span>Application</span>
            </div>
            <ul className="line1">
              <li>
                {" "}
                Paint, Ink, Adhesive solvent, Resin solvent, TDI &amp; TNT Raw
                material, TNT, Audio tape coating
              </li>
            </ul>
            <ul className="line1">
              <li>
                {" "}
                Used as a solvent for paint solvents and agricultural chemicals
              </li>
            </ul>
            <ul className="line1">
              <li>
                {" "}
                Used as a raw material for olso-xylene (methophthalic acid),
                meta-xylene (isophthalic acid), paraxylene (terephthalic acid)
                and ethylbenzene <br /> (styrene monomer)
              </li>
            </ul>
            <ul className="line1">
              <li>
                {" "}
                Industrial paint (ship, automobile) solvent, pesticide emulsifie
              </li>
            </ul>
          </div>
        </article>
      </div>
    </Box>
  );
}

export default Product;
