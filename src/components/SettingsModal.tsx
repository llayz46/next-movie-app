import {Dialog, DialogPanel, DialogBackdrop, Combobox, Switch} from '@headlessui/react'
import { useModal } from "@/src/context/ModalContext"
import {Settings} from "lucide-react";
import { useState } from "react";

export function SettingsModal() {
    const { isOpen, openModal, closeModal } = useModal()

    let theme = null
    if (typeof window !== 'undefined' && localStorage.getItem('theme') !== null) {
        theme = localStorage.getItem('theme')
    }

    const [enabled, setEnabled] = useState(theme)

    const handleSwitch = () => {
        return () => {
            setEnabled(enabled === 'dark' ? 'light' : 'dark')

            if (enabled === 'dark') {
                localStorage.setItem('theme', 'light')
                document.documentElement.classList.remove('dark')
            } else {
                localStorage.setItem('theme', 'dark')
                document.documentElement.classList.add('dark')
            }
        }
    }

    return (
        <>
            <Settings className="hover:text-neutral-700 dark:hover:text-neutral-200 cursor-pointer transition-colors" strokeWidth="1.5" size="32" onClick={() => openModal()} />

            <Dialog open={isOpen} onClose={() => closeModal()} className="relative z-50">
                <DialogBackdrop transition className="fixed inset-0 bg-gray-500/25 duration-200 ease-out data-[closed]:opacity-0" />

                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel transition className="max-w-2xl w-full rounded-lg shadow-2xl divide-y divide-gray-500/10 dark:divide-gray-300/10 ring-1 ring-slate-950/10 dark:ring-slate-50/10 backdrop-blur-xs backdrop-filter bg-background/80 dark:bg-neutral-900/80 duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0">
                        <Combobox>
                            <div className="relative py-4 px-2">
                                <div className="w-full flex justify-between items-center">
                                    <p className="text-neutral-900 dark:text-neutral-300">Changer le thème ({enabled})</p>
                                    <Switch
                                        checked={enabled === 'dark'}
                                        onChange={handleSwitch()}
                                        className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-neutral-900/10 dark:bg-neutral-600 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-neutral-900/50 data-[checked]:dark:bg-neutral-700/50"
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
                                        />
                                    </Switch>
                                </div>
                            </div>
                        </Combobox>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    )
}