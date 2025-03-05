'use client'

import { House, Film, Tv } from 'lucide-react';
import { ModalProvider } from "@/src/context/ModalContext"
import { SearchModal } from "@/src/components/SearchModal";
import { SettingsModal } from "@/src/components/SettingsModal";
import Link from "next/link";

export function Sidebar() {
    return (
        <aside className="px-2 md:px-4 py-6 md:py-8">
            <nav className="h-full flex flex-col justify-between text-neutral-500 dark:text-neutral-300">
                <div className="space-y-8">
                    <Link href="/">
                        <House className="mb-8 hover:text-neutral-700 dark:hover:text-neutral-200 cursor-pointer transition-colors" strokeWidth="1.5" size="32" />
                    </Link>

                    <Film strokeWidth="1.5" size="32" />
                    <Tv strokeWidth="1.5" size="32" />

                    <ModalProvider>
                        <SearchModal></SearchModal>
                    </ModalProvider>
                </div>

                <ModalProvider>
                    <SettingsModal></SettingsModal>
                </ModalProvider>
            </nav>
        </aside>
    )
}