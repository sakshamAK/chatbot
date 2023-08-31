import { Link } from "react-router-dom";
import style from "./Landing.module.css";

export const Landing = () => {
  return (
    <div className={style.landing}>
      <div className={style.intro}>
        <h1>Enter Into Student's Info System</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          cumque adipisci veniam ipsam corrupti quidem totam nesciunt! Non unde
          fugit perspiciatis debitis possimus, quam quidem minima illo eum
          molestias a.
        </p>
        <Link to="/chatbot" className={style.enrollBot}>Enroll Now!</Link>
      </div>
      <div className={style.introBlob}>
        <img src={new URL("../../assets/blobBoy.png", import.meta.url).href} className={style.blob} />
      </div>
    </div>
  );
};
