import SideBar from "./components/SideBar";
import Editor from "./components/Editor";
import Modal from "./components/Modal";
import { useState, useEffect } from "react";

export default function App() {
  // localStorage.clear()
  const [noteObj, setNoteObj] = useState(
    () => JSON.parse(localStorage.getItem("notesData")) ?? [],
  );
  const [activeNoteId, setActiveNoteId] = useState(null);
  const [userId, setUserId] = useState(localStorage.getItem("userName"));
  const [shakeButton, setShakeButton] = useState("");

  function createNote() {
    let currNoteObj = {
      title: "Untitled Document",
      content: "",
      id: crypto.randomUUID(),
      dateLastUpdated: Date.now(),
    };
    setNoteObj((prev) => [...prev, currNoteObj]);
    setActiveNoteId(currNoteObj.id);
  }
  useEffect(() => {
    localStorage.setItem("notesData", JSON.stringify(noteObj));
  }, [noteObj]);

  function handleModalSubmit(event) {
    if (event.get("userName").trim() === "") {
      setShakeButton("shake");
      setTimeout(() => {
        setShakeButton("");
      }, 500);
    } else {
      const capitalizedName =
        event.get("userName").at(0).toUpperCase() +
        event
          .get("userName")
          .slice(1, event.get("userName").length)
          .toLowerCase();
      localStorage.setItem("userName", capitalizedName);
      setUserId(capitalizedName);
    }
  }

  return (
    <div className="flex">
      {userId ? null : (
        <Modal onclick={handleModalSubmit} shakeButton={shakeButton} />
      )}
      <SideBar userId={userId} createNewNote={createNote} noteObj={noteObj}/>
      <Editor noteObj={noteObj} activeNoteId={activeNoteId} />
    </div>
  );
}
