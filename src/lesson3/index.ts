export {};

interface User {
    name: string;
    age: number;
}

const user: User = {name: 'ivan', age: 26}
console.log(user)

interface Post {
    title: string
    content: string
    tags?: string[]
    readonly createdAt: string
}

const post1: Post = {
    title: 'first post',
    content: 'Hi',
    createdAt: '2026-02-20',
}

const post2: Post = {
    title: 'second post',
    content: 'Nice to meet you',
    tags: ['ts', 'tutorial'],
    createdAt: '2025-01-02',
}

// post1.createdAt = '2026-03-01'

console.log(post1.tags?.length ?? 0)
console.log(post2.tags?.length ?? 0)

type UserID = number
type Email = string

type Product = {
    id: number
    name: string
    price: number
}

const product: Product = {id:1, name: 'macbook', price: 2000000}
console.log(product)

type StringOrNumber = string | number
type Point = [number, number]
type Callback = (date: string) => void

const point: Point = [10, 20]
const id: StringOrNumber = 'abc'

interface Animal {
    name: string
}

interface Animal { 
    sound: string
}

const cat: Animal = {
    name: 'cat', sound: "meow",
}

interface BaseEntity {
    id: number;
    createdAt: string;
}

interface UserEntity extends BaseEntity {
    name: string;
    email: string;
}

const admin: UserEntity = {
    id: 1,
    createdAt: '2026-02-20',
    name: 'admin',
    email: 'admin@test.com',
}

console.log(admin)

interface Timestamped {
    createdAt: string
    updatedAt: string
}

interface SoftDeletable {
    deletedAt?: string
}

interface Article extends Timestamped, SoftDeletable {
    title: string,
    content: string
}

const article: Article = {
    title: 'title',
    content: 'content',
    createdAt: '2026-02-20',
    updatedAt: '2026-02-20'
}

console.log(article)

type AdminUser = UserEntity & {
    role: 'admin';
    permission: string[];
}

const superAdmin: AdminUser = {
    id: 2,
    createdAt: '2026-02-20',
    name: 'super admin',
    email: 'super@test.com',
    role: 'admin',
    permission: ['read', 'write', 'delete'],
}

console.log(superAdmin)

interface Printable {
    toString(): string
}

class MyClass {
    toString() {
        return 'I am myClass'
    }
}

function printIt(obj: Printable) {
    console.log(obj.toString())
}

printIt(new MyClass())
printIt({ toString: () => 'instance also available!'})

interface Position {x: number; y: number}
interface Coordinate {x: number; y: number}

const pos: Position = {x:1, y:2}
const coord: Coordinate = pos
console.log(coord)

interface StringMap {
    [key: string]: number
}

const scores: StringMap = {
    math: 95,
    english: 88,
    science: 92,
}

scores['history'] = 90
console.log(scores)

const grades: Record<string, number> = {
    math: 95,
    english: 88,
}
console.log(grades)

interface ApiResponse {
    status: number;
    data: string;
    error?: string;
    readonly timestamp: string
}

interface PostComment extends BaseEntity{
    content: string
}

const comment: PostComment = {
    id: 1,
    createdAt: '2026-02-20',
    content: 'Hello World!',
}

console.log(comment)

