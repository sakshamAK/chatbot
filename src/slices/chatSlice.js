import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  chatMessages: [],
  upcomingMessages: [
    {
      msg: "Hello, Welcome to student info system!",
      opt: {
        type: "button",
        val: "Got it!",
      },
    },
    {
      msg: "Enter your Name",
      opt: {
        type: "text",
        val: "",
      },
    },
    {
      msg: "Enter your Age",
      opt: {
        type: "dropdown",
        val: Array.from(
          { length: (40 - 18) / 1 + 1 },
          (_, index) => 18 + index * 1
        ),
      },
    },
    {
      msg: "Whats Up!",
      opt: {
        type: "text",
        val: "",
      },
    },
    {
      msg: "Thank you. In 5 seconds, bot will exit.",
      opt: {
        type: "countdown",
        val: "",
      },
    },
  ],
  isLoading: false,
  chooseMessage: {},
  customVal: "",
  userDetails: {
    name: "",
    age: ""
  }
};

export const chatSlice = createSlice({
  name: "chatMessages",
  initialState,
  reducers: {
    addNewMessage: (state, action) => {
      state.chatMessages.push({ ...action.payload, id: uuid() });
    },
    removeLatestUpcomingMsg: (state) => {
      state.upcomingMessages.length !== 1 && state.upcomingMessages.shift();
    },
    setLoading: (state) => {
      state.isLoading = state.isLoading ? false : true;
      // state.isLoading = true
    },
    setChosenMessage: (state, action) => {
      state.chooseMessage = action.payload;
    },
    setCustomVal: (state, action) => {
      state.customVal = action.payload;
    },
    saveDetails: (state, action) => {
        state.userDetails.name = action.payload.name;
        state.userDetails.age = action.payload.age;
    }
  },
});

export const {
  addNewMessage,
  setLoading,
  removeLatestUpcomingMsg,
  setChosenMessage,
  setCustomVal,
  saveDetails
} = chatSlice.actions;
export default chatSlice.reducer;
