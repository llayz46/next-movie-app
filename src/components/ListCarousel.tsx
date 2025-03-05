'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ListDotButton, useDotButton } from '@/src/components/ListDotButton'

export function ListCarousel({ children }: Readonly<{ children: React.ReactNode }>) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', slidesToScroll: 'auto' })

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    return (
        <div className="overflow-hidden w-full">
            <div ref={emblaRef}>
                <div className="flex gap-3 *:min-w-0 *:flex-[0_0_100%]">
                    {children}
                </div>
            </div>

            <div className="w-full flex justify-center gap-1.5 mt-3">
                {scrollSnaps.map((_, index) => (
                    <ListDotButton
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        className={'h-[3px] w-3 rounded-full'.concat(
                            index === selectedIndex ? ' bg-neutral-500 dark:bg-neutral-300' : ' bg-neutral-300 dark:bg-neutral-600'
                        )}
                    />
                ))}
            </div>
        </div>
    )
}