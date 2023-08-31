import { Route, Routes } from "react-router-dom"
import { Chatbot, Landing, ThanksForVisit } from "./pages"
import "./App.css"

export const App = () => {
  return (
    <Routes>
        <Route path = "/" element = {<Landing />} />
        <Route path = "/chatbot" element = {<Chatbot />} />
        <Route path = "/thanks" element = {<ThanksForVisit />} />
    </Routes>
  )
}
