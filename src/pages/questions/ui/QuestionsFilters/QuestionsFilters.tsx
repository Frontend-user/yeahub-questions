import React from 'react';
import './QuestionsFilters.scss'
import SearchQuestions from "@/feutures/questions/SearchQuestions/SearchQuestions.tsx";
import UiSelect from "@/shared/ui/UiSelect/UiSelect.tsx";

const QuestionsFilters: React.FC = () => {
    const list = [
        {
            label: "HTML",
            icon: "https://e5e684b1-4a6a-4be5-b7ee-b2b678239d61.selstorage.ru/skill/737ff168-822a-4aa5-b53a-85dbef99a63b"
        },
        {
            label: "Javascript",
            icon: "https://e5e684b1-4a6a-4be5-b7ee-b2b678239d61.selstorage.ru/skill/737ff168-822a-4aa5-b53a-85dbef99a63b"
        },
        {
            label: "Webpack",
            icon: "https://e5e684b1-4a6a-4be5-b7ee-b2b678239d61.selstorage.ru/skill/737ff168-822a-4aa5-b53a-85dbef99a63b"
        },
        {
            label: "HTML2",
            icon: "https://e5e684b1-4a6a-4be5-b7ee-b2b678239d61.selstorage.ru/skill/737ff168-822a-4aa5-b53a-85dbef99a63b"
        },
        {
            label: "Javascri3pt",
            icon: "https://e5e684b1-4a6a-4be5-b7ee-b2b678239d61.selstorage.ru/skill/737ff168-822a-4aa5-b53a-85dbef99a63b"
        },
        {
            label: "Webpa4ck",
            icon: "https://e5e2684b1-4a6a-4be5-b7ee-b2b678239d61.selstorage.ru/skill/737ff168-822a-4aa5-b53a-85dbef99a63b"
        },
        {
            label: "HTML4",
            icon: "https://e5e684b1-4a6a-4be5-b7ee-b2b678239d61.selstorage.ru/skill/737ff168-822a-4aa5-b53a-85dbef99a63b"
        },
        {
            label: " fdafsdadfsasfd",
            icon: "https://e52e684b1-4a6a-4be5-b7ee-b2b678239d61.selstorage.ru/skill/737ff168-822a-4aa5-b53a-85dbef99a63b"
        },
        {
            label: "Webpa44ck",
            icon: "https://e5e684b1-4a6a-4be5-b7ee-b2b678239d61.selstorage.ru/skill/737ff168-822a-4aa5-b53a-85dbef99a63b"
        },
    ]
    return (
        <div className="questions-filters">
            <div className="questions-filters__inner">
                <SearchQuestions/>
                <UiSelect title="Навыки" list={list} />
            </div>
        </div>
    );
};

export default QuestionsFilters;