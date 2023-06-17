import { useEffect, useState } from "react";
import "./style/footer.css";

const Footer = () => {
  const [text, setText] = useState("");
  const [count, SetCount] = useState(0);
  const completionword = "thank you! ";
  useEffect(() => {
    const typingInterval = setInterval(() => {
      setText(text + completionword[count]);
        SetCount(count + 1);},300);

        if (count === completionword.length) {
          SetCount(0);
          setText("");
        }
        return () => 
          clearInterval(typingInterval)
  });
  return (
    <section id="footer">
      <div className="footerText">
        <div className="text_area">
          <p className="text enFont">thank you!</p>
        </div>
        <div className="text_area_ko">
          <p className="ko">끝까지 봐주셔서 감사합니다.🙂</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
