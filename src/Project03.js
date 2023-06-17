import "./style/project.css";

const project03 = () => {
  return (
    <section id="project03" ref={project03} className="project">
      <div className="content content_container">
        <div className="content_left">
          <img
            src="./img/maeil_title.png"
            alt="maeil_title"
            className="project_title"
          />
          <div className="content_boxs content_box_web">
            <div className="content_box">
              <p className="content_info">
                <span className="ko koB koB_maeil">작업 기여도 :</span>
                <span> 100%</span>
              </p>
              <p className="content_info">
                <span className="ko koB koB_maeil">작업 기간 :</span>
                <span> 1 Weeks</span>
              </p>
              <p className="content_info">
                <span className="ko koB koB_maeil">사용한 프로그램 :</span>
                <span className="skill">
                  HTML | SCSS | JavaScript | jQuery | Adobe Photoshop | <br />
                  Adobe Illustrator | Adobe XD | Bootstrap
                </span>
              </p>
            </div>
            <a
              href="https://imsuooo.github.io/maeil/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn3"
            >
              #사이트 보러가기
              <i className="btn_arrow">
                <img src="./img/btn_arrow.png" alt="btn_arrow_img" />
              </i>
            </a>
            <p className="overview ko">
            유아에서 노년까지 모두에게
              <br />
              가장 안전하고, 가장 맛있는 유가공 제품을 제조하는
              <br />
              매일유업 반응형 웹디자인 + 코딩 입니다.
            </p>
          </div>
        </div>
        <div className="content_right">
          <img
            src="./img/maeil_header.png"
            alt="maeil_header"
            className="header_img"
          />
        </div>
        <div className="content_boxs content_box_m">
          <div className="content_box">
            <p className="content_info">
              <span className="ko koB koB_maeil">작업 기여도 :</span>
              <span> 100%</span>
            </p>
            <p className="content_info">
              <span className="ko koB koB_maeil">작업 기간 :</span>
              <span> 1 Weeks</span>
            </p>
            <p className="content_info">
              <span className="ko koB koB_maeil">사용한 프로그램 :</span>
              <span className="skill">
              HTML | SCSS | JavaScript | jQuery | Adobe Photoshop | <br />
                  Adobe Illustrator | Adobe XD | Bootstrap
              </span>
            </p>
          </div>
          <a
            href="https://imsuooo.github.io/maeil/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn3"
          >
            #사이트 보러가기
            <i className="btn_arrow">
              <img src="./img/btn_arrow.png" alt="btn_arrow_img" />
            </i>
          </a>
          <p className="overview ko">
            유아에서 노년까지 모두에게
              <br />
              가장 안전하고, 가장 맛있는 유가공 제품을 제조하는
              <br />
              매일유업 반응형 웹디자인 + 코딩 입니다.
            </p>
        </div>
      </div>
    </section>
  );
};

export default project03;
