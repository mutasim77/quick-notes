import AddNote from "@/components/notebook/AddNote";
import DeleteNote from "@/components/notebook/DeleteNote";
import { getNotes } from "@/utils/notes";

interface INotes {
    id: number;
    title: string;
    text: string;
    tags: string;
    CreatedAt: string;
}

export default async function Notes() {
    const notes = await getNotes();

    return (
        <section className="container m-auto max-w-screen-lg p-4 border border-[#ccc] shadow-lg rounded-lg mt-36">
            <div className="flex justify-between items-center">
                <h1 className="text-5xl font-bold text-black py-6">Quick<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Notes</span></h1>
                <AddNote />
            </div>
            <div>
                <div className="flex space-x-4 mb-6">
                    <input type="text" placeholder="Type to search..." className="bg-gray-100 w-full rounded-lg" />
                    <button className="rounded-lg px-5 py-1 bg-black text-green-50">Filter</button>
                </div>
            </div>
            <div className="lg:grid grid-cols-3 gap-6 space-y-8 lg:space-y-0">
                {notes.map((note: INotes) => (
                    <Note key={note.id} {...note} />
                ))}
            </div>
        </section>
    )
}

function Note({
    id,
    title,
    text,
    tags,
    CreatedAt
}: INotes
) {
    const randomColor = ['bg-red-100', 'bg-green-100', 'bg-blue-100', 'bg-pink-200', 'bg-yellow-200', 'bg-indigo-200', 'bg-purple-200', 'bg-teal-200', 'bg-orange-200', 'bg-cyan-200', 'bg-lime-200', 'bg-amber-200',]
    const randomBgColor = randomColor[Math.floor(Math.random() * randomColor.length)];

    return (
        <div className={`min-h-[150px] flex flex-col justify-between ${randomBgColor} border border-green-700 rounded-lg shadow-lg`}>
            <div className="p-4 flex items-center justify-between relative border-b border-green-700">
                <h3 className="font-bold text-green-900">{title}</h3>
                <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
            </div>
            <div className="p-4 flex-grow flex-col">
                <p className="mb-3 text-green-800">{text}</p>
                <div className="flex flex-wrap">
                    {tags.split(',').map((tag, index) => (
                        <div key={index} className="bg-green-600 text-green-50 py-1 px-2 mr-1 mb-2 rounded-lg">
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-between p-4 note-footer">
                <small className="text-black font-semibold">{CreatedAt.split('T')[0]}</small>
                <DeleteNote noteID={id} />
            </div>
        </div>
    )
}