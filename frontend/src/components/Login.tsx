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
      <main className="login-home flex flex-col justify-evenly items-center h-full w-full">

        <div className="flex flex-col justify-evenly items-center" >
          <h1>Login to Quizler</h1>
          <p>Welcome back! Please enter your credentials.</p>
        </div>
        <form>
          <div >
            <label htmlFor="email" />
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div >
            <label htmlFor="password"></label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
          </div>
          <button className="p-2 bg-blue-400 rounded-md border-black border-2" type="submit" >Login</button>
        </form>
        <div className="flex flex-col justify-evenly items-center space-y-2" >
          <p>Don't have an account? <a className=" ml-2 p-1 bg-blue-400 rounded-md border-black border-2" href=" /sign_up">Sign up</a></p>
          <p><a className="p-1 bg-blue-400 rounded-md border-black border-2" href="/reset_password">Forgot Password?</a></p>
        </div>

      </main >
    </>
  )
}


export default Login
