const newBotMsg = ({ msg, opt }) => {
    console.log(upcomingMessages);
    setChooseMessage({});
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
      setChooseMessage(opt);
    }, 3000);
  };