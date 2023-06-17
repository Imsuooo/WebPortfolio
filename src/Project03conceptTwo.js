import "./style/project.css";

const project03_2 = () => {
  return (
    <section id="project03_2" className="project_item">
      <div className="section_box content_container section_box_blender ">
        <div className="enFont title maeil_title">IMAGE_BLENDER</div>
        <p className="ko maeil_concept_text">
          블렌더(Blender)란 3D 그래픽 제작 소프트웨어입니다.
          <br />
          둥글고 부드러운 디자인 무드의 나타내기 위해서 그에 맞는 이미지를
          제작해야 했습니다.
          <br />
          매일유업 제품을 담은 용기를 표현에 3D 이미지가 적합하다고 판단하여<br/>
          3일의 짧은 기간동안 블렌더 툴을 독학을 하여 필요한 소스를 제작해 사용하였습니다.
        </p>
        <img src="./img/maeil_blender.png" alt="maeil_blender" className="maeil_blender_web"/>
        <img src="./img/maeil_blender_m.png" alt="maeil_blender_m" className="maeil_blender_m"/>
      </div>
    </section>
  );
};

export default project03_2;
