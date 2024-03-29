'use client'

import { FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function DeleteNote({ noteID }: { noteID: number }) {
    const router = useRouter();

    async function deleteNote(noteID: number) {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/note/${noteID}`, {
                method: 'DELETE',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!res.ok) {
                throw new Error('Failed to delete note');
            }
            router.refresh();
        } catch (error) {
            throw new Error(`Error deleting note: ${error}`);
        }
    }

    return (
        <FaTrash
            onClick={() => deleteNote(noteID)}
            className="text-red-500 cursor-pointer text-xl"
        />
    )
}