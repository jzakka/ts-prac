export {};

function first<T> (array: T[]): T {
    return array[0];
}

first<number>([1,2,3])
first(['a', 'b', 'c'])

function last<T> (array: T[]): T | undefined {
    return array[array.length - 1];
}

console.log(last([1,2,3]))
console.log(last(['a', 'b', 'c']))

function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

console.log(pair(1, 'hello'))
console.log(pair(true, { name: 'Alice' }))

interface Box<T> {
    value: T
}

const numberBox: Box<number> = { value: 42 }
const stringBox: Box<string> = { value: 'hello' }

interface KeyValue<K, V> {
    key: K
    value: V
}

const kv: KeyValue<string, number> = {
    key: 'age',
    value: 30
}

type Result<T> =
    | { success: true; data: T }
    | { success: false; error: string }

type User = {
    id: number
    name: string
}

function fetchUser(id: number): Result<User> {
    if (id > 0) {
        return { success: true, data: { id, name: 'Alice' } }
    }
    return { success: false, error: 'Invalid ID'}
}

interface HasLength {
    length: number;
}

function logLength<T extends HasLength>(item: T): void {
    console.log(item.length);
}

logLength('hello');
logLength([1, 2, 3]);
// logLength(123);

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user = {name: 'Alice', age: 30};
getProperty(user, 'name');
// getProperty(user, 'email');

interface ApiResponse<T> {
    status: number
    data: T
    timestamp: number
}

interface Product { 
    id: number
    title: string
    price: number
}

const userResponse: ApiResponse<User> = {
    status: 200,
    data: { id: 1, name: 'Alice' },
    timestamp: Date.now()
}

const productResponse: ApiResponse<Product[]> = {
    status: 200,
    data: [
        { id: 1, title: 'Book', price: 10 },
        { id: 2, title: 'Pen', price: 2 }
    ],
    timestamp: Date.now(),
}

class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop());

const stringStack = new Stack<string>();
stringStack.push('hello');
stringStack.push('world');
console.log(stringStack.peek());

interface Response<T = unknown> {
    data: T;
    error?: string;
}

const res1: Response = {data: 'anything'}
const res2: Response<number> = {data: 42}
// const res3: Response<number> = { data: 'wrong'}

type ApiResult<T> = 
    | { success: true; data: T }
    | { success: false, error: string}

function unwrap<T>(apiResult: ApiResult<T>): T {
    switch (apiResult.success) {
        case true:
            return apiResult.data;
        case false:
            throw new Error(apiResult.error);
    }
}

const successResult: ApiResult<number> = { success: true, data: 42 }
const errorResult: ApiResult<number> = { success: false, error: 'failed' }

console.log(unwrap(successResult))
// unwrap(errorResult)
