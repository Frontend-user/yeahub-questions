import React, {useEffect, useRef, useState} from 'react';
import './SearchQuestions.scss'
import UiInput from "@/shared/ui/UiInput/UiInput.tsx";
import {useSearchParams} from "react-router-dom";

const SearchQuestions: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [searchInput, setSearchInput] = useState('')
    const timeout = useRef<ReturnType<typeof setTimeout> | null>(null)
    const defineQueryParams = (newValue: string) => {
        if (!newValue) {
            searchParams.delete('keywords')
            setSearchParams(searchParams)
            return
        }
        searchParams.set('keywords', newValue)
        setSearchParams(searchParams)
    }
    const handleInputChange = (newValue: string) => {
        setSearchInput(newValue)
        if (timeout.current) {
            clearTimeout(timeout.current)
        }
        timeout.current = setTimeout(() => {
            searchParams.set('page', '1')
            defineQueryParams(newValue)
        }, 500)
    }
    useEffect(() => {
        setSearchInput(searchParams.get('keywords') || '')
    },[]);

    return (
        <UiInput
            onHandleInputChange={handleInputChange} value={searchInput}
        />)
}

export default SearchQuestions;