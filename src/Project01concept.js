import "./style/project.css";

const project01_1 = () => {
  return (
    <section id="project01_1" className="project_item">
      <div className="section_box content_container">
        <div className="right">
          <div className="enFont title">CONCEPT</div>
          <ul className="min_box">
            <li>
              <div className="enFont min_title">
                <img
                  src="./img/freitag_concept_icon.png"
                  alt="freitag_concept_icon"
                  className="concept_icon"
                />
                <span className="enFont min_title_text min_title_text_freitag">
                  DESIGN CONCEPT
                </span>
              </div>
              <p className="ko concept_text">
                해더에 이미지 슬라이더를 추가하여 연출 컷들을 비주얼적으로
                보여주고 제어 버튼도 제작하였습니다.
                <br />
                메인에는 상품들 옆에 용도를 파악할 수 있는 컨셉 사진을 추가하여
                디자인 하였고, 상품 슬라이드의 제어버튼을 추가하여 웹접근성을
                높였습니다.
                <br />
                하단에는 사이드메뉴에 숨겨져있던 연락처와 SNS계정을 추가하여
                회사의 정보를 보다 쉽게 접근 할 수 있도록 디자인 하였습니다.
              </p>
            </li>
            <li>
              <div className="enFont min_title">
                <img
                  src="./img/freitag_concept_icon.png"
                  alt="freitag_concept_icon"
                  className="concept_icon"
                />
                <span className="enFont min_title_text min_title_text_freitag">
                  TYPOGRAPY
                </span>
              </div>
              <p className="ko concept_text">Pretendard 체</p>
            </li>
            <li>
              <div className="enFont min_title">
                <img
                  src="./img/freitag_concept_icon.png"
                  alt="freitag_concept_icon"
                  className="concept_icon"
                />
                <span className="enFont min_title_text min_title_text_freitag">
                  COLOR
                </span>
              </div>
              <div className="color_area">
                <div className="color_box">
                  <div className="color color_000"></div>
                  <span className="color_name">#000000</span>
                </div>
                <div className="color_box">
                  <div className="color color_f5f5f5"></div>
                  <span className="color_name">#F5F5F5</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="left">
          <div className="enFont min_title">
            <img
              src="./img/freitag_concept_icon.png"
              alt="freitag_concept_icon"
              className="concept_icon"
            />
            <span className="enFont min_title_text min_title_text_freitag">
            WIREFRAME
            </span>
          </div>
          <img src="./img/freitag_wireframe.png" alt="freitag_wireframe" className="wireframe" />
        </div>
      </div>
    </section>
  );
};

export default project01_1;
