import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import { useState, createContext } from "react"

export const Context = createContext<any>(null)
export default function App() {

  const [loggedIn, SetLoggedIn] = useState<boolean>(false)
  return (
    <BrowserRouter>
      <Context.Provider value={{ loggedIn, SetLoggedIn }}>
        <div className="quizler-background">
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/not_found" element={<NotFound />}>
            </Route>
          </Routes>
        </div>
      </Context.Provider>

    </BrowserRouter>
  );
}

