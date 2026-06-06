import note from "../assets/images.jpg";
export default function Editor(props) {
  let childNoteObj = props.noteObj.find(x => x.id === props.activeNoteId);
  console.log(childNoteObj);
  return (
    <section className="pt-5 pl-3 h-screen w-[calc(100%-300px)] flex items-center justify-center flex-col">
      {/* show msg for new screen */}
      {!props.activeNoteId ? (
        <div className="flex items-center flex-col">
          <img src={note} alt="note" className="pointer-events-none select-none"/>
          <h1 className="font-bold text-lg">Your canvas await</h1>
          <p>Click a note to view it or tap anywhere to create a new note</p>
        </div>
      ) : (
        <form action="" className="w-full h-full">
          <div className="flex gap-2 w-full justify-end">
            <button
              type="button"
              className="py-4 px-5 rounded bg-blue-500 text-white"
            >
              <i className="fa-regular fa-floppy-disk"></i>
            </button>
            <button
              type="button"
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
            ></textarea>
          </div>
        </form>
      )}
    </section>
  );
}
