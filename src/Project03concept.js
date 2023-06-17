import "./style/project.css";

const project03_1 = () => {
  return (
    <section id="project03_1" className="project_item">
    <div className="section_box content_container">
      <div className="right">
        <div className="enFont title maeil_title">CONCEPT</div>
        <ul className="min_box">
          <li>
            <div className="enFont min_title">
              <img
                src="./img/maeil_concept_icon.png"
                alt="maeil_concept_icon"
                className="concept_icon"
              />
              <span className="enFont min_title_text min_title_text_maeil">
                DESIGN CONCEPT
              </span>
            </div>
            <p className="ko concept_text">
            전체적으로 둥근 모서리를 사용하여 유제품에 어울리는 부드러운 컨셉으로 디자인 하였습니다.
              <br />
              다양한 섹션으로 나뉜 메인 부분을 4가지 섹션으로 단축하여 한눈에 보기 쉽고 깔끔하게 변형했습니다.
              <br />
              브랜드 소개는 이 전보다 눈에 잘 띄도록 영역을 넓혔고, 해당 브랜드를 보여줄 수 있는 이미지를 제작하여 삽입하였습니다.
            </p>
          </li>
          <li>
            <div className="enFont min_title">
              <img
                src="./img/maeil_concept_icon.png"
                alt="maeil_concept_icon"
                className="concept_icon"
              />
              <span className="enFont min_title_text min_title_text_maeil">
                TYPOGRAPY
              </span>
            </div>
            <p className="ko concept_text">NanumSquare 체</p>
          </li>
          <li>
            <div className="enFont min_title">
              <img
                src="./img/maeil_concept_icon.png"
                alt="maeil_concept_icon"
                className="concept_icon"
              />
              <span className="enFont min_title_text min_title_text_maeil">
                COLOR
              </span>
            </div>
            <div className="color_area">
              <div className="color_box">
                <div className="color color_194E92"></div>
                <span className="color_name">#194E92</span>
              </div>
              <div className="color_box">
                <div className="color color_412793"></div>
                <span className="color_name">#412793</span>
              </div>
              <div className="color_box">
                <div className="color color_F8F9FA"></div>
                <span className="color_name">#F8F9FA</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="left">
        <div className="enFont min_title">
          <img
            src="./img/maeil_concept_icon.png"
            alt="maeil_concept_icon"
            className="concept_icon"
          />
          <span className="enFont min_title_text min_title_text_maeil">
            WIREFRAME
          </span>
        </div>
        <img
          src="./img/maeil_wireframe.png"
          alt="maeil_wireframe"
          className="wireframe"
        />
      </div>
    </div>
  </section>
  );
};

export default project03_1;
