import Nav from "../components/Nav"
export default function Home() {

  return (
    <>
      <Nav />
      <div className="flex flex-col justify-evenly items-center w-full h-full space-y-2 ">
        <h1 className="text-3xl">Welcome to Quizler</h1>

        <div className="Input-home flex flex-col space-y-2">
          <input className="rounded-xl" type="text" />
          <input className="rounded-xl" type="text" />
          <input className="rounded-xl" type="text" />

          <div>
            <button className="rounded-2xl bg-amber-300 text-white p-2">
              Create an Account
            </button>
            <button>
              Login
            </button>
          </div>
        </div>
      </div>
    </>)
}
