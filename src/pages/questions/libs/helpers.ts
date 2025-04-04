type TParams = {
    specialization?: number
    keywords?: string | null
    skills?: string[]
    complexity?: string[]
    rate?: string[]
    limit?: number
    page?: string
}

export function defineParams(questionsPaginateParams, searchParams, complexityList) {

    const params = [
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
    let resultParams: TParams = {}
    const complexityIds = searchParams.getAll('complexity')
    if (complexityIds.length && complexityList) {
        let arr = complexityIds.reduce((acc, itemId) => {
            let newVal = complexityList.find(_ => _.id === +itemId)
            if (newVal) {
                return newVal ? [...acc, ...newVal.value] : acc
            }
        }, [])
        resultParams['complexity'] = arr
    }
    params.forEach((item) => {
        if (searchParams.get(item.name)) {
            let getValue = item.action === 'get'
                ? searchParams.get(item.name)
                : searchParams.getAll(item.name)
            resultParams[item.name] = item.type === 'number' ? Number(getValue) : getValue
        } else if (item.defaultValue) {
            resultParams[item.name] = item.defaultValue
        }
    })

    return resultParams
}

