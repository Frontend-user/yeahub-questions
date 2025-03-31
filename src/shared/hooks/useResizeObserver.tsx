import {useEffect, useState} from "react";

export const useResizeObserver = (ref) => {
    const [height, setHeight] = useState(0)
    useEffect(() => {
        const cb = (items) => {
            if (items.length) {
                setHeight(items[0].contentRect.height)
            }
        }
        const observer = new ResizeObserver(cb)
        observer.observe(ref.current)
        return () => {
            observer.disconnect()
        }
    }, []);

    return {height}
}