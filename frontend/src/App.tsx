import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import { useState, createContext, useRef } from "react"

export const Context = createContext<ContextType | null>(null)
export default function App() {
  const email_input = useRef<HTMLInputElement>(null)
  const [loggedIn, setLoggedIn] = useState<boolean>(false)
  const [loggingIn, setLoggingIn] = useState<boolean>(false)
  const ContextValue: ContextType = { loggedIn, setLoggedIn, email_input, loggingIn, setLoggingIn }
  return (
    <BrowserRouter>
      <Context.Provider value={ContextValue}>
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

