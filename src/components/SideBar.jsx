import React, { useEffect } from "react";
import NoteButton from "./NoteButton";

export default function SideBar(props) {
  let noteObj = [...props.noteObj].sort(
    (a, b) => b.dateLastUpdated - a.dateLastUpdated,
  );

  //set filtered to note data structure when searchtext is not empty and when it is return original data
  let filteredNotes =
    props.searchText.trim() !== ""
      ? noteObj.filter((item) => item.title.includes(props.searchText))
      : noteObj;
  
  // map over filtered notes
  let notesArray = filteredNotes.map((item) => {
    return <NoteButton key={item.id} note={item} onSelect={props.onSelect} />;
  });
  return (
    <aside className="w-fit overflow-hidden border-r-2 border-blue-500 h-screen flex flex-col gap-5 shadow-lg z-10 bg-white">
      <div className="ml-2">
        <h1 className="text-blue-500 text-[24px] font-bold tracking-tight">
          ZenNote
        </h1>
        <p className="text-md tracking-tight font-bold text-lg">
          Welcome, {props.userId ?? "User"}!
        </p>
      </div>

      <div className="flex justify-center ml-2">
        <form action="" className="flex flex-col w-full">
          <div className="flex flex-col w-full">
            {/* search notes */}
            <label htmlFor="searchNote" className="ml-1">
              <i className="fa fa-search"></i>
            </label>
            <input
              id="searchNote"
              type="text"
              value={props.searchText}
              onChange={(e) => props.updateSearchText(e.target.value)}
              placeholder="Search notes..."
              className="relative -top-8 border border-[#d9dadb] py-2 w-[calc(100%-20px)] px-6 rounded-[5px]"
            />
          </div>
          {/* create new note */}
          <button
            type="button"
            onClick={props.createNewNote}
            className="bg-blue-500 w-[calc(100%-20px)] rounded-[5px] py-2 cursor-pointer hover:scale-101 active:scale-95 transition-all ease-in-out text-white"
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
        {props.noteObj.length === 0 && "No notes found!"}
        {notesArray}
      </div>
    </aside>
  );
}
