import {ListPagination} from "@/src/components/ListPagination";

export function ListSection({ title, children }: Readonly<{ title: string, children: React.ReactNode }>) {
    return (
        <section className="space-y-3">
            <div className="overflow-scroll flex justify-between items-center">
                <h2 className="text-2xl text-neutral-900 dark:text-white">{title}</h2>
                <p className="text-base text-neutral-500 dark:text-neutral-300">Voir plus</p>
            </div>

            <div className="flex gap-3">
                {children}
            </div>

            <ListPagination />
        </section>
    )
}