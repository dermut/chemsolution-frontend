import style from "../../css/lnb.module.css"
import arrow from "../../images/arrow.png"
import { Box } from "@mui/system";
import { useEffect } from "react";

const { kakao } = window;

function ContactUs() {
    useEffect(() => {
        let container = document.getElementById('map');
        let options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };
        
        let map = new kakao.maps.Map(container, options);
    }, []);

    return (
        <Box>
            <Box className={style.sub_visual} alt="sub_image"></Box>
            <Box className={style.container}>
                <Box className={style.empty_space}></Box>
                <Box className={style.lnb}>
                    <Box>
                        <div id="ln_area">
                            <h2 className={style.h2_label}>CONTACT US</h2>
                            <ul className={style.lnb_ul}>
                                <li className={style.current}>
                                    <a href="/contact">CONTACT US</a>
                                </li>
                            </ul>
                        </div>
                    </Box>
                </Box>
                <div>
                    <div>
                        <div className={style.feedback}>
                            <div className={style.sub_area}>
                                <h1 className={style.label}>CONTACT US</h1>
                                <div className={style.process}>
                                    <span className={style.span}>HOME</span>
                                    <span className={`${style.arrow} ${style.span}`}><img src={arrow} alt=""/></span>
                                    <span className={`${style.path} ${style.span}`}>CONTACT US</span>
                                </div>
                            </div>
                            <article className={style.clear}>
                                <div id="map" className={style.map}></div>
                            </article>
                        </div>
                    </div>
                </div>
            </Box>
        </Box>
    )
}

export default ContactUs;