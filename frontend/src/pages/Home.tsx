import { Nav, Welcome } from "../components/index.ts"
import { Context } from "../App.tsx"
import { useContext } from "react"
export default function Home() {
  //@ts-ignore
  const { loggedIn } = useContext(Context)
  return (
    <>
      <Nav />
      {loggedIn == false && <Welcome />}

    </>)
}
