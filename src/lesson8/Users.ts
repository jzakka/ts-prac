export {};

interface UserData {
    id: number;
    name: string;
}

export default class User {
    constructor(public id: number, public name: string){}

    greet(): string {
        return `Hello, ${this.name}!`;
    }
}

