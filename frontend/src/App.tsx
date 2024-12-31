import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, NotFound, Welcome } from "./pages/index.tsx";
import { Login, SignUp } from "./pages/index.tsx"
import { useState, createContext, useRef } from "react"

export const Context = createContext<NullableContextType>(null)
export default function App() {
  const email_input = useRef<HTMLInputElement>(null)
  const [loggedIn, setLoggedIn] = useState<boolean>(false)
  const [loggingIn, setLoggingIn] = useState<boolean>(false)
  const [welcomePage, setWelcomePage] = useState<boolean>(true)
  const ContextValue: ContextType = { welcomePage, setWelcomePage, loggedIn, setLoggedIn, email_input, loggingIn, setLoggingIn }
  return (
    <BrowserRouter>
      <Context.Provider value={ContextValue}>
        <div className="quizler-background">
          <Routes>
            <Route path="/" element={<Welcome />}>
            </Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/not_found" element={<NotFound />}>
            </Route>
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/sign_up" element={<SignUp />}>
            </Route>
          </Routes>
        </div>
      </Context.Provider>

    </BrowserRouter>
  );
}

