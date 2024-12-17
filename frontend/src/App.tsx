import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, NotFound } from "./pages/index.tsx";
import { Login } from "./components/index.tsx"
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
            <Route path="/login" element={<Login />}>
            </Route>
          </Routes>
        </div>
      </Context.Provider>

    </BrowserRouter>
  );
}

