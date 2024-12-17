import { Context } from "../App.tsx"
import { useContext } from "react"

const Welcome = () => {
  const { email_input } = useContext(Context)
  if (email_input) {
    return (
      <form className="flex flex-col justify-center items-center w-full h-full" >
        <div className="Quizler-home flex flex-col justify-evenly items-center p-6 space-y-4">
          <h1 className="text-3xl">Welcome to Quizler</h1>
          <h3>A simple study tool</h3>

          <div className="Input-home flex flex-col space-y-2">
            <div className="email-div flex flex-row justify-evenly items-center space-x-2">
              <label htmlFor="email-input">email: </label>
              <input id="email-input" className="rounded-xl p-2" type="text" ref={email_input} />
            </div>
            <div className="flex flex-row justify-center items-center space-x-2">
              <button className="rounded-2xl bg-amber-300 text-white p-2">
                Sign up
              </button>
              <button className="rounded-2xl bg-amber-300 text-white p-2">
                Login
              </button>
            </div>
          </div>
        </div>
      </form>)

  }
}

export default Welcome
