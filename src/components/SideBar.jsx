// import React from "react";

export default function SideBar(props) {
  return (
    <aside className="sm:w-75 w-[50%] overflow-hidden border-r-2 border-[#3525cd] h-screen flex flex-col gap-5 shadow-lg">
      <div className="ml-2">
        <h1 className="text-[#3525cd] text-[24px] font-bold tracking-tight">
          ZenNote
        </h1>
        <p className="text-md tracking-tight font-bold text-lg">
          Welcome, {props.userId ?? "User"}!
        </p>
      </div>

      <div className="flex justify-center ml-2">
        <form action="" className="flex flex-col w-full">
          <div className="flex flex-col w-full">
            <label htmlFor="searchNote" className="ml-1">
              <i className="fa fa-search"></i>
            </label>
            <input
              id="searchNote"
              type="text"
              placeholder="Search notes..."
              className="relative -top-8 border border-[#d9dadb] py-2 w-[calc(100%-20px)] px-6 rounded-[5px]"
            />
          </div>
          <button
            type="button"
            className="bg-[#3525cd] w-[calc(100%-20px)] rounded-[5px] py-2 cursor-pointer hover:scale-101 active:scale-95 transition-all ease-in-out text-white"
          >
            + New Note
          </button>
        </form>
      </div>

      <span className="ml-2 border-b border-[#d9dadb] w-[calc(100%-20px)] font-bold">
        Notes
      </span>
      {/* show all note file and a 'oops, no files found' message when nothing is displayed */}
      <div className="noteContainer ml-2 pr-2 flex flex-col gap-2 h-fit overflow-auto pb-5">
        No, notes found!
      </div>
    </aside>
  );
}
//note button in side bar
//className="w-[calc(100%-20px)] text-left px-3 py-2 rounded-md border border-[#d9dadb] hover:bg-[#f6f6ff] hover:border-[#3525cd] transition-all ease-in-out"