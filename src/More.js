import "./style/more.css";

const more = () => {
  return (
    <section id="more" ref={more} className="more">
      <div className="more_area container">
        <div className="more_img-area">
          <img src="./img/more.png" className="moreImg" alt="moreImg" />
        </div>
        <p className="more_text">
          <strong>상세페이지 제작(wadiz)</strong><br/>경력이 보고 싶으시다면? 👀
        </p>
        <a href="https://plastic-curler-f03.notion.site/989e4ba99f8049d5ae09817ef534fafd" target="_blank" rel="noopener noreferrer" className="moreBtn">
        보러가기<i className="btn_arrow"><img src="./img/btn_arrow.png" alt="btn_arrow_img" /></i>
        </a>
      </div>
    </section>
  );
};

export default more;
