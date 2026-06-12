export default function NoteButton(props) {
  const [hour, min] = new Date(props.note.dateLastUpdated)
    .toTimeString()
    .split(":");
  const dateString = new Date(props.note.dateLastUpdated).toDateString();
  return (
    <button
      type="button"
      onClick={() => props.onSelect(props.note.id)}
      className={`flex justify-between noteButton w-[calc(100%-20px)] text-left px-3 py-2 border hover:bg-[#f6f6ff] hover:border-[#3525cd] transition-all ease-in-out ${props.activeId == props.note.id ? "bg-[#e1e3e4]" : ""} rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5px] border border-white/40`}
    >
      <div className="flex flex-col">
        <span className="font-medium">{props.note.title}</span>
        <span className="text-xs text-[#1b2d30]">
          Last Updated:
          <p>{`${hour}:${min}, ${dateString}`}</p>
        </span>
      </div>
    </button>
  );
}
