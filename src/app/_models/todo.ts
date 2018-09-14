export enum TodoType { HIGH, MEDIUM, LOW }

export interface Todo {
    id: string;
    type: string;
    desc: string;
}
