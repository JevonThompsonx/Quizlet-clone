import { Context } from "../App.tsx"
import { useContext } from 'react'
import { Nav } from "../components/index.tsx"
const Login = () => {
  const { setWelcomePage, welcomePage, email_input } = useContext(Context)
  if (welcomePage == true && setWelcomePage) {
    setWelcomePage(false)
  }
  return (
    <>
      <Nav />
      <div className="flex flex-col justify-center items-center w-full h-full">
        Welcome to the login page
      </div>
    </>
  )
}


export default Login
