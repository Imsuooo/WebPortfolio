import "./style/info.css";

const info = () => {
  return (
    <section id="info" ref={info}>
      <div className="info_area">
        <div className="left_box">
          <img
            src="./img/profile.png"
            className="profileImg"
            alt="profileImg"
          />
           <img
            src="./img/info_text_bubble_m.png"
            className="info_text_bubble_m"
            alt="info_text_bubble_m"
          />
          <div className="text_box">
            <div className="text_title">
              <i className="icon_tree">
                <img
                  src="./img/icon_tree.png"
                  className="icon_tree_img"
                  alt="icon_tree_img"
                />
              </i>
              <p className="enFont">ABOUT</p>
            </div>
            <p className="text_info">
              <span className="enFont">NAME :</span>
              <span className="ko"> 임수연</span>
            </p>
            <p className="text_info">
              <span className="enFont">PHONE :</span>
              <span className="ko"> 010.2726.8400</span>
            </p>
            <p className="text_info">
              <span className="enFont">E-MAIL :</span>
              <span className="ko"> yeonim1104@gmail.com</span>
            </p>
          </div>
        </div>
        <div className="right_box">
          <img
            src="./img/info_text_bubble.png"
            className="info_text_bubble"
            alt="info_text_bubble"
          />
          <div className="top_info_text">
            <div className="text_box">
              <div className="text_title">
                <i className="icon_tree">
                  <img
                    src="./img/icon_tree.png"
                    className="icon_tree_img"
                    alt="icon_tree_img"
                  />
                </i>
                <p className="enFont">EDUCATION</p>
              </div>
              <p className="text_info">
                <span className="ko">
                  {" "}
                  2021. 02 공주대학교 시각디자인공학부 졸업 | 4.07
                </span>
              </p>
            </div>
            <div className="text_box">
              <div className="text_title">
                <i className="icon_tree">
                  <img
                    src="./img/icon_tree.png"
                    className="icon_tree_img"
                    alt="icon_tree_img"
                  />
                </i>
                <p className="enFont">LICENSE</p>
              </div>
              <p className="text_info">
                <span className="ko">
                  {" "}
                  2020. 02 GTQ그래픽기술자격 2급
                  <br />
                  2020. 08 컴퓨터활용능력 2급
                </span>
              </p>
            </div>
          </div>
          <div className="bottom_info_text">
            <div className="text_box skill_box">
              <div className="text_title">
                <i className="icon_tree">
                  <img
                    src="./img/icon_tree.png"
                    className="icon_tree_img"
                    alt="icon_tree_img"
                  />
                </i>
                <p className="enFont">SKILL</p>
              </div>
              <p className="text_info">
                <span className="ko">
                  Adobe Photoshop | Adobe Illustrator | Adobe XD | Adobe
                  InDesign | HTML | SCSS | JavaScript | jQuery | React | GitHub | Figma
                </span>
              </p>
              <img
                src="./img/skill.png"
                className="skill"
                alt="skill"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default info;
