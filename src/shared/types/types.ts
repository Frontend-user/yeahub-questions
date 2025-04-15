export interface ISelectItem {
    id: number
    title: string
    imageSrc?: string
    value?: number[]
    selected: boolean
}
export interface UiRoute {
    id: number;
    name: string;
    to: string;
    isActive: boolean
}

export type LikeTypes = 'like' | 'dislike'