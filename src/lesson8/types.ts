export {};

export interface User {
    id: number;
    name: string;
    email: string;
}

export type Status = 'active' | 'inactive';

export default interface Config {
    apiUrl: string;
    timeout: number;
}

export type Todo = {
    id: number;
    title: string;
    completed: boolean;
}

