import layout from '../css/layout.css';
import subImg from '../images/sub01_img.jpg';

function IntroduceCorp() {
    return (
        <div className="introduce_div">
            <h1>ABOUT US</h1>
            <h2>Welcome to Chemsolution Co., Ltd.</h2>
            <p>We have a lot of experiences and skills in chemical area. Our company believes in the customer-first policy,<br/>
               so we export and import the best quality chemical products. The products we deal with are isoparaffin, hydrocarbon,<br/>
               aromatic hydrocarbon, dearomatic hydrocarbon, naphthenic hydrocarbon and so on. We always do our best to supply our<br/>
               customers eco-friendly products that are safe for human and the environment.</p>
            <img src={subImg} alt="chemsolution"></img>
        </div>
    )
}

export default IntroduceCorp;