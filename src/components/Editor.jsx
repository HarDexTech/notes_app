import note from '../assets/images.jpg'
export default function Editor() {
  return (
    <section className="h-screen w-[calc(100%-300px)] flex items-center justify-center flex-col">
        <img src={note} alt="note"/>
        <h1 className="font-bold text-lg">Your canvas await</h1>
        <p>Click a note to view it or tap anywhere to create a new note</p>
    </section>
  );
}