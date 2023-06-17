import "./style/project.css";

const project01 = () => {
  return (
    <section id="project01" ref={project01} className="project">
      <div className="content content_container">
        <div className="content_left">
          <img
            src="./img/freitag_title.png"
            alt="freitag_title"
            className="project_title"
          />
         <div className="content_boxs content_box_web">
            <div className="content_box">
              <p className="content_info">
                <span className="ko koB">작업 기여도 :</span>
                <span> 100%</span>
              </p>
              <p className="content_info">
                <span className="ko koB">작업 기간 :</span>
                <span> 2 Weeks</span>
              </p>
              <p className="content_info">
                <span className="ko koB">사용한 프로그램 :</span>
                <span className="skill">
                  HTML | SCSS | JavaScript | jQuery |<br />
                  Adobe Photoshop | Adobe Illustrator | Adobe XD
                </span>
              </p>
            </div>
            <a href="https://imsuooo.github.io/FREITAG/" target="_blank" rel="noopener noreferrer" className="btn btn1">#사이트 보러가기<i className="btn_arrow"><img src="./img/btn_arrow.png" alt="btn_arrow_img" /></i></a>
            <p className="overview ko">
              오래된 트럭 방수천을 기본 원단으로 삼아 낡아 버려질 것들을
              <br />
              세상에 단 하나뿐인 가방으로 제작하는 친환경 기업
              <br />
              프라이탁 반응형 웹디자인 + 코딩 입니다.
            </p>
         </div>
        </div>
        <div className="content_right">
        <img
            src="./img/freitag_header.png"
            alt="freitag_header"
            className="header_img"
          />
        </div>
        <div className="content_boxs content_box_m">
            <div className="content_box">
              <p className="content_info">
                <span className="ko koB">작업 기여도 :</span>
                <span> 100%</span>
              </p>
              <p className="content_info">
                <span className="ko koB">작업 기간 :</span>
                <span> 2 Weeks</span>
              </p>
              <p className="content_info">
                <span className="ko koB">사용한 프로그램 :</span>
                <span className="skill">
                  HTML | SCSS | JavaScript | jQuery |<br />
                  Adobe Photoshop | Adobe Illustrator | Adobe XD
                </span>
              </p>
            </div>
            <a href="https://imsuooo.github.io/FREITAG/" target="_blank" rel="noopener noreferrer" className="btn btn1">#사이트 보러가기<i className="btn_arrow"><img src="./img/btn_arrow.png" alt="btn_arrow_img" /></i></a>
            <p className="overview ko">
              오래된 트럭 방수천을 기본 원단으로 삼아 낡아 버려질 것들을 
              <br />
              세상에 단 하나뿐인 가방으로 제작하는 친환경 기업 
              <br />
              프라이탁 반응형 웹디자인 + 코딩 입니다.
            </p>
         </div>
      </div>
    </section>
  );
};

export default project01;
