'use client';
import { createContext, createRef, ReactNode, RefObject, useCallback, useContext, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react"
import { uniqueId } from 'lodash';

type Props = {
    children: ReactNode,
    gap?: number,
    ref: RefObject<CarouselRef | null>
}

export type CarouselRef = {
    next: () => void,
    prev: () => void
}

const Carousel = ({ children, gap = 0, ref }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const [activeId, setActiveId] = useState<string | null>(null);
    const [elements, setElements] = useState<{ id: string, width: number }[]>([]);
    const [startScrollPos, setStartScrollPos] = useState(0);

    const next = () => {
        if (containerRef.current === null || trackRef.current === null) return;

        if ((containerRef.current.scrollLeft + containerRef.current.clientWidth) >= trackRef.current.clientWidth) {
            containerRef.current.scroll({ "left": 0, behavior: "smooth" })
            setActiveId(elements[0].id);
            return;
        }

        const currentActiveId = activeId || elements[0].id;
        const currentIdx = elements.findIndex(el => el.id === currentActiveId);
        const nextIdx = currentIdx > elements.length - 2 ? 0 : currentIdx + 1;
        const scrollDistance = elements.slice(0, nextIdx).map(el => el.width).reduce((prev, next, idx, arr) => (next + (idx > arr.length - 1 ? 0 : gap)) + prev, 0);

        containerRef.current.scroll({ "left": scrollDistance, behavior: "smooth" })
        setActiveId(elements[nextIdx].id);

    }

    const prev = () => {
        if (containerRef.current === null || trackRef.current === null) return;

        if ((containerRef.current.scrollLeft + containerRef.current.clientWidth) >= trackRef.current.clientWidth) {
            let elemsWidth = 0;
            const prevEl = [...elements].reverse().find(el => {
                elemsWidth = elemsWidth + (el.width + gap);

                if (elemsWidth > containerRef.current!.clientWidth) {
                    return true;
                }
                return false;
            })

            const prevIdx = elements.findIndex(el => el.id === prevEl?.id);
            const scrollDistance = elements.slice(0, prevIdx).map(el => el.width).reduce((prev, next, idx, arr) => (next + (idx > arr.length - 1 ? 0 : gap)) + prev, 0);

            containerRef.current.scroll({ "left": scrollDistance, behavior: "smooth" })
            setActiveId(elements[prevIdx].id);

            return;
        }

        const currentActiveId = activeId || elements[0].id;
        const currentIdx = elements.findIndex(el => el.id === currentActiveId);
        const prevIdx = currentIdx < 1 ? elements.length - 1 : currentIdx - 1;
        const scrollDistance = elements.slice(0, prevIdx).map(el => el.width).reduce((prev, next, idx, arr) => (next + (idx > arr.length - 1 ? 0 : gap)) + prev, 0);

        containerRef.current.scroll({ "left": scrollDistance, behavior: "smooth" })
        setActiveId(elements[prevIdx].id);
    }

    useImperativeHandle(ref, () => ({
        next,
        prev
    }))



    const addElement = useCallback((width: number) => {
        const id = uniqueId();
        setElements(elements => [...elements, { id, width }])
        return id;

    }, [setElements]);


    const removeElement = useCallback((id: string) => {
        setElements(elements => {
            const idx = elements.findIndex(el => el.id === id);
            if (idx === -1) return elements;

            return [...elements.slice(0, idx), ...elements.slice(idx + 1)]
        })

    }, [setElements]);

    const contextValue = useMemo(() => ({ addElement, removeElement }), [addElement, removeElement])
    const elemWidth = elements.map(el => el.width).reduce((prev, next) => prev + next, 0);
    const containerWidth = gap * (elements.length - 1) + elemWidth;

    const onScrollEnd = () => {
        if (containerRef.current === null) return;

        if ((containerRef.current.scrollLeft + containerRef.current.clientWidth) >= trackRef.current!.clientWidth) {
            
            return;
        }

        let elemsWidth = 0;
        const prevEl = elements.find(el => {
            const widthWithHalfOfNewEl = elemsWidth + ((el.width + gap) / 2)

            if (widthWithHalfOfNewEl > containerRef.current!.scrollLeft) {
                return true;
            }

            elemsWidth = elemsWidth + (el.width + gap);
            return false;
        })

        const prevIdx = elements.findIndex(el => el.id === prevEl?.id);
        const scrollDistance = elements.slice(0, prevIdx).map(el => el.width).reduce((prev, next, idx, arr) => (next + (idx > arr.length - 1 ? 0 : gap)) + prev, 0);

        containerRef.current.scroll({ "left": scrollDistance, behavior: "smooth" })
        setActiveId(elements[prevIdx].id);
    }

    return (
        <Context.Provider value={contextValue}>
            <div ref={containerRef} onScrollEnd={onScrollEnd} className="overflow-x-scroll no-scrollbar" >
                <div ref={trackRef} style={{ width: containerWidth, gap }} className="flex transition-all" >
                    {children}
                </div>
            </div>
        </Context.Provider>
    )
}

export default Carousel;


type CarouselContext = {
    addElement: (width: number) => string,
    removeElement: (id: string) => void
}

const Context = createContext<CarouselContext | null>(null)


type CarouselElementProps = {
    children: ReactNode
}

export const CarouselElement = ({ children }: CarouselElementProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const context = useContext(Context);

    useEffect(() => {
        if (context === null || ref.current === null)
            return;

        const id = context.addElement(ref.current.clientWidth)

        return () => context.removeElement(id)
    }, [context, ref])

    return <div ref={ref} >{children}</div>
}