function doSomething(callback: (result: string) => void) {
    console.log('in progress...')
    callback('success!')
}

doSomething((msg) => {
    console.log(msg);
})

const nums = [3,1,4,1,5,9]
const sorted = [...nums].sort((a,b) => a - b)
console.log(sorted)

type MathOp = (a: number, b: number) => number

const add: MathOp = (a,b) => a+b
const mul: MathOp = (a,b) => a*b

function calculate(a: number, b: number, op: MathOp): number {
    return op(a, b)
}

console.log(calculate(10, 3, add))
console.log(calculate(10, 3, mul))

console.log(calculate(10, 3, (a,b) => a -b))

function makeCounter() {
    let count = 0
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count,
    }
}

const counter = makeCounter()
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.getCount())

function createMultiplier(factor: number) {
    return (n: number): number => n * factor
}

const double = createMultiplier(2)
const triple = createMultiplier(3)

console.log(double(5))
console.log(triple(5))

const funcs: (() => void)[] = []
for (let i = 0; i < 3; i++) {
    funcs.push(() => console.log(i))
}

funcs[0]()
funcs[1]()
funcs[2]()

const player = {
    name: 'ivan',
    hp: 100,

    takeDamage(amount: number) {
        this.hp -= amount
        console.log(`${this.name}: HP ${this.hp}`)
    }
}

player.takeDamage(30)

const fn = player.takeDamage
// fn(10)

const safeFn = player.takeDamage.bind(player)
safeFn(10)

const safeFn2 = (amount: number) => player.takeDamage(amount)
safeFn2(10)

class Timer {
    seconds = 0;

    start() {
        setInterval(() => {
            this.seconds++
            console.log(`${this.seconds} seconds elapsed`)
        }, 1000)
    }
}

// const timer = new Timer();
// timer.start()

function createGreeter(prefix: string): (name: string) => void{
    return (name: string) => {
        console.log(`${prefix} ${name}`)
    }
}

const hello = createGreeter('Hi')
hello('ivan')
hello('chung')

const arr = [5,2,8,1,9]
const descArr = [...arr].sort((a,b) => b-a)
console.log(descArr)
