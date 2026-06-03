import SideBar from "./components/SideBar";
import Editor from "./components/Editor";
import Modal from "./components/Modal";
import React, { useState } from "react";

export default function App() {
  const noteObj = localStorage.getItem("notesData") || [];

  const [userId, setUserId] = React.useState(localStorage.getItem("userName"));
  const [shakeButton, setShakeButton] = useState("");

  console.log(noteObj);

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
      <SideBar userId={userId} />
      <Editor />
    </div>
  );
}
