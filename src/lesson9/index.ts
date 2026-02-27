export {};

// enum Direction {
//     Up, Down, Left, Right,
// }

// enum Status {
//     Active = 'ACTIVE', Inactive = 'Inactive', Pending = 'Pending',
// }

// const d: Direction = Direction.Up
// const s: Status = Status.Active
// console.log(d)
// console.log(s)

const Direction = {
    Up: 0, Down: 1, Left: 2, Right: 3,
} as const

type Direction = (typeof Direction)[keyof typeof Direction]

const d: Direction = Direction.Up
// const d2: Direction = 5

const HttpMethod = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
} as const;

type HttpMethod = (typeof HttpMethod) [keyof typeof HttpMethod]

interface Cat {
    meow(): void;
    purr(): void;
}

interface Dog {
    bark(): void;
    fetch(): void;
}

function isCat(pet: Cat | Dog): pet is Cat {
    return 'meow' in pet
}

function handlePet(pet: Cat | Dog) {
    if (isCat(pet)) {
        pet.meow()
        pet.purr()
    } else {
        pet.bark()
    }
}

const values: (string | null | undefined) [] = ['hello', null, 'world', undefined]

const filtered1 = values.filter(v => v != null)
// filtered1: (string | null | undefined) []

const filtered2 = values.filter((v): v is string => v != null)
// filtered2: string[]

function format(value: string): string;
function format(value: number): string;
function format(value: Date): string;

function format(value: string | number | Date): string {
    if (typeof value === 'string') {
        return value.trim()
    } else if (typeof value === 'number') {
        return value.toFixed(2)
    } else {
        return value.toISOString()
    }
}

format('hello')
format(3.14159)
format(new Date())
// format(true)

function isDog(value: Cat | Dog): value is Dog {
    return 'bark' in value
}

console.log(typeof isDog({ bark: () => {}, fetch: () => {} }))

function parse(input: string): string[]
function parse(input: string[]): string;

function parse(input: string | string[]): string | string[] {
    if (typeof input === 'string') {
        return input.split(',')
    } else {
        return input.join(',')
    }
}

const result1 = parse('a,b,c')
const result2 = parse(['a', 'b'])
// 오버로드는 입력타입에 따라 반환타입이 달라질 떄 가장 유용

// let a: any = 'hello'
// a.foo.bar.baz();
// a.toFixed(2);

// let u: unknown = 'hello'
// // u.toUpperCase();

// any: 타입 검사를 완전히 끈다.
// unknown: 타입을 모르지만, 사용 전에 확인 필요

// bad: any사용
// async function fetchUser(): Promise<any> {
//     const res = await fetch('/api/user')
//     return res.json()
// }

// const user = await fetchUser()
// user.name;

interface User {
    name: string
    email: string
}

function isUser(data: unknown): data is User {
    return (
        typeof data === 'object' &&
        data !== null &&
        'name' in data &&
        'email' in data
    )
}

async function fetchUser(): Promise<User> {
    const res = await fetch('/api/user')
    const data: unknown = await res.json()

    if (!isUser(data)) {
        throw new Error('Invalid user data')
    } 
    return data
}
