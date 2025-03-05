import Image from 'next/image';
import previewImage from '@/public/sicario.jpg';
import { Star } from 'lucide-react';
import Link from "next/link";

export function Card({ variant = "large" }: { variant: 'small' | 'large' }) {
    return (
        <div className="max-w-64">
            <div className="group bg-slate-950/5 dark:bg-slate-50/15 rounded-md border border-slate-950/10 dark:border-slate-50/20 p-0.5 w-fit shadow-md">
                { variant === 'large' && (
                    <Link href="/test" className="flex">
                        <Image src={previewImage} alt="Image preview" className="group-hover:opacity-85 w-full object-cover rounded-sm border border-slate-950/10 dark:border-slate-50/20 transition-all" />
                    </Link>
                )
                }

                { variant === 'small' && (
                    <Image src={previewImage} alt="Image preview" className="w-full object-cover rounded-sm border border-slate-950/10 dark:border-slate-50/20" />
                )
                }
            </div>

            { variant === 'large' && (
                <div className="mt-2">
                    <h3 className="text-base text-neutral-900 dark:text-neutral-300">Sicario</h3>

                    <div className="flex justify-between items-center text-sm text-neutral-600 dark:text-neutral-400">
                        <div className="flex gap-1 items-center">
                            <Star size="16" strokeWidth="0" className="fill-yellow-400" />
                            9.6
                        </div>

                        <time dateTime="2015">2015</time>
                    </div>
                </div>
                )
            }
        </div>
    )
}