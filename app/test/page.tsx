import Image from "next/image";
import previewImage from "@/public/sicario_large.jpeg";
import {Card} from "@/src/components/Card";

export default function Test() {
    return (
        <>
            <Image src={previewImage} alt="Image preview" className="w-full lg:h-3/5 object-cover rounded-lg border border-slate-950/10 dark:border-slate-50/20" />

            <div className="mt-4 md:mt-8 mx-auto max-w-6xl flex max-sm:flex-col lg:items-center gap-6">
                <div className="shrink-0 hidden md:block">
                    <Card variant="small" />
                </div>

                <div className="flex flex-col gap-3 shrink">
                    <h1 className="font-medium text-2xl text-neutral-900 dark:text-white">Sicario : Synopsis</h1>
                    <div className="text-neutral-500 text-base dark:text-neutral-300">La zone frontalière entre les États‐Unis et le Mexique est devenue un territoire de non‐droit. Kate, une jeune recrue idéaliste du FBI, y est enrôlée pour aider un groupe d’intervention d’élite dirigé par un agent du gouvernement dans la lutte contre le trafic de drogues. Menée par un consultant énigmatique l’équipe se lance dans un périple clandestin, obligeant Kate à remettre en question ses convictions pour pouvoir survivre.</div>

                    <div className="max-w-fit grid grid-rows-[max-content_max-content_max-content_max-content] grid-cols-[auto_auto] lg:grid-cols-[auto_auto_auto_auto] gap-3 items-center text-sm text-neutral-500 dark:text-neutral-300">
                        <p>Note</p>
                        <p>7.4</p>
                        <p className="lg:ml-8">Durée</p>
                        <p>2h 2min</p>

                        <p>Date de sortie</p>
                        <p>17/09/2015</p>
                        <p className="lg:ml-8">Status</p>
                        <p>Publié</p>

                        <p>Budget</p>
                        <p>30 000 000 €</p>
                        <p className="lg:ml-8">Revenus</p>
                        <p>84 997 446 €</p>

                        <p>Genre</p>
                        <div className="flex gap-1 flex-wrap">
                            <span
                                className="px-1 py-0.5 bg-neutral-500 dark:bg-neutral-700 text-xs text-slate-200 dark:text-neutral-300 rounded-sm w-fit">Action</span>
                            <span
                                className="px-1 py-0.5 bg-neutral-500 dark:bg-neutral-700 text-xs text-slate-200 dark:text-neutral-300 rounded-sm w-fit">Crime</span>
                            <span
                                className="px-1 py-0.5 bg-neutral-500 dark:bg-neutral-700 text-xs text-slate-200 dark:text-neutral-300 rounded-sm w-fit">Thriller</span>
                        </div>
                        <p className="lg:ml-8">Production</p>
                        <p>Thunder Road, Black Label Media, Lions Gate, Redrum</p>
                    </div>
                </div>
            </div>
        </>
    )
}