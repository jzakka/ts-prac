const multiply = (a: number, b: number): number => {
    return a * b;
};

const subtract = (a: number, b: number): number => a - b;

console.log(multiply(2,3))
console.log(subtract(5,3))

const greet = (name: string, suffix?: string): string => {
    return `Hello ${name}${suffix ?? ""}`;
}

console.log(greet('ivan'))
console.log(greet('ivan', 'chung'))

const greet2 = (name: string, suffix: string = "씨"): string => {
    return `Hello ${name}${suffix}`;
}

console.log(greet2('sangHwa'))
console.log(greet2('sangHwa', "Chung"))

// const user = { name: 'ivan', age: 26, city: 'Seoul'}
// const {name: userName, age: userAge, city} = user
// console.log(userName, userAge, city)

const colors = ['red', 'green', 'blue']
const [first, second, third] = colors
console.log(first, second)

const getPoint = (): [number, number] => [10, 20]
const [x, y] = getPoint()
console.log(x, y)

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const merged = [...arr1, ...arr2]
console.log(merged)

const base = {name: 'ivan', age: 25}
const updated = {...base, age: 26}
console.log(updated)

const numbers = [1,2,3,4,5,6,7,8,9,10]

const doubled = numbers.map(n => n * 2)
console.log('map:', doubled)

const evens = numbers.filter(n => n%2 === 0)
console.log('filter:', evens)

const firstBig = numbers.find(n => n>7)
console.log('find:', firstBig)

const sum = numbers.reduce((acc, n)=>acc + n, 0)
console.log('reduce:', sum)

const result = numbers.filter((n) => n%2==0).map(n => n * 2)
console.log('chain:', result)

numbers.forEach(n => console.log(n))

const users: {name: string, age: number}[] = [
    // {name: 'ivan', age: 24},
    // {name: 'ovan', age: 10},
    // {name: 'NBAH', age: 22},
    // {name: 'chung', age: 35},
]
const [firstGuyAge] = users.filter(u => u.age >= 20).map(u => u.name)
console.log(firstGuyAge)
