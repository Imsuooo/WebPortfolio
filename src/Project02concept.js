import "./style/project.css";

const project02_1 = () => {
  return (
    <section id="project02_1" className="project_item">
      <div className="section_box content_container">
        <div className="right">
          <div className="enFont title unicef_title">CONCEPT</div>
          <ul className="min_box">
            <li>
              <div className="enFont min_title">
                <img
                  src="./img/unicef_concept_icon.png"
                  alt="unicef_concept_icon"
                  className="concept_icon"
                />
                <span className="enFont min_title_text min_title_text_unicef">
                  DESIGN CONCEPT
                </span>
              </div>
              <p className="ko concept_text">
                신뢰, 전문성, 소식전달을 키워드로 정하여 리디자인 하였습니다.
                <br />
                기존 디자인에서 크게 벗어나지 않는 선에서 보다 깔끔하게 정리하여
                가독성을 높혔고,
                <br />
                순수 자바스크립트만으로 제작하였습니다.
              </p>
            </li>
            <li>
              <div className="enFont min_title">
                <img
                  src="./img/unicef_concept_icon.png"
                  alt="unicef_concept_icon"
                  className="concept_icon"
                />
                <span className="enFont min_title_text min_title_text_unicef">
                  TYPOGRAPY
                </span>
              </div>
              <p className="ko concept_text">S-Core Dream 체</p>
            </li>
            <li>
              <div className="enFont min_title">
                <img
                  src="./img/unicef_concept_icon.png"
                  alt="unicef_concept_icon"
                  className="concept_icon"
                />
                <span className="enFont min_title_text min_title_text_unicef">
                  COLOR
                </span>
              </div>
              <div className="color_area">
                <div className="color_box">
                  <div className="color color_1AABE2"></div>
                  <span className="color_name">#1AABE2</span>
                </div>
                <div className="color_box">
                  <div className="color color_FFDC0D"></div>
                  <span className="color_name">#FFDC0D</span>
                </div>
                <div className="color_box">
                  <div className="color color_404040"></div>
                  <span className="color_name">#404040</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="left">
          <div className="enFont min_title">
            <img
              src="./img/unicef_concept_icon.png"
              alt="unicef_concept_icon"
              className="concept_icon"
            />
            <span className="enFont min_title_text min_title_text_unicef">
              WIREFRAME
            </span>
          </div>
          <img
            src="./img/unicef_wireframe.png"
            alt="unicef_wireframe"
            className="wireframe"
          />
        </div>
      </div>
    </section>
  );
};

export default project02_1;
