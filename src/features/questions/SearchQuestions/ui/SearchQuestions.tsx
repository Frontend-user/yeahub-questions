import {useEffect, useState} from 'react';
import './SearchQuestions.scss'
import {useSearchParams} from "react-router-dom";
import UiSearchInput from "@/shared/ui/UiSearchInput/UiSearchInput.tsx";
import {useDebouncedCallback} from "@/shared/hooks/useDebouncedCallback.ts";

export const SearchQuestions = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [searchInput, setSearchInput] = useState('')

    const defineQueryKeywordsParam = (newValue: string) => {
        if (!newValue) {
            searchParams.delete('keywords')
        } else {
            searchParams.set('keywords', newValue)
        }
        setSearchParams(searchParams)
    }

    const debouncedDefineQueryKeywordsParam = useDebouncedCallback(defineQueryKeywordsParam, 700)

    const handleInputChange = (newValue: string) => {
        searchParams.set('page', '1')
        setSearchInput(newValue)
        debouncedDefineQueryKeywordsParam(newValue)
    }

    useEffect(() => {
        setSearchInput(searchParams.get('keywords') || '')
    }, []);

    return (
        <UiSearchInput
            onChange={handleInputChange} value={searchInput}
        />)
}