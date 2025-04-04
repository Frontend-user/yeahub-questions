import {FetchBaseQueryError} from "@reduxjs/toolkit/query";

interface IQueryError {
    statusCode: number;
    message: string;
}

interface NotFoundQuestionsProps {
    isQuestionsError: FetchBaseQueryError
}

const QuestionsFetchError = ({isQuestionsError}: NotFoundQuestionsProps) => {
    return (<div>
        <p>Не получилось загрузить вопросы </p>
        <p>Статус ошибки: {(isQuestionsError as FetchBaseQueryError & { data: IQueryError })?.data?.statusCode}</p>
        <p>Текс ошибки: {(isQuestionsError as FetchBaseQueryError & { data: IQueryError })?.data?.message}</p>
    </div>)
};

export default QuestionsFetchError;