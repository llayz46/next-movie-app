import { Dialog, DialogPanel, DialogBackdrop, Combobox, ComboboxInput } from '@headlessui/react'
import { useModal } from "@/src/context/ModalContext"
import { Search } from "lucide-react";
import { useState } from "react";

export function SearchModal() {
    const { isOpen, openModal, closeModal } = useModal()
    const [query, setQuery] = useState('')

    return (
        <>
            <Search className="hover:text-neutral-700 dark:hover:text-neutral-200 cursor-pointer transition-colors" strokeWidth="1.5" size="32" onClick={() => openModal()} />

            <Dialog open={isOpen} onClose={function() {
                closeModal();
                setQuery('');
            }} className="relative z-50">
                <DialogBackdrop transition className="fixed inset-0 bg-gray-500/25 dark:bg-gray-800/25 duration-200 ease-out data-[closed]:opacity-0" />

                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel transition className="max-w-2xl w-full rounded-lg shadow-2xl divide-y divide-gray-500/10 dark:divide-gray-300/10 ring-1 ring-slate-950/10 dark:ring-slate-50/10 backdrop-blur-xs backdrop-filter bg-background/80 dark:bg-neutral-900/80 duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0">
                        <Combobox
                            // onChange={(item) => (window.location = item.url)}
                        >
                            <div className="relative">
                                <Search
                                    size="20"
                                    className="pointer-events-none absolute left-4 top-3.5 text-gray-900/40 dark:text-white/50"
                                    aria-hidden="true"
                                />
                                <ComboboxInput
                                    className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 dark:text-white focus:ring-0 sm:text-sm focus-visible:outline-hidden"
                                    placeholder="Rechercher..."
                                    autoFocus={true}
                                    value={query}
                                    onChange={(event) => setQuery(event.target.value)}
                                />
                            </div>

                            <ul className="max-h-80 scroll-py-2 divide-y divide-gray-500/10 dark:divide-gray-300/10 overflow-y-auto">
                                <li className="p-2">
                                    <h2 className="mb-2 mt-2 px-3 text-xs font-semibold text-neutral-900 dark:text-neutral-300">Résultats</h2>
                                    <ul className="text-sm text-neutral-600 dark:text-neutral-400">
                                        <li className="flex select-none items-center rounded-md px-4 py-2">
                                            Sicario
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </Combobox>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    )
}
