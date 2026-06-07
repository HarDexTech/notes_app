export default function NoteButton(props) {
  const [hour, min] = new Date(props.note.dateLastUpdated)
    .toTimeString()
    .split(":");
  const dateString = new Date(props.note.dateLastUpdated).toDateString();
  return (
    <button
      type="button"
      onClick={() => props.onSelect(props.note.id)}
      className="flex justify-between noteButton w-[calc(100%-20px)] text-left px-3 py-2 rounded-md border border-[#d9dadb] hover:bg-[#f6f6ff] hover:border-[#3525cd] transition-all ease-in-out"
    >
      <div className="flex flex-col">
        <span className="font-medium">{props.note.title}</span>
        <span className="text-xs text-gray-400">
          Last Updated:
          <p>{`${hour}:${min}, ${dateString}`}</p>
        </span>
      </div>
    </button>
  );
}
