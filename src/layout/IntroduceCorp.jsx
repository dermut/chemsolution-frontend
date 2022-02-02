import layout from '../css/layout.css';
import subImg from '../images/sub01_img.jpg';

function IntroduceCorp() {
    return (
        <div className="introduce_div">
            <div className="empty_div"></div>
            <div className="introduce_content">
                <div>
                    <h1>ABOUT US</h1>
                    <h2>Welcome to Chemsolution Co., Ltd.</h2>
                    <p>We have a lot of experiences and skills in chemical area. Our company<br/>
                    believes in the customer-first policy, so we export and import the best quality<br/>
                    chemical products. The products we deal with are isoparaffin, hydrocarbon,<br/> 
                    aromatic hydrocarbon, dearomatic hydrocarbon, naphthenic hydrocarbon<br/>
                    and so on. We always do our best to supply our customers eco-friendly<br/>
                    products that are safe for human and the environment.</p>
                </div>
                <div>
                    <img src={subImg} alt="chemsolution"></img>
                </div>
            </div>
            <div className="empty_div"></div>
        </div>
    )
}

export default IntroduceCorp;