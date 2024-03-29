'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function SignUpForm() {
    const router = useRouter()

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');
        const name = formData.get('name');

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, name, password }),
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
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Name <span className="text-red-600">*</span></label>
                    <input id="name" type="text" name="name" className="form-input w-full text-gray-800" placeholder="Enter your name" required />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                    <input id="email" type="email" name="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Password <span className="text-red-600">*</span></label>
                    <input id="password" type="password" name="password" className="form-input w-full text-gray-800" placeholder="Enter your password" required />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                    <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Sign up</button>
                </div>
            </div>
            <div className="text-sm text-gray-500 text-center mt-3">
                By creating an account, you agree to the <a className="underline" href="#0">terms & conditions</a>, and our <a className="underline" href="#0">privacy policy</a>.
            </div>
        </form>
    )

}