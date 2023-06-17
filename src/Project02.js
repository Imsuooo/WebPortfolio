import "./style/project.css";

const project02 = () => {
  return (
    <section id="project02" ref={project02} className="project">
       <div className="content content_container">
        <div className="content_left">
          <img
            src="./img/unicef_title.png"
            alt="unicef_title"
            className="project_title"
          />
         <div className="content_boxs content_box_web">
            <div className="content_box">
              <p className="content_info">
                <span className="ko koB koB_unicef">작업 기여도 :</span>
                <span> 100%</span>
              </p>
              <p className="content_info">
                <span className="ko koB koB_unicef">작업 기간 :</span>
                <span> 1 Weeks</span>
              </p>
              <p className="content_info">
                <span className="ko koB koB_unicef">사용한 프로그램 :</span>
                <span className="skill">
                  HTML | SCSS | JavaScript |<br />
                  Adobe Photoshop | Adobe Illustrator | Adobe XD
                </span>
              </p>
            </div>
            <a href="https://imsuooo.github.io/unicef/" target="_blank" rel="noopener noreferrer" className="btn btn2">#사이트 보러가기<i className="btn_arrow"><img src="./img/btn_arrow.png" alt="btn_arrow_img" /></i></a>
            <p className="overview ko">
            전 세계 어린이를 위한, 어린이 정기 후원 단체
              <br />
              순수 자바스크립트로 완성한
              <br />
              유니세프 반응형 웹디자인 + 코딩 입니다.
            </p>
         </div>
        </div>
        <div className="content_right">
        <img
            src="./img/unicef_header.png"
            alt="unicef_header"
            className="header_img"
          />
        </div>
        <div className="content_boxs content_box_m">
        <div className="content_box">
              <p className="content_info">
                <span className="ko koB koB_unicef">작업 기여도 :</span>
                <span> 100%</span>
              </p>
              <p className="content_info">
                <span className="ko koB koB_unicef">작업 기간 :</span>
                <span> 1 Weeks</span>
              </p>
              <p className="content_info">
                <span className="ko koB koB_unicef">사용한 프로그램 :</span>
                <span className="skill">
                  HTML | SCSS | JavaScript |<br />
                  Adobe Photoshop | Adobe Illustrator | Adobe XD
                </span>
              </p>
            </div>
            <a href="https://imsuooo.github.io/unicef/" target="_blank" rel="noopener noreferrer" className="btn btn2">#사이트 보러가기<i className="btn_arrow"><img src="./img/btn_arrow.png" alt="btn_arrow_img" /></i></a>
            <p className="overview ko">
            전 세계 어린이를 위한, 어린이 정기 후원 단체
              <br />
              순수 자바스크립트로 완성한
              <br />
              유니세프 반응형 웹디자인 + 코딩 입니다.
            </p>
         </div>
      </div>
    </section>
  );
};

export default project02;
