import { Nav, Welcome, Login } from "../components/index.tsx"
import { Context } from "../App.tsx"
import { useContext } from "react"
export default function Home() {
  //@ts-ignore
  const { loggedIn, loggingIn, welcomePage } = useContext(Context)
  return (
    <>
      <Nav />
      {welcomePage === true && <Welcome />}
      {loggingIn === true && loggedIn == false && Login}

    </>)
}
