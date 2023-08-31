import { useDispatch, useSelector } from "react-redux";
import { saveDetails, setCustomVal } from "../../slices/chatSlice";
import style from "../Chatbot/Chatbot.module.css";
import { useEffect } from "react";

export const MsgResponse = ({ submitResponse }) => {
  const { chooseMessage, customVal, userDetails } = useSelector(
    (state) => state.chat
  );
  const dispatch = useDispatch();

  useEffect(() => {
    Array.isArray(chooseMessage.val) && submitResponse();
  }, [customVal]);

  if (chooseMessage.type === "button")
    return (
      <button
        onClick={submitResponse}
        className={`${style.chatText} ${style.userText}`}
      >
        {chooseMessage.val}
      </button>
    );
  else if (chooseMessage.type === "text")
    return (
      <div className={style.replyToBot}>
        <input
          type="text"
          className={style.typeText}
          onChange={(e) => {
            dispatch(setCustomVal(e.target.value));
            dispatch(saveDetails({ ...userDetails, name: e.target.value }));
          }}
        />
        <span
          className={`material-icons ${style.materialIcon}`}
          onClick={submitResponse}
        >
          send
        </span>
      </div>
    );
  else if (chooseMessage.type === "dropdown")
    return (
      <select
        onChange={(e) => {
          dispatch(setCustomVal(e.target.value));
          dispatch(saveDetails({ ...userDetails, age: e.target.value }));
        }}
        defaultValue={customVal}
        className={style.pickAge}
      >
        {chooseMessage.val.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
};
