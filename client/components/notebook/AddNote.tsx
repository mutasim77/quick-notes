'use client'

import { Dialog, Transition, Combobox } from '@headlessui/react'
import { useRouter } from 'next/navigation';
import { FormEvent, Fragment, useState } from 'react'

export default function AddNote() {
    const router = useRouter();
    let [isOpen, setIsOpen] = useState<boolean>(false);

    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);

    async function addNote(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const title = formData.get('title');
        const text = formData.get('text');
        const tags = formData.get('tags');

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/note`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ title, text, tags }),
            })

            if (!res.ok) {
                throw new Error('Failed to delete note');
            }

            closeModal();
            router.refresh();
        } catch (error) {
            throw new Error(`Error deleting note: ${error}`);
        }
    }

    return (
        <div>
            <button
                onClick={openModal}
                className="rounded-lg px-5 py-2 bg-blue-500 text-white font-semibold"
            >
                Add Note
            </button>

            <Modal
                isOpen={isOpen}
                closeModal={closeModal}
                handleSubmit={addNote}
            />
        </div>
    )
}

const Modal = ({
    isOpen,
    closeModal,
    handleSubmit,
}: {
    isOpen: boolean,
    closeModal: () => void
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void
}) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-7 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-xl font-semibold leading-6 mb-2 text-gray-900"
                                >
                                    Add New Note 📜
                                </Dialog.Title>
                                <div className="my-4">
                                    Heyy! Let's add a new note to your collection 🪄
                                </div>
                                <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-5">
                                    <Combobox>
                                        <Combobox.Input name="title" placeholder="Enter your title" className="rounded-lg" />
                                        <Combobox.Input name="text" placeholder="Enter your text" className="rounded-lg h-[100px] text-start" />
                                        <Combobox.Input name="tags" placeholder="Enter tags (e.g. aws,code)" className="rounded-lg" />
                                        <Combobox.Input className="hidden" />
                                    </Combobox>
                                    <div className="mt-4">
                                        <button type="submit" className="rounded-lg px-5 py-2 bg-blue-500 text-white font-semibold">
                                            Submit Note
                                        </button>
                                    </div>
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
