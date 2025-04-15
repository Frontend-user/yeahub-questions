
interface IPaginateParams {
    firstPage: number;
    lastPage: number;
    showPages: number[],
    currentPage: number;
}

export type {IPaginateParams}