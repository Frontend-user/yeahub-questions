import {IQuestionsPaginateParams} from "@/entities/questions";
import {ISelectItem} from "@/shared/types/types.ts";


interface PropsDefineParams {
    questionsPaginateParams: IQuestionsPaginateParams;
    searchParams: URLSearchParams;
    complexityList: ISelectItem[]
}

interface IQuestionPageParams {
    name: 'specialization' | 'keywords' | 'rate' | 'skills' | 'limit' | 'page' | 'complexity'
    type: 'number' | 'string';
    action: 'get' | 'getAll';
    defaultValue?: number
}

type IQuestionPageParamsKeys = IQuestionPageParams['name']
type IResultParams = {
    [key in IQuestionPageParamsKeys]?: string | number | number[] | string[];
}

export function defineParams({questionsPaginateParams, searchParams, complexityList}: PropsDefineParams) {

    const questionPageParams: IQuestionPageParams[] = [
        {
            name: 'specialization',
            type: 'number',
            action: 'get'
        },
        {
            name: 'keywords',
            type: 'string',
            action: 'get'
        },
        {
            name: 'rate',
            type: 'string',
            action: 'getAll'
        },
        {
            name: 'skills',
            type: 'string',
            action: 'getAll'
        },
        {
            name: 'limit',
            type: 'number',
            action: 'get',
            defaultValue: questionsPaginateParams.limit
        },
        {
            name: 'page',
            type: 'number',
            action: 'get',
            defaultValue: questionsPaginateParams.page
        },
    ]
    const resultParams: IResultParams = {}
    const complexityIds = searchParams.getAll('complexity')
    if (complexityIds.length && complexityList) {
        const arr = getComplexityIdsByQuery(complexityIds, complexityList)
        resultParams['complexity'] = arr

    }
    questionPageParams.forEach((item: IQuestionPageParams) => {
        if (searchParams.get(item.name)) {
            const getValue: string | string[] | null = item.action === 'get'
                ? searchParams.get(item.name)
                : searchParams.getAll(item.name)
            if (getValue) {
                resultParams[item.name] = item.type === 'number' ? Number(getValue) : getValue
            }
        } else if (item.defaultValue) {
            resultParams[item.name] = item.defaultValue
        }
    })

    return resultParams
}

export function getComplexityIdsByQuery(queryList:string[], complexityList:ISelectItem[]):number[] {
    return queryList.reduce((acc: number[], itemId: string) => {
        const findedItem = complexityList.find(_ => _.id === +itemId)
        if (findedItem && findedItem.value) {
            return [...acc, ...findedItem.value]
        }
        return acc
    }, [])
}