export default function Modal(props) {
  return (
    <section
      className={`modal animate-modal-overlay h-screen w-full flex items-center justify-center fixed z-100 bg-[#111518]/60`}
    >
      <div className="h-fit w-[80vw] sm:w-100 bg-white shadow rounded-2xl flex flex-col items-center pb-20 pt-10 px-5 justify-around gap-5 animate-modal-panel">
        <div className="flex flex-col items-center">
          <span className="bg-[#d9dadb] p-5 rounded-[50%] animate-modal-icon">
            <i className="fa-regular fa-file text-[#3525cd] text-2xl"></i>
          </span>
          <h1 className="font-bold text-center text-xl animate-modal-copy">
            Welcome to ZenNote. <br /> Let's personalize your workspace.
          </h1>
        </div>

        <form
          action={props.onclick}
          className="flex flex-col justify-center animate-modal-form w-[calc(100%-20px)]"
        >
          <label
            htmlFor="userName"
            className="text-[12px] font-bold animate-modal-copy"
          >
            {" "}
            Name:
          </label>
          <input
            type="text"
            id="userName"
            placeholder="Alice"
            name="userName"
            className="animate-modal-input border rounded-sm px-3 py-2 border-[#3525cd]"
          />
          <button
            type="submit"
            className={`submitUserNameBtn text-white mt-3 bg-[#3525cd] rounded py-2 cursor-pointer hover:scale-101 active:scale-95 transition-all ease-in-out ${props.shakeButton}`}
          >
            Get Started
          </button>
        </form>
      </div>
    </section>
  );
}
