import React, { Fragment, useEffect, useState } from "react";
import style from "./Chatbot.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewMessage,
  removeLatestUpcomingMsg,
  setChosenMessage,
  setCustomVal,
  setLoading,
} from "../../slices/chatSlice";
import { MsgResponse } from "../components";
import { useNavigate } from "react-router-dom";

export const Chatbot = () => {
  const [timer, setTimer] = useState(5);
  const navigate = useNavigate();
  const {
    chatMessages,
    isLoading,
    upcomingMessages,
    chooseMessage,
    customVal,
  } = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  const newBotMsg = ({ msg, opt }) => {
    dispatch(setChosenMessage({}));
    dispatch(setLoading());
    setTimeout(() => {
      dispatch(setLoading());
      dispatch(removeLatestUpcomingMsg());
      dispatch(
        addNewMessage({
          name: "bot",
          text: msg,
        })
      );
      dispatch(setChosenMessage(opt));
    }, 3000);
  };

  const submitResponse = () => {
    setTimeout(() => {
      dispatch(
        addNewMessage({
          name: "user",
          text: customVal ? customVal : chooseMessage.val,
        })
      );
    }, 50);
    customVal && dispatch(setCustomVal(""));
    newBotMsg(upcomingMessages[0]);
  };

  useEffect(() => {
    newBotMsg(upcomingMessages[0]);
  }, []);

  useEffect(() => {
    let timeInterval,
      i = 5;
    if (chooseMessage.type === "countdown") {
      timeInterval = setInterval(() => {
        setTimer((p) => p - 1);
        i--;
        if (i <= 0) {
            clearInterval(timeInterval)
            navigate("/thanks")
        };
      }, 1000);
    }
  }, [chooseMessage]);

  return (
    <div className={style.container}>
      <div className={style.chatbot}>
        <header className={style.menubar}>
          <span className={style.logo}>C</span>
          <span className={`material-icons ${style.materialIcon}`}>menu</span>
        </header>
        <main className={style.chat}>
          {chatMessages?.map(({ name, text, id }) => (
            <Fragment key={id}>
              <div className={style.chatMessage}>
                {name === "bot" && (
                  <img
                    src={new URL("../../assets/bot.png", import.meta.url).href}
                    className={style.replybot}
                  />
                )}
                <span
                  className={`${style.chatText} ${
                    name === "bot" ? "" : style.userText
                  }`}
                >
                  {text}
                </span>
              </div>
            </Fragment>
          ))}
          {isLoading && (
            <div className={style.chatMessage}>
              <img
                src={new URL("../../assets/bot.png", import.meta.url).href}
                className={style.replybot}
              />
              <div className={style.chatTextLoader}>
                <div className={style["dot-left"]}></div>
                <div className={style["dot-center"]}></div>
                <div className={style["dot-right"]}></div>
              </div>
            </div>
          )}

          {chooseMessage && (
            <div className={style.chatMessage}>
              <MsgResponse submitResponse={submitResponse} />
            </div>
          )}
          {chooseMessage.type === "countdown" && (
            <Fragment>
              <div className={style.chatMessage}>
                <img
                  src={new URL("../../assets/bot.png", import.meta.url).href}
                  className={style.replybot}
                />
                <span className={`${style.chatText}`}>{timer}</span>
              </div>
            </Fragment>
          )}
        </main>
      </div>
    </div>
  );
};
