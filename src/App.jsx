import SideBar from "./components/SideBar";
import Editor from "./components/Editor";
import Modal from "./components/Modal";
import React from "react";

export default function App() {
  const [showModal, setShowModal] = React.useState(true);
  const [userId, setUserId] = React.useState(localStorage.getItem("userName"));
  // const [data, setData] = React.useState(localStorage.getItem('data') || localStorage.setItem('data'))


  function handleModalSubmit(event) {
    if (event.get("userName").trim() === "") {
      document.querySelector(".submitUserNameBtn").classList.add("shake");
      setTimeout(() => {
        document.querySelector(".submitUserNameBtn").classList.remove("shake");
      }, 500);
    } else {
      localStorage.setItem("userName", event.get("userName").toUpperCase());
      setShowModal(false);
      setUserId(event.get("userName").toUpperCase());
    }
  }


  return (
    <div className="flex">
      {userId ? null : (
        <Modal onclick={handleModalSubmit} showModal={showModal} />
      )}
      <SideBar userId={userId} />
      <Editor />
    </div>
  );
}
