'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function SignInForm() {
    const router = useRouter()

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ email, password }),
        })

        if (response.ok) {
            router.push('/notes');
        } else {
            console.log(response);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Password</label>
                    <input id="password" type="password" name="password" className="form-input w-full text-gray-800" placeholder="Enter your password" required />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                    <div className="flex justify-between items-center">
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="text-gray-600 ml-2">Keep me signed in</span>
                        </label>
                        <Link href="/reset-password" className="text-sm font-medium text-blue-600 hover:underline">Forgot Password?</Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                    <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Sign in</button>
                </div>
            </div>
        </form>
    )

}