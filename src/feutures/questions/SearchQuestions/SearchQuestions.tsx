import React, {useEffect, useRef, useState} from 'react';
import './SearchQuestions.scss'
import UiInput from "@/shared/ui/UiInput/UiInput.tsx";
import {useSearchParams} from "react-router-dom";

const SearchQuestions: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [searchInput, setSearchInput] = useState('')
    const timeout = useRef(null)
    const defineQueryParams = (newValue) => {
        if (!newValue) {
            searchParams.delete('keywords')
            setSearchParams(searchParams)
            return
        }
        searchParams.set('keywords', [newValue])
        setSearchParams(searchParams)
    }
    const handleInputChange = (newValue: string) => {
        setSearchInput(newValue)
        clearTimeout(timeout.current)
        timeout.current = setTimeout(() => {
            defineQueryParams(newValue)
        }, 500)
    }
    useEffect(() => {
        setSearchInput(searchParams.get('keywords') || '')
    }, []);

    return (
        <UiInput
            onHandleInputChange={handleInputChange} value={searchInput}
        />)
}

export default SearchQuestions;