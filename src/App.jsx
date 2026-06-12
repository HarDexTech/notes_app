import SideBar from "./components/SideBar";
import Editor from "./components/Editor";
import Modal from "./components/Modal";
import { useState, useEffect } from "react";

export default function App() {
  const [noteObj, setNoteObj] = useState(
    () => JSON.parse(localStorage.getItem("notesData")) ?? [],
  );
  const [activeNoteId, setActiveNoteId] = useState(null);
  const [userId, setUserId] = useState(localStorage.getItem("userName"));
  const [shakeButton, setShakeButton] = useState("");
  const [searchText, setSearchText] = useState("");
  const [menuStatus, setMenuStatus] = useState(false)

  function onSelect(id) {
    setActiveNoteId(id);
    setMenuStatus(false);
  }

  function changeMenuStatus (event) {
    event.stopPropagation();
    setMenuStatus(prev => !prev)
  }

  function updateSearchText(value) {
    setSearchText(value);
  }

  function updateNoteTitle(id, newTitle) {
    setNoteObj((prev) =>
      prev.map((note) => {
        if (note.id === id) {
          return { ...note, title: newTitle, dateLastUpdated: Date.now() };
        }
        return note;
      }),
    );
  }

  function updateNoteContent(id, newContent) {
    setNoteObj((prevObj) =>
      prevObj.map((item) => {
        if (item.id === id) {
          return { ...item, content: newContent, dateLastUpdated: Date.now() };
        }
        return item;
      }),
    );
  }

  function createNote() {
    let currNoteObj = {
      title: "Untitled Document",
      content: "",
      id: crypto.randomUUID(),
      dateLastUpdated: Date.now(),
    };
    setNoteObj((prev) => [...prev, currNoteObj]);
    setActiveNoteId(currNoteObj.id);
    setMenuStatus(false);
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

  function deleteNote() {
    let updatedNoteObj = noteObj.filter(
      (sibling) => sibling.id !== activeNoteId,
    );
    setActiveNoteId(null);
    setNoteObj(updatedNoteObj);
  }

  return (
    <div className="flex">
      {userId ? null : (
        <Modal onclick={handleModalSubmit} shakeButton={shakeButton} />
      )}
      <SideBar
        userId={userId}
        activeNoteId={activeNoteId}
        createNewNote={createNote}
        noteObj={noteObj}
        onSelect={onSelect}
        searchText={searchText}
        updateSearchText={updateSearchText}
        menuStatus={menuStatus}
      />
      <Editor
        noteObj={noteObj}
        changeMenuStatus={changeMenuStatus}
        createNewNote={createNote}
        activeNoteId={activeNoteId}
        changeTitle={updateNoteTitle}
        changeContent={updateNoteContent}
        menuStatus={menuStatus}
        handleDel={deleteNote}
      />
    </div>
  );
}
