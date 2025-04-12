import { useState} from "react";

type ReturnUseToggleTypes = [boolean, () => void, (value: boolean) => void]
export const useToggle = (): ReturnUseToggleTypes => {
    const [isToggled, setIsToggled] = useState(false)

    const toggle = (): void => {
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