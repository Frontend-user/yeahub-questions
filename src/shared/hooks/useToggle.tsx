import {useState} from "react";

export const useToggle = () => {
    const [isToggled, setIsToggled] = useState(false)

    const toggle = () => {
        setIsToggled(pr => !pr)
    }
    const setValue =( value:boolean)=>{
        setIsToggled(value)
    }
    return [
        isToggled,
        toggle,
        setValue
    ]
}