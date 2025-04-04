import {MouseEventHandler, useState} from "react";

type ReturnUseToggleTypes = [boolean, MouseEventHandler<HTMLDivElement> | undefined, (value: boolean) => void]
export const useToggle = (): ReturnUseToggleTypes => {
    const [isToggled, setIsToggled] = useState(false)

    const toggle: MouseEventHandler<HTMLDivElement> | undefined = () => {
        setIsToggled(pr => !pr)
    }
    const setValue = (value: boolean) => {
        setIsToggled(value)
    }
    return [
        isToggled,
        toggle,
        setValue
    ]
}