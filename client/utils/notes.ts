import { cookies } from "next/headers";

export async function getNotes() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notes`, {
            headers: { Cookie: cookies().toString() },
        });

        if (!res.ok) {
            throw new Error('Failed to fetch notes');
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching notes:', error);
        throw error;
    }
}