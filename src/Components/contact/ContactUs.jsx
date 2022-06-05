import style from "../../css/lnb.module.css";
import arrow from "../../images/arrow.png";
import { Box } from "@mui/system";
import { useEffect } from "react";

const { kakao } = window;

function ContactUs() {
  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    let map = new kakao.maps.Map(container, options);

    // 주소-좌표 변환 객체를 생성합니다
    let geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch("해룡산단 5로 71-5", function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new kakao.maps.InfoWindow({
          content:
            '<div style="width:150px;text-align:center;padding:6px 0;">켐솔루션</div>',
        });
        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }
    });
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
                  <span className={`${style.arrow} ${style.span}`}>
                    <img src={arrow} alt="" />
                  </span>
                  <span className={`${style.path} ${style.span}`}>
                    CONTACT US
                  </span>
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
  );
}

export default ContactUs;
