import note from "../assets/images.jpg";
export default function Editor(props) {
  const childNoteObj = props.noteObj.find(
    (char) => char.id === props.activeNoteId,
  );

  return (
    <section className="py-5 px-3 h-screen editor flex flex-1 min-w-0 w-full items-center justify-center flex-col">
      <button
        type="button"
        className={`menuToggleButton md:hidden ${props.menuStatus ? "menuToggleButton--anchored" : ""}`}
        onClick={props.changeMenuStatus}
      >
        <i className="fa-solid fa-bars text-blue-500 text-[20px] font-bold"></i>
      </button>
      {/* show msg for new screen */}
      {!props.activeNoteId ? (
        <div
          className="flex items-center flex-col h-screen w-full justify-center"
          onClick={props.createNewNote}
        >
          <img
            src={note}
            alt="note"
            className="pointer-events-none select-none"
          />
          <h1 className="font-bold text-lg">Your canvas await</h1>
          <p>Click a note to view it or tap anywhere to create a new note</p>
        </div>
      ) : (
        <form action="" className="w-full h-full">
          <div className="flex gap-2 w-full justify-end">
            {/* delete button */}
            <button
              type="button"
              onClick={props.handleDel}
              className="py-4 px-5 rounded bg-blue-500 text-white"
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="title"
              className="font-bold tracking-wide text-[13px]"
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="border rounded p-3 text-[24px] font-bold max-w-200"
              value={childNoteObj.title}
              onChange={(e) =>
                props.changeTitle(props.activeNoteId, e.target.value)
              }
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="content"
              className="font-bold tracking-wide text-[13px]"
            >
              Content:
            </label>
            <textarea
              name="content"
              id="content"
              className="border rounded p-3 h-[70vh]"
              value={childNoteObj.content}
              onChange={(e) =>
                props.changeContent(props.activeNoteId, e.target.value)
              }
            ></textarea>
          </div>
        </form>
      )}
    </section>
  );
}
